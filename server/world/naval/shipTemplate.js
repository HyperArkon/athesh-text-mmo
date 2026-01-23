export function createShip(type) {
  const stats = {
    barge: { hp: 50, attack: 5, defense: 5 },
    merchantShip: { hp: 100, attack: 10, defense: 10 },
    warGalley: { hp: 180, attack: 25, defense: 20 }
  };

  return {
    id: crypto.randomUUID(),
    type,
    hp: stats[type].hp,
    attack: stats[type].attack,
    defense: stats[type].defense,
    status: "active" // active | sunk | captured
  };
}
