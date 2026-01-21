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

    default:
      return { success: false, message: "Unknown trade command." };
  }
}
