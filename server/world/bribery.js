export function bribeCourt(player, amount, region) {
  player.legal.bribes.court += amount;
  region.court.corruption += amount * 0.05;
}

export function bribeGuards(player, amount, region) {
  player.legal.bribes.guards += amount;
  region.lawEnforcement.corruption += amount * 0.05;
}
