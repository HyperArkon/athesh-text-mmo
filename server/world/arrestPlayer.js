export function arrestPlayer(player, region) {
  if (player.prison.incarcerated) return;

  const prison = region.prison;

  if (prison.inmates.length >= prison.capacity) {
    // Overcrowding increases corruption instead
    prison.corruption += 5;
    return;
  }

  const sentence =
    player.crime.wantedLevel * 10 +
    player.crime.notoriety * 0.5;

  player.prison = {
    incarcerated: true,
    regionId: region.id,
    sentence: Math.ceil(sentence),
    escapeAttempts: 0
  };

  prison.inmates.push(player.id);

  // Reset crime heat but not notoriety
  player.crime.heat = 0;
  player.status = "imprisoned";
}
