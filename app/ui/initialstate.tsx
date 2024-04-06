'use client'
import getDetailInformation from "../api/data";
import HeroCard from "./hero/hero";
import Film from "./films/film";
import { useEffect } from "react";
import { useNodesState, useEdgesState } from "reactflow";
import HeroStarship from "./starship/starshiip";

// import { Node } from 'reactflow';
// export const initialState = [{
//   id: '1',
//   data: {label: <HeroCard/>}, 
//   position: { x: 0, y: 0},
//   style: {
//     background: 'white',

//   }
// }]
type Coordinate = {
  x: number;
  y: number;
}
export function useCalculateFlowParams(id: string) {
  const [nodes, setNodes] = useNodesState([]);
  const [edges, setEdges] = useEdgesState([]);

  function currentPosition(type: string, index: number){
  switch (type) {

    case 'hero':
      return { 
        x: 0, 
        y: 0,
      }

    case 'film': {
      return {
        x: 100 * index, y: 350
      }
    }

    case 'starship':
       return  {
        x: 100 * index, y: 450
       }
    
    default:
        return { x: 0, y: 0 }
  }
  }
  useEffect(() => {
    setInitialNodes(Number(id))
      .then(({ initialNodes, initialEdges }) => {
        setNodes([...initialNodes.map((item, index) => {
          return {
            id: item.id,
            data: {label: item.data.label},
            position: currentPosition(item.type, index),
            style: {
              width: 'fit-content',
            }
          }
        })]);

        setEdges(initialEdges);

      }
        )
  }, [id, setNodes, setEdges]);

  async function setInitialNodes(id:number) {
    const { 
      person,
      heroMovies,
      usedStarships,
    } = await getDetailInformation(id.toString());

    const mainNode = {
      id: '1',
      name: 'Hero',
      data: { label: <HeroCard hero={person}/> },
      type: 'hero',
    } 

    let count = 1;
    const labels = "abcdefghijklmnopqrstuvwxyz";

    const moviesNodes = [...heroMovies].map(film => {
      let starshipCount = 0;
      count +=1;

       const movieNode = {
          id: count.toString(),
          name: `film: - ${film.title}`,
          data: { label: <Film film={film} /> },
          parent: '1',
          type: 'film'
       }

       const starshipsInCurrentMovie = usedStarships.filter(({filmLabel}) => filmLabel.includes(film.title));

       const starshipsNodes = starshipsInCurrentMovie[0].hero_starships.map(starship => {
        starshipCount += 1;
        return {
          id: `${ movieNode.id }-${ starshipCount }`,
          name: `${starship.name}`,
          type: 'starship',
          data: { label: <HeroStarship starship={ starship }/>},
          parent: `${movieNode.id}`
        }
      })

        
        return  [ movieNode, ...starshipsNodes]
    });

    const flatMovieNodes = moviesNodes.flat();

    const initialEdges = flatMovieNodes.map(edge => {
      if( edge.type === 'film') {
        return {
          id:`el-${edge.id}`,
          source: '1',
          target: `${edge.id}`,
        }
      }
      return {
        id:`el-${edge.id}`,
        source: `${edge.parent}`,
        target: `${edge.id}`,
      }
    });
  
   return { initialNodes:[mainNode, ...flatMovieNodes], initialEdges}
  } 
  
 return { nodes, edges };
}


 

