import { runTrial } from "./trialSystem.js";

export function runCourtTick(region, worldState) {
  const court = region.court;

  if (court.activeTrials.length === 0) return;

  const playerId = court.activeTrials.shift();
  const player = worldState.players[playerId];
  if (!player) return;

  runTrial(player, region);
}
