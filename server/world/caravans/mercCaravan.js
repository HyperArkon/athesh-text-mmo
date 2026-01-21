import { createCaravan } from "./caravanTemplate.js";

export function createMercCaravan(company, origin, destination) {
  return createCaravan({
    origin,
    destination,
    goods: {},
    ownerType: "company",
    ownerId: company.id
  });
}
