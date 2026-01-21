export function resolveCaravan(caravan, world, players) {
  const origin = world.regions[caravan.origin];
  const destination = world.regions[caravan.destination];

  for (const good in caravan.goods) {
    const amount = caravan.goods[good];
    const price = destination.economy.prices[good];
    const value = amount * price;

    destination.economy.supply[good] += amount;
    destination.economy.wealth += value;
    caravan.profit += value;
  }

  if (caravan.ownerType === "player") {
    const player = players[caravan.ownerId];
    if (player) {
      player.gold += caravan.profit;
    }
  }

  caravan.status = "completed";
}
