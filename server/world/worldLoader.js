import fs from "fs";
import path from "path";

const REGIONS_PATH = new URL("./regions/", import.meta.url);

export function loadRegions() {
  const regions = {};

  const files = fs.readdirSync(REGIONS_PATH);

  for (const file of files) {
    if (!file.endsWith(".json")) continue;

    const regionData = JSON.parse(
      fs.readFileSync(new URL(file, REGIONS_PATH))
    );

    regions[regionData.id] = regionData;
  }

  return regions;
}
