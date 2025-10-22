export interface Player {
  uuid: string;
  name: string;
  skin: string;
  model: string;
  capes: PlayerCape[];
}

export interface Cape {
  url: string;
  type: string;
  title: string;
  class: string;
  alts?: string[];
  hidden?: boolean;
  cache: boolean;
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
