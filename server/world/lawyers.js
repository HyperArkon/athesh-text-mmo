export function hireLawyer(player, skill = 30) {
  player.legal.lawyer.hired = true;
  player.legal.lawyer.skill = skill;
}

export function applyLawyerEffect(player, guiltScore) {
  if (!player.legal.lawyer.hired) return guiltScore;

  return guiltScore - player.legal.lawyer.skill * 0.6;
}
