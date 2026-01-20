import { WorldState } from "./worldState.js";
import { runRegionTick } from "./regionTick.js";
import { runWorldFactionTick } from "./worldFactionTick.js";

export function runWorldTick() {
  // Update regions
  for (const regionId in WorldState.regions) {
    const regionData = WorldState.getRegion(regionId);
    const regionState = WorldState.getRegionState(regionId);

    runRegionTick(regionData, regionState);
  }

  // Update factions
  runWorldFactionTick();
}
