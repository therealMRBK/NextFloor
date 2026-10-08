"""3D models (binary glTF) you own, kept on your Home Assistant and shown in place of a pack item's simple shape.

NextFloor ships none of them. A pack item names a model with `mesh`; when a file with that id exists in
`<config>/nextfloor_meshes/`, the 3D view draws it, otherwise the item's own parts. Admins upload them (see
docs/models.md); everyone logged in can read them.
"""

from __future__ import annotations

from http import HTTPStatus
from pathlib import Path
import re

from aiohttp import web
from homeassistant.components.http import HomeAssistantView
from homeassistant.core import HomeAssistant

from .const import DOMAIN

MESH_DIR = "nextfloor_meshes"
MAX_BYTES = 12 * 1024 * 1024
_ID = re.compile(r"^[a-z0-9_]{1,48}$")
_REGISTERED = f"{DOMAIN}_mesh_view"


def _path(hass: HomeAssistant, mesh_id: str) -> Path | None:
    if not _ID.match(mesh_id):
        return None
    return Path(hass.config.path(MESH_DIR)) / f"{mesh_id}.glb"


class MeshView(HomeAssistantView):
    """Read, upload (admin) or remove (admin) one model."""

    url = "/api/nextfloor/mesh/{mesh_id}"
    name = "api:nextfloor:mesh"
    requires_auth = True

    async def get(self, request: web.Request, mesh_id: str) -> web.Response:
        hass: HomeAssistant = request.app["hass"]
        path = _path(hass, mesh_id)
        if path is None:
            return web.Response(status=HTTPStatus.BAD_REQUEST)
        data = await hass.async_add_executor_job(lambda: path.read_bytes() if path.is_file() else None)
        if data is None:
            return web.Response(status=HTTPStatus.NOT_FOUND)
        return web.Response(
            body=data, content_type="model/gltf-binary", headers={"Cache-Control": "private, max-age=3600"}
        )

    async def post(self, request: web.Request, mesh_id: str) -> web.Response:
        hass: HomeAssistant = request.app["hass"]
        if not request["hass_user"].is_admin:
            return web.Response(status=HTTPStatus.UNAUTHORIZED)
        path = _path(hass, mesh_id)
        if path is None:
            return web.Response(status=HTTPStatus.BAD_REQUEST)
        data = await request.read()
        if len(data) > MAX_BYTES:
            return web.Response(status=HTTPStatus.REQUEST_ENTITY_TOO_LARGE)
        if data[:4] != b"glTF":
            return web.Response(status=HTTPStatus.BAD_REQUEST, text="not a binary glTF (.glb) file")

        def write() -> None:
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_bytes(data)

        await hass.async_add_executor_job(write)
        return web.Response(status=HTTPStatus.CREATED)

    async def delete(self, request: web.Request, mesh_id: str) -> web.Response:
        hass: HomeAssistant = request.app["hass"]
        if not request["hass_user"].is_admin:
            return web.Response(status=HTTPStatus.UNAUTHORIZED)
        path = _path(hass, mesh_id)
        if path is None:
            return web.Response(status=HTTPStatus.BAD_REQUEST)
        await hass.async_add_executor_job(lambda: path.unlink(missing_ok=True))
        return web.Response(status=HTTPStatus.NO_CONTENT)


def async_register_mesh_view(hass: HomeAssistant) -> None:
    """Register the model endpoint once."""
    if hass.data.get(_REGISTERED):
        return
    hass.data[_REGISTERED] = True
    hass.http.register_view(MeshView())
