import axios from "axios";
import { Film, Hero, Planet, ResponseData, Species, Starship } from "./definitions";
import { get } from "http";

const instance = axios.create({
  baseURL: 'https://sw-api.starnavi.io/',
})

export async function getAllHeroes (){
  const request = await instance.get<ResponseData>('people');

  return request.data;
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

export async function getFilms(ids:number[]) {
  const preaperedIds = ids.map(id => id.toString());
  const arrayOfPromises = preaperedIds.map(getFilm);
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