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

export async function getDetailInformation(heroId:string) {
  const person = await getHero(heroId.toString());
  const { results } = await getFilms();
  
  const heroMovies = results.filter(({ characters }) => characters.includes(Number(heroId)));

  const starship = heroMovies.map(heroMovie => {
    const { starships } = heroMovie;
    const heroStarships = starships.filter(starship => person.starships.includes(starship));

    return {...heroMovie, hero_starships: heroStarships}
  });
  console.log(starship);
  return { person, heroMovies };
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