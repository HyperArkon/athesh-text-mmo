import { WorldState } from "./worldState.js";
import { runFactionTick } from "./factionTick.js";
import { runFactionDiplomacyTick } from "./factionDiplomacyTick.js";
import { resolveFactionWars } from "./factionWarResolution.js";

export function runWorldFactionTick() {
  for (const factionId in WorldState.factions) {
    const factionData = WorldState.getFaction(factionId);
    const factionState = WorldState.getFactionState(factionId);

    runFactionTick(factionData, factionState, WorldState);
    runFactionDiplomacyTick(factionId, WorldState);
    resolveFactionWars(factionId, WorldState);
  }
}
