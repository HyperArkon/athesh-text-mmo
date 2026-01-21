import { loadRegions } from "./worldLoader.js";
import { loadFactions } from "./factionLoader.js";
import { createRegionState } from "./regionStateTemplate.js";
import { createFactionState } from "./factionTemplate.js";

const regions = loadRegions();
const factions = loadFactions();

const regionStates = {};
const factionStates = {};

for (const regionId in regions) {
  regionStates[regionId] = createRegionState(regions[regionId]);
}

for (const factionId in factions) {
  factionStates[factionId] = createFactionState(factionId) {
  return {
    power: {
      influence: 50,
      wealth: 50,
      military: 50
    },

    territory: {
      regions: []
    },

    diplomacy: {
      relations: {}, // factionId -> number (-100 to 100)
      wars: [],
      alliances: []
    },

    traits: {
      aggression: 0.5, // 0 = peaceful, 1 = warlike
      honor: 0.5,      // affects betrayal
      ambition: 0.5
    }
  };
}


export const WorldState = {
  regions,
  factions,
  regionStates,
  factionStates,

  getRegion(id) {
    return this.regions[id] || null;
  },

  getFaction(id) {
    return this.factions[id] || null;
  },

  getFactionState(id) {
    return this.factionStates[id] || null;
  }
};
