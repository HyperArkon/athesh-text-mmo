import { loadRegions } from "./worldLoader.js";

export const WorldState = {
  regions: loadRegions(),

  getRegion(regionId) {
    return this.regions[regionId] || null;
  }
};
