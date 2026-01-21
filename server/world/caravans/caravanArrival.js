export function resolveCaravan(caravan, world) {
  const origin = world.regions[caravan.origin];
  const destination = world.regions[caravan.destination];

  for (const good in caravan.goods) {
    const amount = caravan.goods[good];

    origin.economy.supply[good] -= amount;
    destination.economy.supply[good] += amount;
    destination.economy.wealth += amount * destination.economy.prices[good];
  }
}
