export function runFactionTick(factionData, factionState, worldState) {
  const regions = factionState.territory.regions || [];

  // 1. Influence changes based on type
  switch (factionState.type) {
    case "kingdom":
      factionState.power.influence += 1;
      factionState.power.wealth += 1;
      break;

    case "guild":
      factionState.power.wealth += 2;
      factionState.power.influence += 1;
      break;

    case "company":
      factionState.power.wealth += 2;
      break;

    case "mercenary":
      factionState.power.wealth += 1;
      factionState.power.military += 1;
      break;
  }

  // 2. Regional pressure
  for (const regionId of regions) {
    const regionState = worldState.getRegionState(regionId);
    if (!regionState) continue;

    // Unrest harms rulers
    if (factionState.type === "kingdom") {
      factionState.power.influence -= Math.floor(regionState.stability.unrest / 25);
    }

    // Crime helps gangs, hurts lawful groups (future hook)
    factionState.power.wealth -= Math.floor(regionState.stability.crime / 40);
  }

  // 3. Military decay if unused
  if (factionState.power.military > 0) {
    factionState.power.military -= 0.5;
  }

  // 4. Clamp values
  clampFactionState(factionState);
}

function clampFactionState(state) {
  const clamp = (v) => Math.max(0, Math.min(100, v));

  state.power.influence = clamp(state.power.influence);
  state.power.wealth = clamp(state.power.wealth);
  state.power.military = clamp(state.power.military);
}
