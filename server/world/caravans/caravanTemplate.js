export function createCaravan({
  origin,
  destination,
  goods,
  ownerType = "npc",
  ownerId = null,
  transport = "land" // land | river | sea
}) {
  return {
    id: crypto.randomUUID(),
    origin,
    destination,
    goods,
    ownerType,
    ownerId,
    transport,

    guards: transport === "land" ? 5 : 8,
    escorts: [],
    escortRequired: false,
    escortReward: 0,
    escortStatus: "open",

    risk: transport === "land" ? 10 : 6,
    progress: 0,
    status: "traveling",
    profit: 0
  };
}

}
