import { GOODS } from "./goods.js";

export function economyTick(region) {
  for (const good in GOODS) {
    const supply = region.economy.supply[good];
    const demand = region.economy.demand[good];

    // Price formula
    let price =
      GOODS[good].basePrice *
      (1 + (demand - supply) / 100);

    // Stability & corruption modifiers
    price *= 1 + (50 - region.economy.stability) / 200;
    price *= 1 + region.economy.corruption / 200;

    region.economy.prices[good] = Math.max(1, Math.floor(price));

    // Natural market drift
    region.economy.supply[good] += Math.floor(Math.random() * 5 - 2);
    region.economy.demand[good] += Math.floor(Math.random() * 5 - 2);
  }
}
