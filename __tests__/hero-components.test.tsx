import '@testing-library/jest-dom';
import { HttpResponse, http } from 'msw';
import { server } from '@/mocks/server';
import { render, screen, waitFor } from "@testing-library/react";
import { getResource } from '@/app/api/data';
import {
  Film,
  Hero,
  Planet,
  Resourses,
  Starship
} from '@/app/api/definitions';
import HeroFilm from '@/app/ui/films/film';
import HeroCard from '@/app/ui/hero/hero';
import HeroPlanet from '@/app/ui/planet/planet';
import HeroStarship from '@/app/ui/starship/starshiip';
import { residentsData } from '@/mocks/mockdata/mock-residents';

describe("Hero", () => {
  
  it('should have corect hero name - Obi-Wan Kenobi, after loading data', async() => {
    const hero = await getResource<Hero>(Resourses.People, 10);
    render(<HeroCard hero={hero} />);

    await waitFor ( () => {
      expect(screen.getByText('Obi-Wan Kenobi')).toBeInTheDocument()
    })
  });
  
  it('should have correct homeworld name - Stewjon, after loading data', async () => {
    const { homeworld: planetId } = await getResource<Hero>(Resourses.People, 10);
    render(<HeroPlanet id={ planetId.toString() }/> );

    await waitFor( () => {
      
    expect(screen.getByText('Stewjon')).toBeInTheDocument()
    });
  });

  it(`should show message 'Sorry, no planet detected', if there is no planet in database`, async() => {
    render(<HeroPlanet id='150'/>);

    await waitFor (() => {
      expect(screen.queryByText('Sorry, no planet detected')).toBeInTheDocument();
    });

  }) 

  it('should show list of residents, after loading data', async() => {
    const PLANET_ID = 1
    server.use(
      http.get(`${process.env.NEXT_PUBLIC_API_URL}people/:id`, ({ params }) => {
        const { id } = params;
        const hero = residentsData.find(hero => hero.id === Number(id));
     
         return HttpResponse.json(hero);
       }),
    );

    const { residents } = await getResource<Planet>(Resourses.Planets, PLANET_ID);
    render(<HeroPlanet id={ PLANET_ID.toString() }/> );
   
    await waitFor (() => {
      const elements = screen.queryAllByTestId('target-element');

      expect(elements.length).toBe(residents.length)
    })
  });

  it(`should show message 'no information', if no residents on the planet`, async() => {
    const PLANET_ID = 3;
    render(<HeroPlanet id={PLANET_ID.toString()} />);

    await waitFor (() => {
      expect(screen.queryByText('no information')).toBeInTheDocument();
    });
  });

  it('should show  the correct starship name, after loading data', async() => {
    const STARSHIP_ID = 12
    const starship = await getResource<Starship>(Resourses.Starships, STARSHIP_ID);
    render(<HeroStarship starship={starship}/>);

    await waitFor (() => {
      expect(screen.getByText('X-wing')).toBeInTheDocument();
    });
  })

  it('should show correct movie title, after loading data', async() => {
    const FILM_ID = 1;
    const movie = await getResource<Film>(Resourses.Films, FILM_ID);
    render(<HeroFilm film={movie}/>);

    await waitFor(() => {
      expect(screen.getByText('A New Hope')).toBeInTheDocument();
    })
  })
});
