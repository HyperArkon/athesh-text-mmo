import { WorldState } from "./worldState.js";
import { runRegionTick } from "./regionTick.js";
import { runWorldFactionTick } from "./worldFactionTick.js";
import { runCrimeTick } from "./crimeTick.js";
import { runGangFactionInteractions } from "./gangFactionInteraction.js";
import { runPlayerCrimeTick } from "./playerCrimeTick.js";
import { checkGangRecruitment } from "./playerGangRecruitment.js";
import { runLawEnforcementTick } from "./lawEnforcementTick.js";
import { checkPlayerDetection } from "./lawPlayerDetection.js";
import { handleLawResponse } from "./lawResponse.js";
import { runLawGangConflict } from "./lawGangConflict.js";
import { runPrisonTick } from "./prisonTick.js";

export function runWorldTick() {
  // Update regions
  for (const regionId in WorldState.regions) {
    const regionData = WorldState.getRegion(regionId);
    const regionState = WorldState.getRegionState(regionId);
  for (const regionId in WorldState.regions) {
  const region = WorldState.getRegion(regionId);
  runCrimeTick(region, WorldState);
runLawGangConflict(region);
  }
for (const playerId in WorldState.players) {
  const player = WorldState.players[playerId];
  runPlayerCrimeTick(player, WorldState);
  checkGangRecruitment(player, WorldState);
}
for (const regionId in WorldState.regions) {
  const region = WorldState.getRegion(regionId);
  runLawEnforcementTick(region, WorldState);
}
const region = WorldState.getRegion(player.location.regionId);
if (region && checkPlayerDetection(player, region)) {
  handleLawResponse(player, region);
}

runGangFactionInteractions(WorldState);
runPrisonTick(region, WorldState);

    runRegionTick(regionData, regionState);
  }

  // Update factions
  runWorldFactionTick();
}
