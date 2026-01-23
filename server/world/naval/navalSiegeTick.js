export function processNavalSiegeTick(region) {
  if (!region.siege || region.siege.type !== "naval") return;

  region.siege.daysActive += 1;

  const portStrength = region.naval.portLevel * 10;
  const pressureGain = Math.max(1, 15 - portStrength);

  region.siege.pressure += pressureGain;

  // Economic damage
  region.economy.tradeVolume *= 0.95;

  // Food shortages
  region.population.unrest += 2;

  // Collapse condition
  if (region.siege.pressure >= 100) {
    region.controlledBy = region.siege.attacker;
    endNavalSiege(region, true);
  }
}
