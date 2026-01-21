export function getJudgeBias(region) {
  const corruption = region.court.corruption;

  if (corruption < 20) return 0;
  if (corruption < 50) return 10;
  if (corruption < 80) return 25;
  return 40;
}
