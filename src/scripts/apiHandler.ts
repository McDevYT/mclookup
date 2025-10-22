import { capeList } from "./consts";
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

  const capes =
    (await getPlayerCapes(data.uuid)) ??
    (data.cape
      ? [
          {
            url: data.cape as string,
            title: "",
            type: "",
            removed: false,
          },
        ]
      : []);

  const player: Player = {
    capes: capes,
    uuid: data.uuid,
    name: data.name,

    skin: data.skin,
    model: data.model,
  };

  return player;
};

const getPlayerCapes = async (
  uuid: string
): Promise<
  { url: string; title: string; type: string; removed: boolean }[] | null
> => {
  let response;
  try {
    response = await fetch(`https://capes.me/api/user/${uuid}`);
  } catch (e) {
    return null;
  }
  if (response.status === 204 || response.status === 404) {
    return null;
  }
  const data = await response.json();

  if (data.error) {
    return null;
  }

  const capes: PlayerCape[] = [];

  data.capes.forEach((cape: { type: string; removed: boolean }) => {
    const currentCape = capeList[cape.type];
    capes.push({
      type: currentCape.type,
      title: currentCape.title,
      url: currentCape.url,
      removed: cape.removed,
      value: currentCape.value,
      class: currentCape.class,
    });
  });

  return capes;
};
