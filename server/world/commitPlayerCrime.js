import { PlayerCrimeActions } from "./playerCrimeActions.js";
import { Gangs } from "./gangs.js";

export function commitPlayerCrime(player, actionType, worldState) {
  const action = PlayerCrimeActions[actionType];
  if (!action) return;

  const region = worldState.getRegion(player.location.regionId);
  if (!region) return;

  // Update player crime state
  player.crime.heat += action.heat;
  player.crime.notoriety += action.severity;
  player.crime.wantedLevel += Math.floor(action.severity / 5);
  player.crime.knownCrimes.push({
    type: actionType,
    region: region.id,
    time: Date.now()
  });

  // Update region crime
  region.crime.crimeLevel += action.regionCrimeImpact;

  // Gang attraction
  for (const gangId of region.crime.gangs) {
    const gang = Gangs[gangId];
    if (!gang) continue;

    gang.influence += action.gangAffinity * 5;
    gang.wealth += action.gangAffinity * 3;
  }

  // Law pressure reaction
  region.crime.lawPressure += action.severity * 0.5;
}
