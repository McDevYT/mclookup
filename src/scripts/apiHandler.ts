import { capeList, easterEggs } from "./consts";
import type { Player, PlayerCape } from "./types";

export const getPlayerData = async (
  playerIdentifier: string
): Promise<Player | null> => {
  const response = await fetch(
    `https://mc-lookup.vercel.app/api/player/${playerIdentifier}`
  );

  if (response.status === 204 || response.status === 404) {
    return null;
  }
  if (!response.ok) {
    throw new Error(
      `Failed to fetch UUID: ${response.status} ${response.statusText}`
    );
  }
  const data = await response.json();

  const capes: PlayerCape[] | undefined = [];

  if (data.capes) {
    data.capes.forEach((cape: { type: string; removed: boolean }) => {
      capes.push(getPlayerCape(cape.type, cape.removed));
    });
  }

  const easterEgg = easterEggs[data.uuid as string];
  if (easterEgg?.capes !== undefined) {
    Object.values(easterEgg.capes).map((cape) => {
      capes.push({ ...cape, removed: false });
    });
  }

  const player: Player = {
    capes: capes,
    uuid: data.uuid,
    name: data.name,

    skin: data.skin,
    model: data.model,
  };

  return player;
};

const getPlayerCape = (capeType: string, removed: boolean): PlayerCape => {
  const currentCape = capeList[capeType];
  return {
    class: currentCape.class,
    removed: removed,
    title: currentCape.title,
    type: capeType,
    url: currentCape.url,
    value: currentCape.value,
    description: currentCape.description,
  };
};
