export const regionTemplate = {
  // ─────────────────────────────
  // Core Identity
  // ─────────────────────────────
  id: "",
  name: "",
  biome: "", // plains | forest | desert | snow | mountain | coast | river
  description: "",

  // ─────────────────────────────
  // Population & Society
  // ─────────────────────────────
  population: 0,
  dominantSpecies: [], // humans, orcs, beastfolk, etc.
  cultures: [],

  // ─────────────────────────────
  // Factions & Power
  // ─────────────────────────────
  factions: [], // faction IDs present
  controllingFactionId: null,

  reputation: {
    law: 0,       // -100 to 100
    crime: 0,     // -100 to 100
    stability: 50 // affects unrest & rebellion
  },

  // ─────────────────────────────
  // Economy
  // ─────────────────────────────
  economy: {
    wealth: 50,        // 0–100
    stability: 50,     // affects prices
    corruption: 20,    // increases black market power

    supply: {},        // good → amount
    demand: {},        // good → amount
    prices: {}         // good → current price
  },

  // ─────────────────────────────
  // Infrastructure & Building
  // ─────────────────────────────
  infrastructure: {
    roads: 0,
    bridges: 0,
    ports: 0,
    shipyards: 0,
    markets: 0,
    fortifications: 0
  },

  buildRules: {
    allowLandBuilding: true,
    allowWaterBuilding: false, // except bridges, ports, pumps
    waterStructuresAllowed: [
      "bridge",
      "port",
      "waterWheel",
      "waterPump"
    ]
  },

  // ─────────────────────────────
  // Crime & Law
  // ─────────────────────────────
  crime: {
    crimeRate: 0, // 0–100
    activeGangs: [],
    bounties: []
  },

  lawEnforcement: {
    guards: 0,
    patrolStrength: 0,
    corruption: 0
  },

  prisons: {
    capacity: 0,
    inmates: []
  },

  // ─────────────────────────────
  // Trade & Caravans
  // ─────────────────────────────
  caravans: {
    incoming: [],
    outgoing: []
  },

  // ─────────────────────────────
  // Waterways & Naval Systems
  // ─────────────────────────────
  waterways: {
    rivers: [],      // names or IDs
    seaAccess: false
  },

  piracy: {
    risk: 0,            // 0–100
    activePirates: []   // pirate faction IDs
  },

  blockade: {
    active: false,
    byFactionId: null
  },

  // ─────────────────────────────
  // Military & Conflict
  // ─────────────────────────────
  military: {
    stationedForces: 0,
    fortLevel: 0,
    underSiege: false
  },

  // ─────────────────────────────
  // World Events & History
  // ─────────────────────────────
  events: [], // famines, rebellions, festivals, wars
  historicalNotes: [],

  // ─────────────────────────────
  // Meta
  // ─────────────────────────────
  discoveredByPlayers: false,
  lastTickUpdated: 0
};
