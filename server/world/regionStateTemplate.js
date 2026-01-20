export function createRegionState(regionData) {
  return {
    id: regionData.id,

    time: {
      day: 1,
      season: "spring",
      year: 1
    },

    stability: {
      unrest: 0,        // 0–100
      crime: 0,         // 0–100
      corruption: 0     // 0–100
    },

    economy: {
      prosperity: 50,  // 0–100
      scarcity: 0      // 0–100
    },

    prejudice: {
      current: regionData.prejudice?.base || 0
    },

    population: {
      npcs: 1000,
      refugees: 0
    },

    flags: {
      under_siege: false,
      famine: false,
      rebellion: false
    }
  };
}
