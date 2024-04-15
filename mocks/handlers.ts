import { http, HttpResponse } from 'msw';
import { mockPeople } from './mockdata/mock-people';
import { starshipsData } from './mockdata/mock-starships';
import { filmsData } from './mockdata/mock-films';
import { planetData } from './mockdata/mock-planets';

export const handlers = [
  http.get(`${process.env.NEXT_PUBLIC_API_URL}people/`, () => {
  return HttpResponse.json(mockPeople, {status: 200})
  }),

  http.get(`${process.env.NEXT_PUBLIC_API_URL}people/:id`, ({ params }) => {
   const { id } = params;
   const hero = mockPeople.results.find(hero => hero.id === Number(id));

    return HttpResponse.json(hero);
  }),

  http.get(`${process.env.NEXT_PUBLIC_API_URL}starships/`, () => {
    return HttpResponse.json(starshipsData);
  }),

  http.get(`${process.env.NEXT_PUBLIC_API_URL}starships/:id`, ({ params }) => {
    const { id } = params;
    const starship = starshipsData.find(starship => starship.id === Number(id));

    return HttpResponse.json(starship);
  }),

  http.get(`${process.env.NEXT_PUBLIC_API_URL}films`, () => {
    return HttpResponse.json(filmsData);
  }),

  http.get(`${process.env.NEXT_PUBLIC_API_URL}films/:id`, ({ params }) => {
    const { id } = params;
    const film = filmsData.results.find(film => film.id === Number(id))

    return HttpResponse.json(film);
  }),

  http.get(`${process.env.NEXT_PUBLIC_API_URL}planets/:id`, ({ params }) => {
    const { id } = params;
    const planet = planetData.find( planet => planet.id === Number(id));

    return HttpResponse.json(planet)
  })
]