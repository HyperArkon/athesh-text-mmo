export function blockadeTick(region, fleets) {
  const hostileFleets = fleets.filter(
    f => f.region === region.id && f.status === "active"
  );

  if (hostileFleets.length > 0) {
    region.blockade.active = true;
    region.economy.supply.grain =
      Math.max(0, region.economy.supply.grain - 10);
  } else {
    region.blockade.active = false;
    region.blockade.byFactionId = null;
  }
}
