import getDetailInformation from "../api/data";
import HeroCard from "./hero/hero";
import Film from "./films/film";
import HeroStarship from "./starship/starshiip";


let starshipIdCount = 0;

export async function calculateFlowParams(id: string) {

  const position = {
    x: 0,
    y: 0,
  }

  const { 
    person,
    heroMovies,
    usedStarships,
  } = await getDetailInformation(id.toString());

    const mainNode = {
      id: 'Hero',
      data: { label: <HeroCard hero={person}/> },
      position,
    } 

    let count = 1;

    const moviesNodes = [...heroMovies].map(film => {
      
      count +=1;

       const movieNode = {
          id: `Film-${count.toString()}`,
          data: { label: <Film film={film} /> },
          parent: 'Hero-1',
          position,
       }

       const starshipsInCurrentMovie = usedStarships.filter(({filmLabel}) => filmLabel.includes(film.title));
       const starshipsNodes = starshipsInCurrentMovie[0].hero_starships.map(starship => {
        let newOne = starshipIdCount;
        starshipIdCount += 1;
        return {
          id: `${ starship.name }-${ newOne }`,
          data: { label: <HeroStarship starship={ starship }/>},
          parent: `${movieNode.id}`,
          position,
        }
      })

        
        return  [ movieNode, ...starshipsNodes]
    });

    const flatMovieNodes = moviesNodes.flat();

    const initialEdges = flatMovieNodes.map(edge => {
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

   return { initialNodes:[mainNode, ...flatMovieNodes], initialEdges}
  } 
  


 

