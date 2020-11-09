export interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
  species: string;
  stats: Stats;
}

interface Stats {
  hp: number;
  attack: number;
  defense: number;
  spAttack: number;
  spDef: number;
  speed: number;
  total: number;
}
