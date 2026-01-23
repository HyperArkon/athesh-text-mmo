import { buyGoods, sellGoods } from "../gameplay/trade/playerTrade.js";
import { createPlayerCaravan } from "../gameplay/trade/createCaravan.js";

export function handleTradeCommand(player, world, input) {
  const [cmd, ...args] = input.split(" ");

  switch (cmd) {
    case "buy":
      return buyGoods(player, world.regions[player.region], args[0], Number(args[1]));

    case "sell":
      return sellGoods(player, world.regions[player.region], args[0], Number(args[1]));

    case "send":
      return createPlayerCaravan(player, world, args[0]);

    case "contracts":
      return world.contracts.filter(c => c.status === "open");
   
    case "escort":
      return acceptEscortContract(player, world.contracts.find(c => c.id === args[0]), world);
      
case "send-sea":
  return createNavalCaravan({
    origin: player.region,
    destination: args[0],
    goods: { ...player.inventory },
    vesselType: "merchantShip",
    ownerType: "player",
    ownerId: player.id
  });

case "send-river":
  return createRiverCaravan({
    origin: player.region,
    destination: args[0],
    goods: { ...player.inventory },
    ownerType: "player",
    ownerId: player.id
  });
case "raid":
  return raidCaravan(player, world.caravans.find(c => c.id === args[0]), world.regions[player.region]);

case "naval-status":
  return world.regions[player.region].piracy;

    default:
      return { success: false, message: "Unknown trade command." };
  }
}
