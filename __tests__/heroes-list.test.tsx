import getDetailInformation, { getAllHeroes } from "@/app/api/data"

describe('check', () => {

 it('should return correct data, if id exist', async() => {
  const HERO_ID = '10'
  const { person, heroMovies, usedStarships } = await getDetailInformation('10');

  expect(person).toEqual()

 })

})