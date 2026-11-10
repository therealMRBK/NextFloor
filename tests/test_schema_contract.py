"""The plans the frontend writes must pass the server schema (#123, #128).

tests/fixtures/frontend_plans.json is produced by frontend/src/schema-contract.test.ts from the editor's own operations.
"""

import json
from pathlib import Path

import pytest

from custom_components.nextfloor.schema import BUILDING_SCHEMA

PLANS = json.loads((Path(__file__).parent / "fixtures" / "frontend_plans.json").read_text())


def test_the_base_plan_is_accepted() -> None:
    BUILDING_SCHEMA(PLANS["base"])


@pytest.mark.parametrize("shape", sorted(PLANS["roofs"]))
def test_every_roof_shape_with_overhang_per_side_and_a_dormer_is_accepted(shape: str) -> None:
    plan = {**PLANS["base"], "settings": {**PLANS["base"]["settings"], "roof": PLANS["roofs"][shape]}}
    BUILDING_SCHEMA(plan)
