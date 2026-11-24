import assert from "node:assert/strict";
import { test } from "node:test";
import type { HomeAssistant } from "./types.ts";

// The language file a Home Assistant language reads: Traditional Chinese has its own, other zh codes the Simplified one.
test("zh-Hant, zh-TW and zh-HK read the Traditional Chinese file, zh and zh-CN the Simplified one", async () => {
  (globalThis as { __NF_LANGS__?: Record<string, string> }).__NF_LANGS__ = { zh: "aaa", "zh-tw": "bbb", sv: "ccc" };
  const urls: string[] = [];
  (globalThis as { fetch?: unknown }).fetch = (url: URL) => {
    urls.push(String(url));
    return Promise.resolve({ ok: true, json: () => Promise.resolve({}) });
  };
  const { awaitingLanguage } = await import("./i18n.ts");
  const ask = (language: string) => awaitingLanguage({ language } as HomeAssistant, { requestUpdate() {} });
  for (const language of ["zh-Hant", "zh-TW", "zh-HK", "zh_Hant", "zh", "zh-CN", "zh-Hans", "sv", "de", "en"]) ask(language);
  assert.deepEqual(
    urls.map((u) => u.replace(/^.*\/lang\//, "")),
    ["zh-tw.json?v=bbb", "zh.json?v=aaa", "sv.json?v=ccc"],
    "each file is fetched once, Traditional Chinese for the Hant, TW, HK codes",
  );
});
