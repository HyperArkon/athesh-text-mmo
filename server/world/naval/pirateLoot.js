export function pirateLoot(caravan, pirateFaction) {
  pirateFaction.wealth += caravan.profit || 100;
  pirateFaction.naval.fleetSize += 1;
}
