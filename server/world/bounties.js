export const Bounties = {};

export function issueBounty(player, region) {
  const value =
    player.crime.wantedLevel * 50 +
    player.crime.notoriety * 2;

  Bounties[player.id] = {
    targetId: player.id,
    region: region.id,
    reward: Math.floor(value),
    issuedAt: Date.now()
  };
}
