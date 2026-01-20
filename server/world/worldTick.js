import { WorldState } from "./worldState.js";
import { runRegionTick } from "./regionTick.js";

export function runWorldTick() {
  for (const regionId in WorldState.regions) {
    const regionData = WorldState.getRegion(regionId);
    const regionState = WorldState.getRegionState(regionId);

    runRegionTick(regionData, regionState);
  }
}
