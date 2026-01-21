import { arrestPlayer } from "./arrestPlayer.js";

export function handleLawResponse(player, region) {
  const law = region.lawEnforcement;

  if (player.crime.wantedLevel < 3) {
    player.status = "warned";
    law.alertLevel += 2;
    return;
  }

  if (player.crime.wantedLevel < 6) {
    player.status = "pursued";
    law.alertLevel += 5;
    return;
  }

  arrestPlayer(player, region);
  law.alertLevel += 10;
}
