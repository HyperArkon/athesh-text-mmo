export function acceptEscortContract(actor, contract, world) {
  if (contract.status !== "open") {
    return { success: false, message: "Contract unavailable." };
  }

  contract.assignedTo = actor.id;
  contract.status = "active";

  const caravan = world.caravans.find(c => c.id === contract.caravanId);
  if (caravan) {
    caravan.escorts.push(actor.id);
    caravan.escortStatus = "assigned";
    caravan.risk -= 10;
  }

  return { success: true, message: "Escort contract accepted." };
}
