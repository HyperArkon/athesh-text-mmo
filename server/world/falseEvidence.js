export function plantFalseEvidence(player, severity = 20) {
  player.legal.falseEvidence.planted = true;
  player.legal.falseEvidence.severity = severity;
}

export function applyFalseEvidence(player, guiltScore) {
  if (!player.legal.falseEvidence.planted) return guiltScore;

  return guiltScore + player.legal.falseEvidence.severity;
}
