export function createCaravan({
  origin,
  destination,
  goods,
  ownerType = "npc", // npc | player | company | faction
  ownerId = null
}) {
  return {
    id: crypto.randomUUID(),
    origin,
    destination,
    goods,
    ownerType,
    ownerId,

    guards: 5,
    risk: 10,
    progress: 0,
    status: "traveling",
    profit: 0
  };
}
