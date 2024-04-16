import getDetailInformation from "@/app/api/data"
import { heroWithoutStarships, mockPerson, mockStarshipsData } from "@/mocks/mockdata/getInformation-data";
import { filmsData } from "@/mocks/mockdata/mock-films";
import { server } from "@/mocks/server";
import { HttpResponse, http } from "msw";

describe('getDetailInformation', () => {

 it('should return correct data, if id exist', async() => {
  const HERO_ID = '10'
  const { person, heroMovies, usedStarships } = await getDetailInformation(HERO_ID);

  expect(person).toEqual(mockPerson);
  expect(heroMovies).toEqual(filmsData.results);
  expect(usedStarships).toEqual(mockStarshipsData);

 })

 it('should return currect data, if there are no starships that the current hero used in the movie',
  async() => {
    const HERO_ID = '12';
    const { usedStarships } = await getDetailInformation(HERO_ID);

    expect(usedStarships).toEqual(heroWithoutStarships);
  }
 )
 
 it('should throw an error, when we don\'t have such hero in database', async()=> {
  const UREAL_ID = '150';

  server.use(
    http.get(`${process.env.NEXT_PUBLIC_API_URL}people/:id`, () => {
      return HttpResponse.json({error: "No such person"}, {status: 404})
      }
    )
  );

  expect(async() => {
    await getDetailInformation('150');
  }).rejects.toThrow();

  });
 

})