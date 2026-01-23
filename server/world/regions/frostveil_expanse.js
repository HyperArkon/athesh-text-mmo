{
  "id": "frostveil_expanse",
  "name": "Frostveil Expanse",
  "type": "snow",

  "description": {
    "short": "A frozen land where survival is law and weakness is remembered.",
    "long": "The Frostveil Expanse is a brutal northern region of endless snowfields, ice-choked rivers, and mountain-walled cities. Life here is hard, honor-bound, and unforgiving. Every law exists to keep people alive."
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
    "climate": "polar",
    "terrain": ["snowfields", "ice_rivers", "frozen_forest", "mountain_edges"],
    "buildable": {
      "land": true,
      "water": false,
      "exceptions": ["ice_bridges", "harbor_pylons"]
    },
    "hazards": ["extreme_cold", "blizzards", "whiteout"]
  },

  "cultures": {
    "dominant": "Frostveil Clans",
    "minor": ["Dwarven Holds", "Beastfolk Packs"],
    "attitudes": {
      "beastfolk": 0,
      "demihuman": -5,
      "undead": -25,
      "construct": -10
    }
  },

  "laws": {
    "necromancy": "conditionally_legal",
    "undead_presence": "restricted",
    "open_weapons": "expected",
    "building_permits": false,
    "winter_survival_required": true
  },

  "prejudice": {
    "base": 20,
    "modifiers": {
      "resource_shortage": 30,
      "foreign_presence": 25
    }
  },

  "factions": {
    "major": [
      "frostveil_high_clans",
      "ironbound_wardens"
    ],
    "minor": [
      "snowtrader_circles",
      "white_veil_sect"
    ]
  },

  "myths": {
    "founding": "The first clans survived the Long Winter by burying their dead in ice and learning which spirits answered.",
    "local_legends": [
      "The Frozen Oath Stone",
      "The Icebound Pyre"
    ]
  },

  "npc_awareness": {
    "fame_thresholds": {
      "known": 15,
      "renowned": 40,
      "mythic": 75
    }
  },
  
waterways: {
  rivers: [],
  seaAccess: false
}

  "starting_locations": [
    "icewatch_hold",
    "snowreach_outpost"
  ]
}
