import axios from "axios";
import {
  Hero,
  Resourses,
  ResponseFilmsData,
  ResponseHeroesData,
  Starship,
} from "./definitions";

//create an instance of our API URL. 
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

//this function gets list of all heroes that exists on that page;
export async function getAllHeroes (page = ''){
  try {
    const request = await instance.get<ResponseHeroesData>('people/' + page);

  return request.data;
  } catch(error) {
    console.error('Get data error:', error);
    throw new Error(`Failed to fetch people data.`);
  }
  
}

//this function gets all films from API;
async function getFilms() {
  try {
    const request = await instance.get<ResponseFilmsData>('films');
  
    return request.data;
  } catch (error) {
    console.error('Get data error:', error);
    throw new Error(`Failed to fetch films data.`)
  }
}
//this function gets some resource that we need;
export async function getResource<T>(resource:string, id: number) {
  try {
    const request = await instance.get<T>(`${resource}/${id}`);
  
    return request.data;
  } catch(error) {
    console.error('Get data error:', error);
    throw new Error(`Failed to fetch ${resource} data.`)
  }
}

//this function helps to get more then one resources;
export async function getResources<T>(resource:string, ids: number[]) {
  try {
    const arrayOfPromises = ids.map(id => getResource<T>(resource, id));
    const result = await Promise.all(arrayOfPromises);

    return result;
  } catch(error) {
    console.log('Get data error:', error);
    throw new Error(`Failed to fetch ${resource} data.`)
  }
}

//this function prepares all information for the node;
export default async function getDetailInformation(heroId:string) {
  try {
    const person = await getResource<Hero>(Resourses.People, Number(heroId));
    const { results } = await getFilms();
    const allHeroStarships = await getResources<Starship>(Resourses.Starships, person.starships);
  
    const heroMovies = results.filter(({ characters }) => characters.includes(Number(heroId)));
    
    const usedStarships = heroMovies.map(heroMovie => {
      const { starships, episode_id, title } = heroMovie;
  
      const filmLabel = `${title}-${episode_id}`;
  
      const heroStarshipsInTheFilm = allHeroStarships.filter(({id}) => {
  
        return starships.includes(id);
      });
  
      return { filmLabel, hero_starships: heroStarshipsInTheFilm }
    });

    return { person, heroMovies, usedStarships };
  } catch (error) {
    console.log('Get data error:', error);
    throw new Error(`Failed to fetch data.`);

  }
}