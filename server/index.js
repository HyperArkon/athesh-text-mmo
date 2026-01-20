import { WorldState } from "./world/worldState.js";
import { runWorldTick } from "./world/worldTick.js";

console.log("Athesh World Initialized");
console.log("Regions loaded:", Object.keys(WorldState.regions));

// Example tick (not looping yet)
runWorldTick();

console.log("World tick executed once.");
