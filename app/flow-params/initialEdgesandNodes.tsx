import getDetailInformation from "../api/data";
import HeroCard from "../ui/hero/hero";
import { createEdges, getMoviesAndSrashipsNodes } from "./flow-utils";

// this functions calculate all nodes and edges
export async function calculateFlowParams(id: string) {
  try {
    const position = {
      x: 0,
      y: 0,
    }
  
    const { 
      person,
      heroMovies,
      usedStarships,
    } = await getDetailInformation(id);
  
    const mainNode = {
      id: 'Hero',
      data: { label: <HeroCard hero={person}/> },
      position,
    } 
  
    const moviesNodes = getMoviesAndSrashipsNodes(heroMovies, usedStarships, position)
    const flatMovieNodes = moviesNodes.flat();
  
    const initialEdges = createEdges(flatMovieNodes);
    console.log([mainNode, ...flatMovieNodes]);
    
    return { initialNodes:[mainNode, ...flatMovieNodes], initialEdges}
  } catch (error) {
    console.error('Get calculation flow params error:', error);
    throw new Error(`Failed to calculate flow params.`);
  }
}
