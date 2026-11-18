import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

// A Lit `?name=${false}` binding leaves the attribute off, which does NOT switch off a property that the element
// starts as true: the weather stayed on in the card and the panel although it was switched off (#196). A property
// the view starts as true must be bound as `.name=${…}`.
const view = readFileSync(new URL("./components/view3d.ts", import.meta.url), "utf8");
const startsTrue = new Set([...view.matchAll(/^\s+this\.(\w+) = true;$/gm)].map((m) => m[1]));

test("the view starts some properties as true (the check below has something to guard)", () => {
  assert.ok(startsTrue.has("weather"));
  assert.ok(startsTrue.size > 3);
});

for (const file of ["card.ts", "panel.ts", "components/editor.ts"]) {
  test(`${file} never binds a property that the 3D view starts as true with ?name=`, () => {
    const src = readFileSync(new URL(`./${file}`, import.meta.url), "utf8");
    const wrong: string[] = [];
    for (const block of src.matchAll(/<nf-view3d[\s\S]*?><\/nf-view3d>/g)) {
      for (const m of block[0].matchAll(/\s\?(\w+)=\$\{/g)) if (startsTrue.has(m[1])) wrong.push(m[1]);
    }
    assert.deepEqual(wrong, [], `use .${wrong[0] ?? "name"}=\${…} instead of ?${wrong[0] ?? "name"}=\${…}`);
  });
}
