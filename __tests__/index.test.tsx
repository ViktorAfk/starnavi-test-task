import { getAllHeroes, getHero, getResource } from '@/app/api/data';
import { Hero, Resourses } from '@/app/api/definitions';
import TestFunc from '@/app/testpage';
import HeroFilm from '@/app/ui/films/film';
import HeroCard from '@/app/ui/hero/hero';
import Pagination from '@/app/ui/table/pagination';
import '@testing-library/jest-dom'
import { render, screen, waitFor } from "@testing-library/react";




// const heroFilm = {
//   id: 1,
//     title: "A New Hope",
//     episode_id: 4,
//     opening_crawl: "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
//     director: "George Lucas",
//     producer: "Gary Kurtz, Rick McCallum",
//     release_date: "1977-05-25",
//     characters: [
//         10,
//         12,
//         13,
//         14,
//         15,
//         16,
//         18,
//         19,
//         1,
//         2,
//         3,
//         4,
//         5,
//         6,
//         7,
//         8,
//         9,
//         81
//     ],
//     planets: [
//         1,
//         2,
//         3
//     ],
//     starships: [
//         2,
//         3,
//         5,
//         9,
//         10,
//         11,
//         12,
//         13,
//     ],
//     vehicles: [
//         4,
//         6,
//         7,
//         8
//     ],
//     species: [
//         1,
//         2,
//         3,
//         4,
//         5
//     ],
//     created: "2014-12-10T14:23:31.880000Z",
//     edited: "2014-12-20T19:49:45.256000Z",
//     url: "https://sw-api.starnavi.io/films/1/"
// }


describe("Hero", () => {
  it('should have hero name', async() => {
    const hero = await getResource<Hero>(Resourses.People, 10)
    render(<HeroCard hero={hero} />);
    await waitFor ( () => {
      expect(screen.getByText('Obi-Wan Kenobi')).toBeInTheDocument
    })
    });

});

