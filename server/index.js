import { WorldState } from "./world/worldState.js";

console.log("Athesh World Loaded.");
console.log("Regions:");

for (const regionId in WorldState.regions) {
  const region = WorldState.regions[regionId];
  console.log(`- ${region.name} (${region.type})`);
}
