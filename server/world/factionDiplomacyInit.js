export function initializeFactionRelations(worldState) {
  const factionIds = Object.keys(worldState.factions);

  for (const a of factionIds) {
    const stateA = worldState.getFactionState(a);

    for (const b of factionIds) {
      if (a === b) continue;

      if (stateA.diplomacy.relations[b] === undefined) {
        stateA.diplomacy.relations[b] = 0; // Neutral start
      }
    }
  }
}
