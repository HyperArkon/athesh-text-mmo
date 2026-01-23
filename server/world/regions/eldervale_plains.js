{
  "id": "eldervale_plains",
  "name": "Eldervale Plains",
  "type": "plains",

  "description": {
    "short": "Fertile plains ruled by old accords and quiet tensions.",
    "long": "Eldervale Plains stretch endlessly beneath open skies, dotted with farming villages, trade roads from the Summerhand era, and cities built atop ancient compromises. Peace here is maintained by memory rather than trust."
  },
  
  economy: {
  wealth: 50, // 0–100
  stability: 50, // affects prices & unrest
  corruption: 20,
  supply: {},
  demand: {},
  prices: {}
}

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
    "climate": "temperate",
    "terrain": ["plains", "farmland", "rolling hills"],
    "buildable": {
      "land": true,
      "water": false,
      "exceptions": ["bridges", "water_wheels", "water_pumps"]
    }
  },

  "cultures": {
    "dominant": "Eldervale Compact",
    "minor": ["Beastfolk Clans", "Demihuman Settlements"],
    "attitudes": {
      "beastfolk": -10,
      "demihuman": -5,
      "undead": -40,
      "construct": -15
    }
  },

  "laws": {
    "necromancy": "restricted",
    "open_weapons": "legal",
    "undead_presence": "illegal",
    "building_permits": true
  },

  "prejudice": {
    "base": 15,
    "modifiers": {
      "war_time": 20,
      "famine": 25,
      "high_crime": 30
    }
  },

  "factions": {
    "major": [
      "eldervale_council",
      "golden_road_merchants"
    ],
    "minor": [
      "gravewatch",
      "plains_rebels"
    ]
  },

  "myths": {
    "founding": "Summerhand walked these plains unarmed and no one dared raise steel.",
    "local_legends": [
      "The Broken Accord Stone",
      "The Last Peace Banner"
    ]
  },

  "npc_awareness": {
    "fame_thresholds": {
      "known": 20,
      "renowned": 50,
      "mythic": 85
    }
  },
  infrastructure: {
  ports: 0,
  bridges: 0,
  shipyards: 0
}

waterways: {
  rivers: [],
  seaAccess: false
}
piracy: {
  risk: 0,
  activePirates: []
}

  "starting_locations": [
    "greenford_village",
    "sunreach_crossing"
  ]
}
