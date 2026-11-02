// Where the sun stands at any moment and place (a short form of the NOAA formulas, good to a fraction of a degree), so the 3D view can
// show the light of another time of day than now: the time-of-day slider.

const RAD = Math.PI / 180;

/** Elevation above the horizon and azimuth clockwise from north, in degrees, as sun.sun reports them. */
export function sunPosition(date: Date, latitude: number, longitude: number): { elevation: number; azimuth: number } {
  // days since 1 January 2000, 12:00 UTC
  const d = date.getTime() / 86400000 - 10957.5;
  const anomaly = (357.529 + 0.98560028 * d) * RAD;
  const meanLongitude = 280.459 + 0.98564736 * d;
  const ecliptic = (meanLongitude + 1.915 * Math.sin(anomaly) + 0.02 * Math.sin(2 * anomaly)) * RAD;
  const tilt = (23.439 - 0.00000036 * d) * RAD;
  const ascension = Math.atan2(Math.cos(tilt) * Math.sin(ecliptic), Math.cos(ecliptic));
  const declination = Math.asin(Math.sin(tilt) * Math.sin(ecliptic));
  const sidereal = (((18.697374558 + 24.06570982441908 * d) % 24) + 24) % 24;
  const hourAngle = (sidereal * 15 + longitude) * RAD - ascension;
  const phi = latitude * RAD;
  const elevation = Math.asin(Math.sin(phi) * Math.sin(declination) + Math.cos(phi) * Math.cos(declination) * Math.cos(hourAngle));
  const azimuth = Math.atan2(Math.sin(hourAngle), Math.cos(hourAngle) * Math.sin(phi) - Math.tan(declination) * Math.cos(phi)) / RAD + 180;
  return { elevation: elevation / RAD, azimuth: ((azimuth % 360) + 360) % 360 };
}

/** The wall clock of `zone` at an instant, as if it were UTC (its difference to the instant is the zone's offset). */
function wallClock(instant: number, zone: string): number {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", { timeZone: zone, hourCycle: "h23", year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" })
      .formatToParts(new Date(instant))
      .map((p) => [p.type, Number(p.value)]),
  );
  return Date.UTC(parts.year, parts.month - 1, parts.day, parts.hour, parts.minute, parts.second);
}

/**
 * Today at `hours` o'clock in `zone` (Home Assistant's time zone, so a tablet set to another zone, or a kiosk on UTC,
 * still shows the home's light); without a zone, or with one the browser does not know, in the browser's own zone.
 */
export function todayAt(hours: number, zone?: string | null, now = new Date()): Date {
  const [h, m] = [Math.floor(hours), Math.round((hours % 1) * 60)];
  if (zone) {
    try {
      const today = new Date(wallClock(now.getTime(), zone));
      const wanted = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), h, m);
      // the zone's offset at the wanted time, checked once more across a change to or from summer time
      let at = wanted - (wallClock(wanted, zone) - wanted);
      at = wanted - (wallClock(at, zone) - at);
      return new Date(at);
    } catch {
      // an unknown zone: fall back to the browser's
    }
  }
  const at = new Date(now);
  at.setHours(h, m, 0, 0);
  return at;
}
