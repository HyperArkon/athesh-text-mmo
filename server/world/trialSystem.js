export function runTrial(player, region) {
  const court = region.court;

 import { applyLawyerEffect } from "./lawyers.js";
import { applyFalseEvidence } from "./falseEvidence.js";
import { getJudgeBias } from "./judgeBias.js";

let guiltScore =
  player.crime.notoriety +
  player.crime.wantedLevel * 10 -
  court.fairness +
  court.severity;

// Judge bias
guiltScore += getJudgeBias(region);

// Bribes reduce guilt
guiltScore -= player.legal.bribes.court * 0.4;

// Lawyer effect
guiltScore = applyLawyerEffect(player, guiltScore);

// False evidence effect
guiltScore = applyFalseEvidence(player, guiltScore);


  let verdict = "innocent";

  if (guiltScore > 30) verdict = "guilty";
  if (guiltScore > 70) verdict = "severe";

  player.legal.verdict = verdict;
  player.legal.awaitingTrial = false;

  applyVerdict(player, region, verdict);
}

function applyVerdict(player, region, verdict) {
  switch (verdict) {
    case "innocent":
      releasePlayer(player, region);
      break;

    case "guilty":
      player.prison.sentence += 20;
      break;

    case "severe":
      if (region.court.executionEnabled) {
        executePlayer(player, region);
      } else {
        player.prison.sentence += 100;
      }
      break;
  }
}

function releasePlayer(player, region) {
  player.prison.incarcerated = false;
  player.status = "released";
  region.prison.inmates = region.prison.inmates.filter(
    id => id !== player.id
  );
}

function executePlayer(player, region) {
  player.status = "executed";
  player.alive = false;
  region.prison.inmates = region.prison.inmates.filter(
    id => id !== player.id
  );
}
