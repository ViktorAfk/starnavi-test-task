'use client'
import { getPlanet } from "@/app/api/data";
import { Planet } from "@/app/api/definitions";
import { useEffect, useState } from "react";
import ListOfPeople from "../listofpeople/listofpeople";


export default function HeroPlanet({ id }:{
  id: string;
}) {
  const [planet, setPlanet] =useState<Planet | null>(null);
  useEffect(() => {
   const Homeland = async() => {
    const data = await getPlanet(id);
    setPlanet(data);
   }
   Homeland();
  
  }, [id]);

  return (
    <>
     {planet ? (
      <div>
      <h3>{planet?.name}</h3>
      <div>
        <p>diametr</p>
        <p>{planet.diameter}</p>
      </div>
      <div>
        <p>rotation period</p>
        <p>{planet.rotation_period}</p>
      </div>
      <div>
        <p>orbital period</p>
        <p>{planet.orbital_period}</p>
      </div>
      <div>
        <p>gravity</p>
        <p>{planet.gravity}</p>
      </div>
      <div>
        <p>population</p>
        <p>{planet.population}</p>
      </div>
      <div>
        <p>climate</p>
        <p>{planet.climate}</p>
      </div>

      <div>
        <p>terrain</p>
        <p>{planet.terrain}</p>
      </div>

      <div>
        <p>surface water</p>
        <p>{planet.surface_water}</p>
      </div>

      <div>
        <p></p>
        <p></p>
      </div>
      <div>
      
        <h4>residents</h4>
        <div>
          <ListOfPeople ids={planet.residents}/>
        </div>
      </div>
    </div>
     ) : (
      <p>Sorry, no planet detected</p>
     )}
    </>
    
    
  )
}

  // residents: number[];
  // films: number[];
  // created: string;
  // edited: string;