export interface Player {
  uuid: string;
  name: string;
  skin: string;
  model: string;
  capes: {
    type: string;
    title: string;
    url: string;
  }[];
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
