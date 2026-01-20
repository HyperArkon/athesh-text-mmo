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
  factionStates[factionId] = createFactionState(factions[factionId]);
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
