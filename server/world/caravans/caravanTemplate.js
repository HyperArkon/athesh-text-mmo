export function createCaravan(origin, destination, goods, owner = null) {
  return {
    id: crypto.randomUUID(),
    origin,
    destination,
    goods,
    owner, // faction, company, or player
    guards: Math.floor(Math.random() * 10),
    risk: 10,
    progress: 0,
    status: "traveling"
  };
}
