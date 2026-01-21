import { WorldState } from "./worldState.js";
import { runRegionTick } from "./regionTick.js";
import { runWorldFactionTick } from "./worldFactionTick.js";
import { runCrimeTick } from "./crimeTick.js";
import { runGangFactionInteractions } from "./gangFactionInteraction.js";
import { runPlayerCrimeTick } from "./playerCrimeTick.js";
import { checkGangRecruitment } from "./playerGangRecruitment.js";

export function runWorldTick() {
  // Update regions
  for (const regionId in WorldState.regions) {
    const regionData = WorldState.getRegion(regionId);
    const regionState = WorldState.getRegionState(regionId);
  for (const regionId in WorldState.regions) {
  const region = WorldState.getRegion(regionId);
  runCrimeTick(region, WorldState);
}
for (const playerId in WorldState.players) {
  const player = WorldState.players[playerId];
  runPlayerCrimeTick(player, WorldState);
  checkGangRecruitment(player, WorldState);
}

runGangFactionInteractions(WorldState);

    runRegionTick(regionData, regionState);
  }

  // Update factions
  runWorldFactionTick();
}
