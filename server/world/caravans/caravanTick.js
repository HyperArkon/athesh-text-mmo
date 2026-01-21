export function caravanTick(caravan, world) {
  caravan.progress += 10 - caravan.risk;

  // Bandit attack chance
  if (Math.random() * 100 < caravan.risk) {
    caravan.guards -= Math.floor(Math.random() * 3);
    caravan.risk += 5;

    if (caravan.guards <= 0) {
      caravan.status = "destroyed";
      return;
    }
  }

  if (caravan.progress >= 100) {
    caravan.status = "arrived";
  }
}
