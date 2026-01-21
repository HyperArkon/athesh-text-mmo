import { Gangs } from "./gangs.js";

export function runGangFactionInteractions(worldState) {
  for (const gangId in Gangs) {
    const gang = Gangs[gangId];
    const region = worldState.getRegion(gang.region);
    if (!region) continue;

    for (const factionId of Object.keys(worldState.factions)) {
      const faction = worldState.getFactionState(factionId);

      // Corruption spreads to factions
      if (gang.corruption > 20) {
        faction.power.influence -= 0.2;
        faction.power.wealth += 0.3;
      }

      // Lawful factions suppress gangs
      if (faction.traits.honor > 0.6) {
        gang.size -= 0.1;
        gang.heat += 0.5;
      }

      // Criminal-friendly factions benefit
      if (faction.traits.aggression > 0.6) {
        gang.wealth += 0.3;
      }
    }
  }
}
