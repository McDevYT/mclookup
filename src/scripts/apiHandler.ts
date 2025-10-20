import type { Player } from "./types";

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

  console.log(data);

  const player: Player = {
    capes: [
      { url: data.cape as string, title: "", type: "1" },
      { url: data.cape as string, title: "", type: "2" },
      { url: data.cape as string, title: "", type: "3" },
      { url: data.cape as string, title: "", type: "4" },
      { url: data.cape as string, title: "", type: "5" },
      { url: data.cape as string, title: "", type: "6" },
      { url: data.cape as string, title: "", type: "7" },
      { url: data.cape as string, title: "", type: "8" },
      { url: data.cape as string, title: "", type: "9" },
      { url: data.cape as string, title: "", type: "98" },
    ],
    uuid: data.uuid,
    name: data.name,

    skin: data.skin,
    model: data.model,
  };

  return player;
};
