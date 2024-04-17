import { Film, Starship } from "../api/definitions";
import HeroFilm from "../ui/films/film";
import HeroStarship from "../ui/starship/starshiip";


// this function helps to prepare basic movies and starships nodes
export const getMoviesAndSrashipsNodes = (
  heroMovies: Film[],
  usedStarships: {
  filmLabel: string;
  hero_starships: Starship[];
  }[],
  position: {
    x: number;
    y: number;
  }

) => {
  let COUNT = 1;
  let STARSHIP_COUNT = 0;
  return [...heroMovies].map(film => {
  
    COUNT +=1;
  
    const movieNode = {
      id: `Film-${COUNT.toString()}`,
      data: { label: <HeroFilm film={film} /> },
      parent: 'Hero-1',
      position,
    }
  
    const starshipsInCurrentMovie = usedStarships.filter(({ filmLabel }) => filmLabel.includes(film.title));
      const starshipsNodes = starshipsInCurrentMovie[0].hero_starships.map(starship => {
        let newOne = STARSHIP_COUNT;
        STARSHIP_COUNT += 1;
  
        return {
          id: `${ starship.name }-${ newOne }`,
          data: { label: <HeroStarship starship={ starship }/>},
          parent: `${movieNode.id}`,
          position,
        }
      });
     return  [ movieNode, ...starshipsNodes]
  });
}

//this function create basic edges
export const createEdges = (nodes: {
  id: string;
  data: {
      label: JSX.Element;
  };
  parent: string;
  position: {
      x: number;
      y: number;
  };
}[]) => {
  return nodes.map(edge => {
    if( edge.id.includes('Film')) {
      return {
        id:`${edge.id}`,
        source: 'Hero',
        target: `${edge.id}`,
      }
    }

    return {
      id:`${edge.id}`,
      source: `${edge.parent}`,
      target: `${edge.id}`,
    }
  });
};
