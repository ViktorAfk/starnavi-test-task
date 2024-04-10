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

export type ApiResponse<T> ={
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
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
  url:string;
  created: string;
  edited: string;
}

export interface Species {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  average_lifespan: string;
  eye_colors: string; 
  hair_colors: string; 
  skin_colors: string;
  language: string;
  homeworld: string;
  people: number[];
  films: number[];
  url: string;
  created: string;
  edited: string;
}

export interface Starship {
  name: string; 
  model: string; 
  starship_class: string;
  manufacturer: string; 
  cost_in_credits: string;
  length: string; 
  crew: string; 
  passengers: string; 
  max_atmosphering_speed: string; 
  hyperdrive_rating: string; 
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  films: number[]; 
  pilots: number[]; 
  url: string;
  edited: string;
}

export interface Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  species: number[];
  starships: number[];
  vehicles: number[];
  characters: number[];
  planets: number[];
  url: string;
  created: string;
  edited: string;
}

export interface Vehicle {
  name: string;
  model: string;
  vehicle_class: string;
  manufacturer: string; 
  length: string; 
  cost_in_credits: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  cargo_capacity: string;
  consumables: string;
  films: number[];
  pilots: number[];
  url: string;
  created: string;
  edited: string;
}

export type ResponseFilmsData = ApiResponse<Film>;

export type ResponseHeroesData = ApiResponse<Hero>;


export enum Resourses {
  People = 'people',
  Films = 'films',
  Starships = 'starships',
  Vehicles = 'veichles',
  Species = 'species',
  Planets = 'planets'
}
interface Unknown {
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
  url:string;
  created: string;
  edited: string;
}
export type unionResourse = Hero[] | Planet[] | Species[] | Starship[] | Vehicle[];

export type typeOfResourses = 'people' | 'starships' | 'veichles' | 'species' | 'planets';