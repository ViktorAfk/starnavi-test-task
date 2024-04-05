'use client'
import { getDetailInformation } from "../api/data";
import HeroCard from "./hero/hero";
import Film from "./films/film";
import { useEffect } from "react";
import { useNodesState, useEdgesState } from "reactflow";

// import { Node } from 'reactflow';
// export const initialState = [{
//   id: '1',
//   data: {label: <HeroCard/>}, 
//   position: { x: 0, y: 0},
//   style: {
//     background: 'white',

//   }
// }]

export function useCalculateFlowParams(id: string) {
  const [nodes, setNodes] = useNodesState([]);
  const [edges, setEdges] = useEdgesState([]);

  useEffect(() => {
    setInitialNodes(Number(id))
      .then(({ initialNodes, initialEdges }) => {
        setNodes([...initialNodes.map((item, index) => {
          return {
            id: item.id,
            data: {label: item.data.label},
            position: index === 0 ? { x: 0, y: 0 } : {x: 100 * index, y: 350},
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
    const { person, heroMovies } = await getDetailInformation(id.toString());

    const mainNode = {
      id: '1',
      name: 'Hero',
      data: { label: <HeroCard hero={person}/> },
    } 

    let count = 1;

    const moviesNodes = [...heroMovies].map(film => {
      count +=1;
  
        return  {
          id: count.toString(),
          name: film.title,
          data: {label: <Film film={film} />},
          parent: '1',
        }
    });

    const initialEdges = moviesNodes.map(movie => {
      console.log(movie);
      return {
        id:`el-${movie.id}`,
        source: '1',
        target: `${movie.id}`,
      }
    });

   return { initialNodes:[mainNode, ...moviesNodes], initialEdges}
  } 
  
 return {nodes, edges};
}


 

