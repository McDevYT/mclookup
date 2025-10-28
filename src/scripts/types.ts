export interface Player {
  uuid: string;
  name: string;
  skin: string;
  model: string;
  capes: PlayerCape[] | undefined;
}

export interface Cape {
  url: string;
  type: string;
  title: string;
  class: string;
  alts?: string[];
  hidden?: boolean;
  cache: boolean;
  description: string;
  value: number;
}

export interface PlayerCape {
  url: string;
  type: string;
  title: string;
  class: string;
  value: number;
  removed: boolean;
}
