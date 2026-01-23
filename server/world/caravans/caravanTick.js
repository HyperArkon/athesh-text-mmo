import { createEscortContract } from "../contracts/escortContract.js";

export function caravanTick(caravan, world) {
  caravan.progress += 10 - caravan.risk;
if (caravan.risk > 25 && !caravan.escortRequired) {
  caravan.escortRequired = true;
  caravan.escortReward = caravan.risk * 10;
const fleets = world.factions
  .flatMap(f => f.fleets || [])
  .filter(f => f.region === caravan.origin && f.status === "active");

if (caravan.transport !== "land" && fleets.length > 0) {
  if (Math.random() * 100 < 30) {
    caravan.status = "intercepted";
    return;
  }
}

  world.contracts.push(
    createEscortContract(
      caravan.id,
      caravan.escortReward,
      caravan.ownerId
    )
  );
}
  if (caravan.transport !== "land") {
  const region = world.regions[caravan.origin];
  const piracyRisk = region.piracy.risk;
if (caravan.transport !== "land" && Math.random() * 100 < caravan.risk) {
  caravan.status = "raided";
  return;
}

  if (Math.random() * 100 < piracyRisk) {
    caravan.risk += 10;
  }
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
    let speed = 10;

if (caravan.transport === "river") speed = 7;
if (caravan.transport === "sea") speed = 12;

caravan.progress += speed - caravan.risk;
    if (caravan.transport !== "land" && Math.random() * 100 < caravan.risk) {
  caravan.risk += 5; // piracy increases danger
}

  }
}
