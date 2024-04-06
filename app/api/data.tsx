import axios from "axios";
import {
  Film,
  Hero,
  Planet,
  ResponseFilmsData,
  ResponseHeroesData,
  Species,
  Starship,
} from "./definitions";
import { request } from "http";
import { matchId } from "../utilies";

const instance = axios.create({
  baseURL: 'https://sw-api.starnavi.io/',
})

export async function getAllHeroes (page = ''){
  const request = await instance.get<ResponseHeroesData>('people' + page);

  return request.data;
}

async function getFilms() {
  const request = await instance.get<ResponseFilmsData>('films');

  return request.data;
}

export async function getFilmsById(ids: number[]) {
  const preaperedIds = ids.map(id => id.toString());
  const arrayOfPromises = preaperedIds.map(getFilm);
  const result = await Promise.all(arrayOfPromises);

  return result;
}

export async function getHero(id:string) {
  const request = await instance.get<Hero>(`people/${id}`);

  return request.data;
};

export async function getPlanet(id:string) {
  const request = await instance.get<Planet>(`planets/${id}`);

  return request.data;
}

export async function getStarShip(id:string) {
  const request = await instance.get<Starship>(`starships/${id}`);

  return request.data;
}

export async function getSpecies(id: string) {
  const request = await instance.get<Species>(`species/${id}`);

  return request.data;
}

export async function getFilm(id:string) {
  const request = await instance.get<Film>(`films/${id}`);

  return request.data;
}

export async function getResource<T>(resource:string, id: number) {
  const request = await instance.get<T>(`${resource}/${id}`);

  return request.data;
}

export async function getResources<T>(resource:string, ids: number[]) {
      const arrayOfPromises = ids.map(id => getResource<T>(resource, id));
      const result = await Promise.all(arrayOfPromises);

      return result;
}

export async function universalRequest(type:string, ids: number[]) {
  const preaperedIds = ids.map(id => id.toString());

  switch (type) {
    case 'residents': {
      const arrayOfPromises = preaperedIds.map(getHero);
      const result = await Promise.all(arrayOfPromises);

      return result;
    }
    
    case 'species': {
      const arrayOfPromises = preaperedIds.map(getSpecies);
      const result = await Promise.all(arrayOfPromises);

      return result;
    }

    case 'starships': {
      const arrayOfPromises = preaperedIds.map(getStarShip);
      const result = await Promise.all(arrayOfPromises);

      return result;
    }
  
    default:
      return null;
  }
}

//this function prepares all information for the node;
export default async function getDetailInformation(heroId:string) {
  const person = await getHero(heroId.toString());
  const { results } = await getFilms();
  const allHeroStarships = await getResources<Starship>('starships', person.starships);

  const heroMovies = results.filter(({ characters }) => characters.includes(Number(heroId)));

  const usedStarships = heroMovies.map(heroMovie => {
    const { starships, episode_id, title } = heroMovie;

    const filmLabel = `${title}-${episode_id}`;

    const heroStarshipsInTheFilm = allHeroStarships.filter(starship => {
      const starshipId = matchId(starship.url);

      return starships.includes(Number(starshipId))
    });

    return { filmLabel, hero_starships: heroStarshipsInTheFilm }
  });
  
  return { person, heroMovies, usedStarships };
}