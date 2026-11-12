import assert from "node:assert/strict";
import { test } from "node:test";
import { Vector3 } from "three";
import { blendViews, cameraPosition, clamp, coast, compassAngle, copyView, ease, flightGoal, MAX_PHI, MIN_PHI, northUpHeading, nudgeView, orbitView, panView, type OrbitView } from "./view.ts";

const near = (a: number, b: number, eps = 1e-9) => assert.ok(Math.abs(a - b) < eps, `${a} vs ${b}`);
const view = (extra: Partial<OrbitView> = {}): OrbitView => ({ target: new Vector3(1, 2, 3), radius: 10, theta: 0, phi: Math.PI / 2, ...extra });

test("clamp keeps a value inside its limits", () => {
  assert.equal(clamp(5, 0, 3), 3);
  assert.equal(clamp(-1, 0, 3), 0);
  assert.equal(clamp(2, 0, 3), 2);
});

test("easing starts at 0, ends at 1, is slow at both ends and symmetric", () => {
  near(ease(0), 0);
  near(ease(1), 1);
  near(ease(0.5), 0.5);
  assert.ok(ease(0.1) < 0.1 && ease(0.9) > 0.9);
  near(ease(0.25) + ease(0.75), 1);
});

test("the camera sits at the radius from the target, in the direction the angles say", () => {
  const p = cameraPosition(view());
  near(p.distanceTo(new Vector3(1, 2, 3)), 10);
  near(p.y, 2, 1e-9); // phi = 90°: level with the target
  near(p.z, 13); // theta = 0: in front, along +z
  const above = cameraPosition(view({ phi: 0 }));
  near(above.y, 12);
  const side = cameraPosition(view({ theta: Math.PI / 2 }));
  near(side.x, 11);
});

test("a blend between two views runs from the first to the second", () => {
  const a = view();
  const b = view({ target: new Vector3(5, 6, 7), radius: 20, theta: 1, phi: 1 });
  const start = blendViews(a, b, 0);
  const end = blendViews(a, b, 1);
  near(start.radius, 10);
  near(end.radius, 20);
  assert.ok(end.target.equals(b.target));
  const middle = blendViews(a, b, 0.5);
  near(middle.radius, 15);
  near(middle.theta, 0.5);
});

test("a flight turns the short way round and keeps what it is not told to change", () => {
  const from = view({ theta: 3 });
  assert.ok(Math.abs(flightGoal(from, { theta: -3 }).theta - 3) < 1, "from 3 to -3 goes through π, not back through 0");
  const goal = flightGoal(from, { radius: 4 });
  assert.equal(goal.radius, 4);
  assert.equal(goal.theta, 3);
  assert.equal(goal.phi, from.phi);
  assert.notEqual(goal.target, from.target, "the target is copied");
});

test("copying a view copies its target", () => {
  const a = view();
  const b = copyView(a);
  b.target.x = 99;
  assert.equal(a.target.x, 1);
});

test("dragging turns the view, limits the tilt, and reports the turn for inertia", () => {
  const v = view({ phi: 1 });
  const turn = orbitView(v, 100, 0, 500);
  assert.ok(v.theta < 0 && turn.theta < 0, "dragging right turns the view clockwise");
  near(turn.theta, (-100 / 500) * 3.2);
  orbitView(v, 0, 10000, 500);
  assert.equal(v.phi, MIN_PHI);
  orbitView(v, 0, -10000, 500);
  assert.equal(v.phi, MAX_PHI);
});

test("inertia fades out and then stops", () => {
  const v = view();
  const velocity = { theta: 0.1, phi: 0 };
  let steps = 0;
  while (coast(v, velocity) && steps < 1000) steps++;
  assert.ok(steps > 20 && steps < 200);
  assert.ok(v.theta > 0.3 && v.theta < 1.1, "keeps turning a little");
  assert.equal(coast(v, { theta: 0, phi: 0 }), false);
});

test("panning moves the target sideways, and further when zoomed out", () => {
  const close = view({ radius: 5 });
  const far = view({ radius: 20 });
  panView(close, 100, 0, 500, 50);
  panView(far, 100, 0, 500, 50);
  assert.ok(close.target.x < 1 && far.target.x < close.target.x, "dragging right moves the scene right, so the target left");
  const forward = view();
  panView(forward, 0, 100, 500, 50);
  assert.ok(forward.target.z < 3 || forward.target.z > 3, "dragging down moves the target along the view direction");
  near(forward.target.x, 1);
});

test("walking moves the eye along its heading, turns with the stick and stays inside the floor", async () => {
  const { stepWalk } = await import("./controls.ts");
  const { Vector3 } = await import("three");
  const walk = { eye: new Vector3(0, 1.6, 0), yaw: 0, pitch: 0, stick: [0, 0] as [number, number], keys: new Set(["w"]), bounds: { x0: -1, x1: 1, z0: -1, z1: 1 }, last: 0 };
  assert.ok(stepWalk(walk, 400));
  assert.equal(Math.round(walk.eye.z * 100) / 100, -0.6, "yaw 0 looks towards -z, 1.5 m/s for 0.4 s");
  walk.keys = new Set();
  assert.equal(stepWalk(walk, 400), false, "no key, no stick: no step");
  walk.stick = [-1, 0];
  stepWalk(walk, 500);
  assert.ok(walk.yaw > 0.8, "the stick to the left turns left");
  walk.stick = [0, -1];
  for (let i = 0; i < 50; i++) stepWalk(walk, 100);
  assert.ok(Math.abs(walk.eye.x) <= 1 && Math.abs(walk.eye.z) <= 1, "never leaves the floor");
});

test("a navigation step turns, tilts and zooms the view and keeps it inside its limits", () => {
  const v = view({ phi: 0.8 });
  const next = nudgeView(v, { turn: 0.5, tilt: 0.1, zoom: 0.8 }, 2, 80);
  near(next.theta, 0.5);
  near(next.phi, 0.9);
  near(next.radius, 8);
  assert.equal(v.theta, 0, "the given view is left alone");
  assert.notEqual(next.target, v.target);
  near(nudgeView(v, { tilt: -5 }, 2, 80).phi, MIN_PHI);
  near(nudgeView(v, { tilt: 5 }, 2, 80).phi, MAX_PHI);
  near(nudgeView(v, { zoom: 0.01 }, 2, 80).radius, 2);
  near(nudgeView(v, { zoom: 100 }, 2, 80).radius, 80);
  near(nudgeView(v, {}, 2, 80).radius, 10);
});

test("the compass needle points to north whatever the view and the plan's north", () => {
  // the camera looks along (-sin θ, -cos θ) and the plan's north is (sin N, -cos N): the needle turns by θ + N
  for (const [heading, north] of [[0, 0], [-0.6, 0], [1.2, 40], [-2, 270]] as const) {
    const n = (north * Math.PI) / 180;
    const forward = [-Math.sin(heading), -Math.cos(heading)];
    const right = [Math.cos(heading), -Math.sin(heading)];
    const toNorth = [Math.sin(n), -Math.cos(n)];
    const onScreen = Math.atan2(toNorth[0] * right[0] + toNorth[1] * right[1], toNorth[0] * forward[0] + toNorth[1] * forward[1]);
    near(Math.cos(compassAngle(heading, north)), Math.cos(onScreen));
    near(Math.sin(compassAngle(heading, north)), Math.sin(onScreen));
    near(Math.cos(compassAngle(northUpHeading(north), north)), 1, 1e-9);
  }
});
