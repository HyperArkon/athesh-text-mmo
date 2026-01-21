import { GOODS } from "./goods.js";

export function initRegionEconomy(region) {
  for (const good in GOODS) {
    region.economy.supply[good] = Math.floor(Math.random() * 100);
    region.economy.demand[good] = Math.floor(Math.random() * 100);
    region.economy.prices[good] = GOODS[good].basePrice;
  }
}
