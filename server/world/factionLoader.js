import fs from "fs";

const FACTIONS_PATH = new URL("./factions/", import.meta.url);

export function loadFactions() {
  const factions = {};
  const files = fs.readdirSync(FACTIONS_PATH);

  for (const file of files) {
    if (!file.endsWith(".json")) continue;

    const data = JSON.parse(
      fs.readFileSync(new URL(file, FACTIONS_PATH))
    );

    factions[data.id] = data;
  }

  return factions;
}
