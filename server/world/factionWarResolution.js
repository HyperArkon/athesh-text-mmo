export function resolveFactionWars(factionId, worldState) {
  const faction = worldState.getFactionState(factionId);

  for (const enemyId of [...faction.diplomacy.wars]) {
    const enemy = worldState.getFactionState(enemyId);
    if (!enemy) continue;

    const powerA =
      faction.power.military +
      faction.power.wealth * 0.3 +
      faction.power.influence * 0.2;

    const powerB =
      enemy.power.military +
      enemy.power.wealth * 0.3 +
      enemy.power.influence * 0.2;

    if (Math.abs(powerA - powerB) > 30) {
      endWar(factionId, enemyId, worldState, powerA > powerB);
    }
  }
}

function endWar(a, b, worldState, aWon) {
  const A = worldState.getFactionState(a);
  const B = worldState.getFactionState(b);

  A.diplomacy.wars = A.diplomacy.wars.filter(id => id !== b);
  B.diplomacy.wars = B.diplomacy.wars.filter(id => id !== a);

  if (aWon) {
    A.power.influence += 5;
    B.power.influence -= 5;
    A.diplomacy.relations[b] = -20;
    B.diplomacy.relations[a] = -40;
  } else {
    B.power.influence += 5;
    A.power.influence -= 5;
    B.diplomacy.relations[a] = -20;
    A.diplomacy.relations[b] = -40;
  }
}
