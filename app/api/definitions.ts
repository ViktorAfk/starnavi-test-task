
export interface Hero {
name: string;
birth_year: string;
eye_color: string;
gender: string;
hair_color: string;
height: string;
mass: string;
skin_color: string;
homeworld: string;
films: number[];
species: number[];
starships: number[];
vehicles: number[];
url: string;
created: string;
edited: string;
}

export type ResponseData ={
  count: number;
  next: string | null;
  previous: string | null;
  results: Hero[];
}

export interface Planet {
  name: string;
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string; 
  residents: number[];
  films: number[];
  created: string;
  edited: string;
}