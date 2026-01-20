import { WorldState } from "./world/worldState.js";
import { runWorldTick } from "./world/worldTick.js";

console.log("Athesh World Initialized");
console.log("Initial Faction States:", WorldState.factionStates);

runWorldTick();

console.log("Post-Tick Faction States:", WorldState.factionStates);
