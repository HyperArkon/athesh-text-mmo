export function buyGoods(player, region, good, amount) {
  const price = region.economy.prices[good];
  const totalCost = price * amount;

  if (player.gold < totalCost) {
    return { success: false, message: "Not enough gold." };
  }

  region.economy.supply[good] -= amount;
  player.gold -= totalCost;
  player.inventory[good] =
    (player.inventory[good] || 0) + amount;

  return {
    success: true,
    message: `Bought ${amount} ${good} for ${totalCost} gold.`
  };
}

export function sellGoods(player, region, good, amount) {
  if ((player.inventory[good] || 0) < amount) {
    return { success: false, message: "Not enough goods." };
  }

  const price = region.economy.prices[good];
  const totalGain = price * amount;

  player.inventory[good] -= amount;
  player.gold += totalGain;
  region.economy.supply[good] += amount;

  return {
    success: true,
    message: `Sold ${amount} ${good} for ${totalGain} gold.`
  };
}
