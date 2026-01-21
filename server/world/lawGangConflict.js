import { Gangs } from "./gangs.js";

export function runLawGangConflict(region) {
  const law = region.lawEnforcement;

  for (const gangId of region.crime.gangs) {
    const gang = Gangs[gangId];
    if (!gang) continue;

    const suppression = law.guardCount * 0.05 - gang.size * 0.02;

    gang.size -= suppression;
    gang.heat += suppression * 2;

    if (gang.size <= 0) {
      gang.active = false;
    }
  }
}
