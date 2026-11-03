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
