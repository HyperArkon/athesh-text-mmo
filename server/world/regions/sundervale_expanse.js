{
  "id": "sundervale_expanse",
  "name": "Sundervale Expanse",
  "type": "desert",

  "description": {
    "short": "A sun-scorched desert ruled by water law, trade caravans, and buried gods.",
    "long": "The Sundervale Expanse is a vast desert of golden dunes, salt flats, and ancient ruins buried beneath shifting sands. Life revolves around water rights, caravan routes, and sun-blessed cities where trade and faith are inseparable."
  },
  
"crime": {
  "crimeLevel": 20,
  "gangs": [],
  "lawPressure": 50,
  "corruption": 10
}
  
"lawEnforcement": {
  "guardCount": 20,
  "alertLevel": 10,
  "lockdown": false,
  "corruption": 5
}
  
"prison": {
  "capacity": 50,
  "inmates": [],
  "securityLevel": 50,
  "corruption": 10
}
  
"court": {
  "fairness": 50,
  "severity": 50,
  "corruption": 10,
  "executionEnabled": true,
  "activeTrials": []
}

  "geography": {
    "climate": "arid",
    "terrain": ["sand_dunes", "rocky_wastes", "salt_flats", "oases"],
    "buildable": {
      "land": true,
      "water": false,
      "exceptions": ["bridges", "water_pumps", "aqueducts"]
    },
    "hazards": ["extreme_heat", "sandstorms", "dehydration"]
  },

  "cultures": {
    "dominant": "Sundervale Concord",
    "minor": ["Nomad Tribes", "Beastfolk Caravaneers", "Demihuman Enclaves"],
    "attitudes": {
      "beastfolk": -5,
      "demihuman": -10,
      "undead": -35,
      "construct": -5
    }
  },

  "laws": {
    "necromancy": "illegal",
    "undead_presence": "illegal",
    "open_weapons": "restricted",
    "building_permits": true,
    "water_rights_enforced": true,
    "caravan_licensing": true
  },

  "prejudice": {
    "base": 25,
    "modifiers": {
      "water_shortage": 40,
      "foreign_merchants": 20,
      "religious_unrest": 30
    }
  },

  "economy": {
    "primary": ["trade", "caravans", "salt", "spices"],
    "currency_pressure": "high",
    "black_market_activity": "moderate"
  },
  infrastructure: {
  ports: 0,
  bridges: 0,
  shipyards: 0
}

economy: {
  wealth: 50, // 0–100
  stability: 50, // affects prices & unrest
  corruption: 20,
  supply: {},
  demand: {},
  prices: {}
}

  "factions": {
    "major": [
      "sunspire_council",
      "golden_dune_caravans"
    ],
    "minor": [
      "oasis_wardens",
      "ashen_faith_sect",
      "sandveil_smugglers"
    ]
  },

  "myths": {
    "founding": "The sun scorched the land clean so only those who honored water would endure.",
    "local_legends": [
      "The Buried Sun Temple",
      "The Everflowing Well"
    ]
  },

  "npc_awareness": {
    "fame_thresholds": {
      "known": 25,
      "renowned": 55,
      "mythic": 80
    }
  },
  
waterways: {
  rivers: [],
  seaAccess: false
}

  "starting_locations": [
    "sunspire_city",
    "duneshade_oasis",
    "caravan_rest"
  ]
}
