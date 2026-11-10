import assert from "node:assert/strict";
import { test } from "node:test";
import { polygonArea } from "../model.ts";
import { ifcEntities, importIfc } from "./ifc.ts";

// two storeys in millimetres; a 4 × 3 m kitchen as a rectangle profile, a living room as a polyline, the upper storey's bedroom turned 90°
const SAMPLE = `ISO-10303-21;
HEADER;
FILE_NAME('test.ifc','2026-11-03',(''),(''),'','','');
ENDSEC;
DATA;
#1=IFCSIUNIT(*,.LENGTHUNIT.,.MILLI.,.METRE.);
#10=IFCCARTESIANPOINT((0.,0.,0.));
#11=IFCAXIS2PLACEMENT3D(#10,$,$);
#12=IFCLOCALPLACEMENT($,#11);
#20=IFCBUILDINGSTOREY('a',$,'EG',$,$,#12,$,'Erdgeschoss',.ELEMENT.,0.);
#21=IFCBUILDINGSTOREY('b',$,'OG',$,$,#12,$,$,.ELEMENT.,2800.);
#30=IFCCARTESIANPOINT((2000.,1500.));
#31=IFCAXIS2PLACEMENT2D(#30,$);
#32=IFCRECTANGLEPROFILEDEF(.AREA.,$,#31,4000.,3000.);
#33=IFCAXIS2PLACEMENT3D(#10,$,$);
#34=IFCDIRECTION((0.,0.,1.));
#35=IFCEXTRUDEDAREASOLID(#32,#33,#34,2600.);
#36=IFCSHAPEREPRESENTATION($,'Body','SweptSolid',(#35));
#37=IFCPRODUCTDEFINITIONSHAPE($,$,(#36));
#38=IFCCARTESIANPOINT((1000.,0.,0.));
#39=IFCAXIS2PLACEMENT3D(#38,$,$);
#40=IFCLOCALPLACEMENT(#12,#39);
#41=IFCSPACE('c',$,'1',$,$,#40,#37,'K\\X2\\00FC\\X0\\che',.ELEMENT.,.INTERNAL.,$);
#50=IFCCARTESIANPOINT((0.,0.));
#51=IFCCARTESIANPOINT((5000.,0.));
#52=IFCCARTESIANPOINT((5000.,4000.));
#53=IFCCARTESIANPOINT((0.,4000.));
#54=IFCPOLYLINE((#50,#51,#52,#53,#50));
#55=IFCARBITRARYCLOSEDPROFILEDEF(.AREA.,$,#54);
#56=IFCEXTRUDEDAREASOLID(#55,#33,#34,2600.);
#57=IFCSHAPEREPRESENTATION($,'Body','SweptSolid',(#56));
#58=IFCPRODUCTDEFINITIONSHAPE($,$,(#57));
#59=IFCCARTESIANPOINT((5000.,0.,0.));
#60=IFCAXIS2PLACEMENT3D(#59,$,$);
#61=IFCLOCALPLACEMENT(#12,#60);
#62=IFCSPACE('d',$,'2',$,$,#61,#58,'Wohnzimmer',.ELEMENT.,.INTERNAL.,$);
#70=IFCDIRECTION((0.,1.,0.));
#71=IFCAXIS2PLACEMENT3D(#10,$,#70);
#72=IFCLOCALPLACEMENT(#12,#71);
#73=IFCSPACE('e',$,'Schlafen',$,$,#72,#37,$,.ELEMENT.,.INTERNAL.,$);
#90=IFCCARTESIANPOINT((2500.,-120.,0.));
#91=IFCAXIS2PLACEMENT3D(#90,$,$);
#92=IFCLOCALPLACEMENT(#12,#91);
#93=IFCDOOR('h',$,'T1',$,$,#92,$,$,2010.,885.);
#94=IFCCARTESIANPOINT((10120.,1000.,900.));
#95=IFCAXIS2PLACEMENT3D(#94,$,#70);
#96=IFCLOCALPLACEMENT(#12,#95);
#97=IFCWINDOW('i',$,'F1',$,$,#96,$,$,1200.,1600.);
#98=IFCRELCONTAINEDINSPATIALSTRUCTURE('j',$,$,$,(#93,#97),#20);
#80=IFCRELAGGREGATES('f',$,$,$,#20,(#41,#62));
#81=IFCRELAGGREGATES('g',$,$,$,#21,(#73));
ENDSEC;
END-ISO-10303-21;
`;

test("the entities of an IFC file are read with their arguments", () => {
  const all = ifcEntities(SAMPLE);
  assert.equal(all.get(41)?.type, "IFCSPACE");
  assert.equal(all.get(41)?.args[7], "Küche");
  assert.deepEqual(all.get(1)?.args, [null, ".LENGTHUNIT.", ".MILLI.", ".METRE."]);
});

test("storeys become floors and spaces rooms, in metres, with their footprints", () => {
  const { building, report } = importIfc(SAMPLE);
  assert.equal(report.floors, 2);
  assert.equal(report.rooms, 3);
  const [eg, og] = building.floors;
  assert.equal(eg.name, "Erdgeschoss");
  assert.equal(og.name, "OG");
  assert.equal(og.elevation, 2.8);
  assert.deepEqual(eg.rooms.map((r) => r.name), ["Küche", "Wohnzimmer"]);
  assert.ok(Math.abs(polygonArea(eg.rooms[0].points) - 12) < 1e-6);
  assert.ok(Math.abs(polygonArea(eg.rooms[1].points) - 20) < 1e-6);
  // the kitchen (x 1–5 m) and the living room (x 5–10 m) touch along x = 5 m
  const maxKitchen = Math.max(...eg.rooms[0].points.map((p) => p[0]));
  const minLiving = Math.min(...eg.rooms[1].points.map((p) => p[0]));
  assert.ok(Math.abs(maxKitchen - minLiving) < 1e-6);
  // the bedroom is the kitchen's rectangle turned 90°: 3 m wide, 4 m deep
  const xs = og.rooms[0].points.map((p) => p[0]), zs = og.rooms[0].points.map((p) => p[1]);
  assert.ok(Math.abs(Math.max(...xs) - Math.min(...xs) - 3) < 1e-6);
  assert.ok(Math.abs(Math.max(...zs) - Math.min(...zs) - 4) < 1e-6);
});

test("a file without spaces is refused", () => {
  assert.throws(() => importIfc("ISO-10303-21;\nDATA;\n#1=IFCSIUNIT(*,.LENGTHUNIT.,$,.METRE.);\nENDSEC;"), /ifc_empty/);
});

test("doors and windows land in the nearest room wall with their size and sill", () => {
  const { building, report } = importIfc(SAMPLE);
  assert.equal(report.openings, 2);
  const eg = building.floors[0];
  const [door, win] = eg.openings;
  // the door: 12 cm outside the kitchen's south wall (y = 0), its middle at x = 2.5 + 0.4425 m
  const kitchen = eg.rooms.find((r) => r.id === door.room_id)!;
  assert.equal(kitchen.name, "Küche");
  assert.deepEqual([door.type, door.width, door.height, door.sill, door.leaves], ["door", 0.885, 2.01, 0, 1]);
  const a = kitchen.points[door.edge], b = kitchen.points[(door.edge + 1) % kitchen.points.length];
  const length = Math.hypot(b[0] - a[0], b[1] - a[1]);
  const at = [a[0] + ((b[0] - a[0]) * door.offset) / length, a[1] + ((b[1] - a[1]) * door.offset) / length];
  // the kitchen starts at x = 1 m in the drawing: the door's middle is 1.9425 m from its left wall
  assert.ok(Math.abs(at[0] - Math.min(...kitchen.points.map((q) => q[0])) - 1.9425) < 1e-3, String(at));
  // the window: in the living room's east wall (x = 10 m), turned 90°, 0.9 m above the floor, two leaves
  assert.equal(eg.rooms.find((r) => r.id === win.room_id)!.name, "Wohnzimmer");
  assert.deepEqual([win.type, win.width, win.height, win.sill, win.leaves], ["window", 1.6, 1.2, 0.9, 2]);
});
