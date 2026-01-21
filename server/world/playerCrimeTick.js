export function runPlayerCrimeTick(player, worldState) {
  const region = worldState.getRegion(player.location.regionId);
  if (!region) return;

  // Heat decay
  player.crime.heat -= 0.5;
  player.crime.heat = Math.max(0, player.crime.heat);

  // Wanted escalation
  if (player.crime.heat > 50) {
    player.crime.wantedLevel += 1;
  }

  // Law crackdown
  if (
    player.crime.wantedLevel > 5 &&
    region.crime.lawPressure > 60
  ) {
    player.status = "fugitive";
  }
}
