import { createEscortContract } from "../contracts/escortContract.js";

export function caravanTick(caravan, world) {
  caravan.progress += 10 - caravan.risk;
if (caravan.risk > 25 && !caravan.escortRequired) {
  caravan.escortRequired = true;
  caravan.escortReward = caravan.risk * 10;

  world.contracts.push(
    createEscortContract(
      caravan.id,
      caravan.escortReward,
      caravan.ownerId
    )
  );
}
  
  // Bandit attack chance
 const escortPower = caravan.escorts.length * 5;
const defense = caravan.guards + escortPower;

if (Math.random() * 100 < caravan.risk - defense) {
  caravan.guards -= Math.floor(Math.random() * 3);
  caravan.risk += 5;
}

    if (caravan.guards <= 0) {
      caravan.status = "destroyed";
      return;
    }
  }

  if (caravan.progress >= 100) {
    caravan.status = "arrived";
  }
}
