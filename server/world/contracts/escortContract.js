export function createEscortContract(caravanId, reward, issuer) {
  return {
    id: crypto.randomUUID(),
    type: "escort",
    caravanId,
    reward,
    issuer, // faction, company, or player
    assignedTo: null,
    status: "open" // open | active | completed | failed
  };
}
