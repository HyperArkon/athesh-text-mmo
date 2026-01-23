export function navalPatrolTick(faction, region) {
  if (!faction.naval?.isNaval) return;

  region.piracy.risk -= faction.naval.seaControl * 0.1;
  region.piracy.risk = Math.max(0, region.piracy.risk);
}
