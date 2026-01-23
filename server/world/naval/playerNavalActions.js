export function raidCaravan(player, caravan, region) {
  if (player.legalStatus === "legal") {
    return { success: false, message: "You are not a criminal." };
  }

  caravan.status = "raided";
  player.infamy += 10;
  region.piracy.risk += 5;

  return { success: true, message: "Caravan successfully raided." };
}
