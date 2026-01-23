export const factionTemplate = {
  // ─────────────────────────────
  // Core Identity
  // ─────────────────────────────
  id: "",
  name: "",
  type: "", 
  // kingdom | guild | company | mercenary | pirate | privateer | cult | gang

  description: "",
  banner: null,

  // ─────────────────────────────
  // Leadership & Members
  // ─────────────────────────────
  leaderId: null,
  officers: [],
  members: [], // NPC & player IDs
  hierarchy: {
    ruler: null,
    council: [],
    commanders: [],
    agents: []
  },

  // ─────────────────────────────
  // Territory & Influence
  // ─────────────────────────────
  homeRegion: null,
  controlledRegions: [],
  influence: 0, // 0–100
  prestige: 0,  // fame / renown equivalent

  // ─────────────────────────────
  // Diplomacy & Politics
  // ─────────────────────────────
  diplomacy: {
    allies: [],
    rivals: [],
    enemies: [],
    truces: []
  },

  wars: [], // active wars

  // ─────────────────────────────
  // Economy & Assets
  // ─────────────────────────────
  wealth: 0,
  income: 0,
  assets: {
    buildings: [],
    caravans: [],
    fleets: [],
    ports: [],
    warehouses: []
  },

  tradePolicy: {
    tariffs: 0,
    embargoes: [],
    smugglingTolerance: 0 // 0–100
  },

  // ─────────────────────────────
  // Crime & Legality
  // ─────────────────────────────
  legalStatus: "legal", 
  // legal | outlaw | privateer | criminal | rebel

  crimeProfile: {
    crimesCommitted: [],
    bounties: [],
    corruptionLevel: 0
  },

  // ─────────────────────────────
  // Military & Mercenaries
  // ─────────────────────────────
  military: {
    armySize: 0,
    quality: 0,
    stationedForces: {},
    doctrines: []
  },

  mercenary: {
    availableForHire: false,
    contractLimit: 0,
    activeContracts: []
  },

  // ─────────────────────────────
  // Naval Power
  // ─────────────────────────────
  naval: {
    isNaval: false,
    fleetSize: 0,
    seaControl: 0 // 0–100
  },

  fleets: [], // fleet objects

  // ─────────────────────────────
  // Reputation & Ideology
  // ─────────────────────────────
  reputation: {
    lawful: 0,
    criminal: 0,
    popular: 0,
    feared: 0
  },

  ideology: {
    alignment: "", // lawful, neutral, chaotic
    beliefs: [],
    propagandaThemes: []
  },

  // ─────────────────────────────
  // Events & History
  // ─────────────────────────────
  events: [],
  historicalNotes: [],

  // ─────────────────────────────
  // Meta
  // ─────────────────────────────
  foundedAt: 0,
  dissolvedAt: null,
  active: true
};
