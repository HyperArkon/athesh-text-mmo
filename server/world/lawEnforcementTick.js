export function runLawEnforcementTick(region, worldState) {
  const law = region.lawEnforcement;
  const crime = region.crime;

  // Alert level reacts to crime
  law.alertLevel += (crime.crimeLevel * 0.05) - 0.5;
  law.alertLevel = clamp(law.alertLevel, 0, 100);

  // Guard reinforcement
  if (law.alertLevel > 60 && law.guardCount < 100) {
    law.guardCount += 1;
  }

  // Lockdown conditions
  law.lockdown = law.alertLevel > 80;

  // Corruption growth
  if (crime.corruption > 30) {
    law.corruption += 0.2;
  } else {
    law.corruption -= 0.1;
  }

  law.corruption = clamp(law.corruption, 0, 100);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
