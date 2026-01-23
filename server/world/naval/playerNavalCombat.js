import { navalBattle } from "../../world/naval/navalBattle.js";

export function playerFleetAttack(playerFleet, targetFleet) {
  return navalBattle(playerFleet, targetFleet);
}
