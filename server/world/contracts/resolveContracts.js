export function resolveEscortContract(contract, caravan, actors) {
  if (caravan.status === "completed") {
    const escort = actors[contract.assignedTo];
    if (escort) {
      escort.gold += contract.reward;
    }
    contract.status = "completed";
  }

  if (caravan.status === "destroyed") {
    contract.status = "failed";
  }
}
