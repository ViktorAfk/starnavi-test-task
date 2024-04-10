import axios from "axios";
import {
  Hero,
  Resourses,
  ResponseFilmsData,
  ResponseHeroesData,
  Species,
  Starship,
  typeOfResourses,
} from "./definitions";
import { matchId } from "../utilies";

const instance = axios.create({
  baseURL: 'https://sw-api.starnavi.io/',
})

export async function getAllHeroes (page = ''){
  const request = await instance.get<ResponseHeroesData>('people/' + page);

  return request.data;
}

async function getFilms() {
  const request = await instance.get<ResponseFilmsData>('films');

  return request.data;
}

export async function getHero(id:string) {
  const request = await instance.get<Hero>(`people/${id}`);

  return request.data;
};

export async function getResource<T>(resource:string, id: number) {
  const request = await instance.get<T>(`${resource}/${id}`);

  return request.data;
}

export async function getResources<T>(resource:string, ids: number[]) {
      const arrayOfPromises = ids.map(async(id) => await getResource<T>(resource, id));
      const result = await Promise.all(arrayOfPromises);

      return result;
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

      return starships.includes(Number(starshipId));
    });

    return { filmLabel, hero_starships: heroStarshipsInTheFilm }
  });
  
  return { person, heroMovies, usedStarships };
}