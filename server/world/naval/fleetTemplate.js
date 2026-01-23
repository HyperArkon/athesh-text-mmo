export function createFleet(ownerFactionId, region, ships = []) {
  return {
    id: crypto.randomUUID(),
    ownerFactionId,
    region,
    ships,
    morale: 100,
    status: "active" // active | retreating | destroyed
  };
}
