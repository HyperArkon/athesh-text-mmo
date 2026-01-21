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
    escorts: [],
    escortRequired: false,
    escortReward: 0,
    escortStatus: "open" // open | assigned | completed | failed
    risk: 10,
    progress: 0,
    status: "traveling",
    profit: 0
  };
}
