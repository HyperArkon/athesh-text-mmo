export function checkPlayerDetection(player, region) {
  const law = region.lawEnforcement;

  let detectionChance =
    player.crime.heat * 0.8 +
    law.alertLevel * 0.5 -
    law.corruption * 0.4;

  if (player.status === "disguised") detectionChance -= 30;

  return detectionChance > 50;
}
