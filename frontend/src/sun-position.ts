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

/** Today (in the browser's time zone) at `hours` o'clock. */
export function todayAt(hours: number, now = new Date()): Date {
  const at = new Date(now);
  at.setHours(Math.floor(hours), Math.round((hours % 1) * 60), 0, 0);
  return at;
}
