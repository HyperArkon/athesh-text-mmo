export function runRegionTick(regionData, regionState) {
  // Advance time
  regionState.time.day += 1;

  // Simple season cycle
  if (regionState.time.day > 90) {
    regionState.time.day = 1;

    const seasons = ["spring", "summer", "autumn", "winter"];
    const currentIndex = seasons.indexOf(regionState.time.season);
    regionState.time.season =
      seasons[(currentIndex + 1) % seasons.length];
  }

  // Environmental pressure
  if (regionData.type === "desert") {
    regionState.economy.scarcity += 2;
  }

  if (regionData.type === "snow" && regionState.time.season === "winter") {
    regionState.economy.scarcity += 1;
    regionState.stability.unrest += 1;
  }

  // Crime reacts to scarcity
  if (regionState.economy.scarcity > 30) {
    regionState.stability.crime += 2;
  }

  // Clamp values (VERY IMPORTANT)
  clampRegionState(regionState);
}

function clampRegionState(state) {
  const clamp = (v) => Math.max(0, Math.min(100, v));

  state.stability.unrest = clamp(state.stability.unrest);
  state.stability.crime = clamp(state.stability.crime);
  state.stability.corruption = clamp(state.stability.corruption);
  state.economy.prosperity = clamp(state.economy.prosperity);
  state.economy.scarcity = clamp(state.economy.scarcity);
  state.prejudice.current = clamp(state.prejudice.current);
}
