import { loadRegions } from "./worldLoader.js";
import { createRegionState } from "./regionStateTemplate.js";

const regions = loadRegions();

const regionStates = {};

for (const regionId in regions) {
  regionStates[regionId] = createRegionState(regions[regionId]);
}

export const WorldState = {
  regions,
  regionStates,

  getRegion(regionId) {
    return this.regions[regionId] || null;
  },

  getRegionState(regionId) {
    return this.regionStates[regionId] || null;
  }
};
