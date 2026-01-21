import { createCaravan } from "../../world/caravans/caravanTemplate.js";

export function createPlayerCaravan(player, world, destination) {
  if (!player.inventory || Object.keys(player.inventory).length === 0) {
    return { success: false, message: "No goods to trade." };
  }

  const caravan = createCaravan({
    origin: player.region,
    destination,
    goods: { ...player.inventory },
    ownerType: "player",
    ownerId: player.id
  });

  player.inventory = {};
  world.caravans.push(caravan);

  return {
    success: true,
    message: `Caravan sent to ${destination}.`
  };
}
