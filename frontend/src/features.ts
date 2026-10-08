/** The larger live features of NextFloor (weather outside, energy flow, car, sound, TV screens, cameras). */

export type Feature = "cameras" | "weather" | "screens" | "energy" | "sound" | "car";

/** The features shown on the extensions page. */
export const FEATURES: readonly Feature[] = ["weather", "energy", "car", "sound", "screens", "cameras"];

/** The project's home: issues, discussions and the readme. */
export const REPO_URL = "https://github.com/therealMRBK/NextFloor";
