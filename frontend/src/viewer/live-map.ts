/**
 * The real map under the plan: map tiles drawn into one canvas and laid on the ground as a dimmed plane, turned by the plan's north.
 * The tiles come from a tile server through the browser (plain image requests); nothing is loaded while the map is off.
 */
import { CanvasTexture, DoubleSide, Mesh, MeshBasicMaterial, PlaneGeometry, SRGBColorSpace, type Scene } from "three";
import { mapLook, mapShown, mapTiles, planOfMap, templateOf, tileUrl, type MapTile } from "../map-geo.ts";
import { tileBlob } from "../tiles.ts";
import type { MapSettings } from "../model.ts";

const TILE_PX = 256;
const DEG = Math.PI / 180;

export class MapLayer {
  private readonly mesh = new Mesh(new PlaneGeometry(1, 1), new MeshBasicMaterial({ transparent: true, depthWrite: false, side: DoubleSide }));
  private canvas: HTMLCanvasElement | null = null;
  private texture: CanvasTexture | null = null;
  /** What the loaded tiles are for: place, zoom and tile address. */
  private key = "";
  /** A newer set of tiles makes the pictures of an older one that still arrive be dropped. */
  private generation = 0;
  /** The centre of the tile grid in the map frame (metres east / north of the anchor). */
  private centre: [number, number] = [0, 0];
  /** Called when more tiles have arrived, so the view draws again. */
  onChange: () => void = () => {};

  private readonly scene: Scene;

  constructor(scene: Scene) {
    this.scene = scene;
    this.mesh.rotation.order = "YXZ";
    this.mesh.renderOrder = -2;
    this.mesh.visible = false;
    this.mesh.name = "live-map";
    scene.add(this.mesh);
  }

  /** Shows, moves or hides the map: `y` is the height of the ground, `north` the plan's north in degrees, `brightness` dims the tiles. */
  set(map: MapSettings | null | undefined, north: number, y: number, brightness = 1): void {
    if (!mapShown(map)) {
      this.mesh.visible = false;
      this.generation++;
      this.key = "";
      return;
    }
    const look = mapLook(map);
    const template = templateOf(map);
    const key = `${map.lat},${map.lon},${look.zoom},${template}`;
    if (key !== this.key) this.load(key, map, look.zoom, template);
    const [east, northM] = this.centre;
    const [x, z] = planOfMap(east, northM, north, look);
    this.mesh.position.set(x, y, z);
    // the texture's right is east and its top is north; a plan turned by `north` clockwise turns the plane the other way round about +y
    this.mesh.rotation.set(-Math.PI / 2, -north * DEG, 0);
    const material = this.mesh.material as MeshBasicMaterial;
    material.opacity = look.opacity;
    // on the dark themes the pale tiles are dimmed as well, so the neon plan stays the brightest thing
    material.color.setScalar(brightness);
    this.mesh.visible = this.canvas !== null;
  }

  private load(key: string, map: MapSettings, zoom: number, template: string): void {
    this.key = key;
    const generation = ++this.generation;
    const tiles = mapTiles(map.lat, map.lon, zoom);
    if (!tiles.length) return;
    const size = tiles[0].size;
    const minEast = Math.min(...tiles.map((t) => t.east));
    const maxNorth = Math.max(...tiles.map((t) => t.north));
    const columns = Math.round((Math.max(...tiles.map((t) => t.east)) - minEast) / size) + 1;
    const rows = Math.round((maxNorth - Math.min(...tiles.map((t) => t.north))) / size) + 1;
    const canvas = document.createElement("canvas");
    canvas.width = columns * TILE_PX;
    canvas.height = rows * TILE_PX;
    this.canvas = canvas;
    this.texture?.dispose();
    this.texture = new CanvasTexture(canvas);
    this.texture.colorSpace = SRGBColorSpace;
    this.texture.anisotropy = 4;
    const material = this.mesh.material as MeshBasicMaterial;
    material.map = this.texture;
    material.needsUpdate = true;
    this.mesh.geometry.dispose();
    this.mesh.geometry = new PlaneGeometry(columns * size, rows * size);
    this.centre = [minEast + (columns * size) / 2, maxNorth - (rows * size) / 2];
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    for (const tile of tiles) this.draw(ctx, tile, template, generation, Math.round((tile.east - minEast) / size), Math.round((maxNorth - tile.north) / size));
  }

  private draw(ctx: CanvasRenderingContext2D, tile: MapTile, template: string, generation: number, col: number, row: number): void {
    void tileBlob(tileUrl(template, tile))
      // a tile that cannot be decoded (an error page instead of a picture) leaves its square empty
      .then((blob) => (blob ? createImageBitmap(blob).catch(() => null) : null))
      .then((bitmap) => {
        if (!bitmap || generation !== this.generation) return;
        ctx.drawImage(bitmap, col * TILE_PX, row * TILE_PX, TILE_PX, TILE_PX);
        if (this.texture) this.texture.needsUpdate = true;
        this.onChange();
      });
  }

  dispose(): void {
    this.generation++;
    this.scene.remove(this.mesh);
    this.mesh.geometry.dispose();
    (this.mesh.material as MeshBasicMaterial).dispose();
    this.texture?.dispose();
  }
}
