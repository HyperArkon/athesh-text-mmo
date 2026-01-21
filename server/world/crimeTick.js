import { Gangs } from "./gangs.js";

export function runCrimeTick(region, worldState) {
  const crime = region.crime;

  // Base crime growth
  crime.crimeLevel += 0.5 - (crime.lawPressure * 0.01);
  crime.crimeLevel = Math.max(0, Math.min(100, crime.crimeLevel));

  // Spawn gangs if crime is high
  if (crime.crimeLevel > 40 && crime.gangs.length < 3) {
    spawnGang(region, worldState);
  }

  // Law enforcement response
  if (crime.crimeLevel > 60) {
    crime.lawPressure += 1;
  } else {
    crime.lawPressure -= 0.5;
  }

  crime.lawPressure = Math.max(0, Math.min(100, crime.lawPressure));
}

function spawnGang(region, worldState) {
  const gangId = `gang_${Date.now()}`;

  Gangs[gangId] = {
    id: gangId,
    name: "Unnamed Syndicate",
    region: region.id,
    size: 20,
    influence: 10,
    notoriety: 5,
    wealth: 20,
    corruption: 5,
    factionTies: {
      allied: [],
      hostile: []
    },
    activities: {
      theft: 0.6,
      smuggling: 0.3,
      assassination: 0.1,
      extortion: 0.4
    }
  };

  region.crime.gangs.push(gangId);
}
