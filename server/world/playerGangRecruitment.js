import { Gangs } from "./gangs.js";

export function checkGangRecruitment(player, worldState) {
  if (player.crime.notoriety < 30) return;

  const region = worldState.getRegion(player.location.regionId);
  if (!region) return;

  for (const gangId of region.crime.gangs) {
    const gang = Gangs[gangId];
    if (!gang) continue;

    if (gang.influence > 20) {
      player.gangOffer = {
        gangId,
        gangName: gang.name
      };
      return;
    }
  }
}
