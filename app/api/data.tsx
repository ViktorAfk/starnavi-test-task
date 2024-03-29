import axios from "axios";
import { Hero, Planet, ResponseData } from "./definitions";

const instance = axios.create({
  baseURL: 'https://sw-api.starnavi.io',
})

const PEOPLE_URL = 'https://sw-api.starnavi.io/people';

export async function getAllHeroes (){
  const request = await axios.get<ResponseData>(PEOPLE_URL);

  return request.data;
}

export async function getHero(id:string) {
  const request = await instance.get<Hero>(`people/${id}`);
  return request.data;
};

export async function getPlanet(id:string) {
  const request = await instance.get<Planet>(`/planets/${id}`);

  return request.data;
}

export async function addPeopleToList(ids: number[]) {
  const people:Hero[] = [];

  ids.forEach(async(id) => {
    const preaperedId = id.toString()
    const data = await getHero(preaperedId);
    console.log(data);
    
    people.push(data)
  })
  console.log(people)
  return people;
}