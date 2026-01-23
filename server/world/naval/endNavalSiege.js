export function endNavalSiege(region, success) {
  region.naval.blockaded = false;
  region.naval.controllingFleet = null;

  if (success) {
    region.events.push({
      type: "NAVAL_SIEGE_FELL",
      date: Date.now()
    });
  }

  delete region.siege;
}
