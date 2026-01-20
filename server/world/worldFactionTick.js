import { WorldState } from "./worldState.js";
import { runFactionTick } from "./factionTick.js";

export function runWorldFactionTick() {
  for (const factionId in WorldState.factions) {
    const factionData = WorldState.getFaction(factionId);
    const factionState = WorldState.getFactionState(factionId);

    runFactionTick(factionData, factionState, WorldState);
  }
}
