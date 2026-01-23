export function startNavalSiege({
  region,
  attackingFaction,
  fleetId
}) {
  if (!region.naval.isCoastal || !region.naval.hasPort) {
    return { success: false, reason: "Region is not coastal" };
  }

  if (region.naval.blockaded) {
    return { success: false, reason: "Region already blockaded" };
  }

  region.naval.blockaded = true;
  region.naval.controllingFleet = fleetId;

  region.siege = {
    type: "naval",
    attacker: attackingFaction,
    fleetId,
    daysActive: 0,
    pressure: 0
  };

  return { success: true };
}
