export function navalBattle(attacker, defender) {
  const attackerPower = attacker.ships.reduce(
    (sum, s) => sum + s.attack + s.hp * 0.2, 0
  );
  const defenderPower = defender.ships.reduce(
    (sum, s) => sum + s.defense + s.hp * 0.2, 0
  );

  const outcome = attackerPower - defenderPower;

  if (outcome > 0) {
    defender.status = "destroyed";
    defender.ships.forEach(s => (s.status = "sunk"));
    attacker.morale -= 10;
    return "attackerVictory";
  } else {
    attacker.status = "retreating";
    attacker.ships.forEach(s => (s.hp -= 20));
    return "defenderVictory";
  }
}
