import { WorldState } from "./worldState.js";
import { runRegionTick } from "./regionTick.js";
import { runWorldFactionTick } from "./worldFactionTick.js";
import { runCrimeTick } from "./crimeTick.js";
import { runGangFactionInteractions } from "./gangFactionInteraction.js";

export function runWorldTick() {
  // Update regions
  for (const regionId in WorldState.regions) {
    const regionData = WorldState.getRegion(regionId);
    const regionState = WorldState.getRegionState(regionId);
  for (const regionId in WorldState.regions) {
  const region = WorldState.getRegion(regionId);
  runCrimeTick(region, WorldState);
}

runGangFactionInteractions(WorldState);

    runRegionTick(regionData, regionState);
  }

  // Update factions
  runWorldFactionTick();
}
