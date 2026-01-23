export function createFactionState(factionData) {
  return {
    id: factionData.id,
    type: factionData.type,

    power: {
      influence: factionData.starting_power?.influence || 10,
      military: factionData.starting_power?.military || 0,
      wealth: factionData.starting_power?.wealth || 0
    },

    reputation: {
      public: 0,
      feared: 0,
      respected: 0
    },

    members: {
      npcs: factionData.starting_members?.npcs || 0,
      players: 0
    },

    territory: {
      regions: factionData.controlled_regions || []
    },

    status: {
      outlawed: false,
      at_war: [],
      alliances: []
    }
  };
}
