import { createCaravan } from "./caravanTemplate.js";
import { VESSELS } from "../naval/vessels.js";

export function createNavalCaravan({
  origin,
  destination,
  goods,
  vesselType,
  ownerType,
  ownerId
}) {
  const vessel = VESSELS[vesselType];

  const caravan = createCaravan({
    origin,
    destination,
    goods,
    ownerType,
    ownerId,
    transport: "sea"
  });

  caravan.capacity = vessel.capacity;
  caravan.risk += vessel.riskModifier;
  caravan.vesselType = vesselType;

  return caravan;
}
