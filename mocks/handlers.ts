import { http, HttpResponse } from 'msw';
import { filmsData, mockData, starshipsData } from './data';

export const handlers = [
  http.get(`${process.env.NEXT_PUBLIC_API_URL}/people/`, () => {
  return HttpResponse.json(mockData, {status: 200})
  }),
  http.get(`${process.env.NEXT_PUBLIC_API_URL}people/:id`, ({ params }) => {
   const { id } = params;
   console.log(id);
   const hero = mockData.results.find(hero => hero.id === Number(id));

    return HttpResponse.json(hero);
  }),
  http.get(`${process.env.NEXT_PUBLIC_API_URL}/starships`, () => {
    return HttpResponse.json(starshipsData);
  }),
  http.get(`${process.env.NEXT_PUBLIC_API_URL}/films`, () => {
    return HttpResponse.json(filmsData);
  })
]