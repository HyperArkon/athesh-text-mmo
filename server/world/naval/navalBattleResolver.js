export function attemptBreakBlockade({
  attackingFleetPower,
  defendingFleetPower
}) {
  const roll = Math.random() * (attackingFleetPower + defendingFleetPower);

  if (roll <= attackingFleetPower) {
    return "blockadeHolds";
  }

  return "blockadeBroken";
}
