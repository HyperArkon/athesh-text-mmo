export function attemptPrisonEscape(player, worldState) {
  if (!player.prison.incarcerated) return false;

  const region = worldState.getRegion(player.prison.regionId);
  const prison = region.prison;

  player.prison.escapeAttempts += 1;

  const escapeChance =
    30 +
    prison.corruption * 0.5 -
    prison.securityLevel * 0.7 -
    player.prison.escapeAttempts * 5;

  if (Math.random() * 100 < escapeChance) {
    prison.inmates = prison.inmates.filter(
      id => id !== player.id
    );

    player.prison.incarcerated = false;
    player.status = "escaped";
    player.crime.wantedLevel += 3;
    region.lawEnforcement.alertLevel += 15;
    return true;
  }

  // Failed escape consequences
  prison.securityLevel += 5;
  player.prison.sentence += 10;
  return false;
}
