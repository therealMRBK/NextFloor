// What a wallbox's status text says: charging, a car plugged in, or neither. States differ between makes
// (`charger_charging`, `Charging`, `lädt`, `ready_to_charge`, `Disconnected`), so words are matched, not fragments (#129).

export type WallboxPhase = "charging" | "plugged" | null;

export function wallboxPhase(state: string, binary: boolean, watts: number | null): WallboxPhase {
  const raw = state.toLowerCase();
  // `charger_free` is no charging, `not_charging` and `ready_to_charge` neither; `unplugged` is no plug
  const negated = /(^|[^a-zä])(not|no|nicht|kein)[_ ]/.test(raw);
  const charging = (watts ?? 0) > 50 || (!negated && !/(^|[^a-zä])ready[_ ]to/.test(raw) && /(^|[^a-zä])(charging|charge|laden|lädt|ladend)(?![a-zä])/.test(raw));
  if (charging) return "charging";
  const detached = /(dis|un|nicht[_ ])(connect|plug|verbunden|angesteckt)/.test(raw);
  const plugged = binary ? raw === "on" : !detached && /connect|plug|insert|ready|angesteckt|verbunden|wait|paused|suspend/.test(raw);
  return plugged ? "plugged" : null;
}
