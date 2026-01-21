export function createGangState(gangData) {
  return {
    heat: 10,          // attention from law
    loyalty: 50,       // internal stability
    power: gangData.size + gangData.influence,
    active: true
  };
}
