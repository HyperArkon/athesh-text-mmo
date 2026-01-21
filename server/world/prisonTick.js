export function runPrisonTick(region, worldState) {
  const prison = region.prison;

  for (const playerId of [...prison.inmates]) {
    const player = worldState.players[playerId];
    if (!player) continue;

    player.prison.sentence -= 1;

    if (player.prison.sentence <= 0) {
      releasePlayer(player, region);
    }
  }
}

function releasePlayer(player, region) {
  player.prison.incarcerated = false;
  player.prison.regionId = null;
  player.status = "released";

  region.prison.inmates = region.prison.inmates.filter(
    id => id !== player.id
  );

  // Reputation consequences
  player.crime.wantedLevel = Math.max(0, player.crime.wantedLevel - 3);
}
