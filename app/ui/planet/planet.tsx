'use client'
import { getPlanet, getResource } from "@/app/api/data";
import { Planet, Resourses } from "@/app/api/definitions";
import { useEffect, useState } from "react";
import ListOfValues from "../listofvalues/listofvalues";

export default function HeroPlanet({ id }:{
  id: string;
}) {
  const [planet, setPlanet] =useState<Planet | null>(null);

  useEffect(() => {
   const Homeland = async() => {
    const data = await getResource(Resourses.Planets, Number(id));
    setPlanet(data);
   }

   Homeland();
  
  }, [id]);

  return (
    <>
     {planet ? (
      <div>
        <h4 className="text-2xl text-decorated mb-4">{planet?.name}</h4>

        <div className="flex justify-between">
          <p>diametr</p>
          <p>{planet.diameter}</p>
        </div>
        <div className="flex justify-between">
          <p>rotation period</p>
          <p>{planet.rotation_period}</p>
        </div>
        <div className="flex justify-between">
          <p>orbital period</p>
          <p>{planet.orbital_period}</p>
        </div>
        <div className="flex justify-between">
          <p>gravity</p>
          <p>{planet.gravity}</p>
        </div>
        <div className="flex justify-between">
          <p>population</p>
          <p>{planet.population}</p>
        </div>
        
        <div className="flex justify-between">
          <p>climate</p>
          <p>{planet.climate}</p>
        </div>

        <div className="flex justify-between gap-10">
          <p>terrain</p>
          <p className="text-right">{planet.terrain}</p>
        </div>

        <div className="flex justify-between">
          <p>surface water</p>
          <p>{planet.surface_water}</p>
        </div>

        <div className="flex justify-between">
          <p></p>
          <p></p>
        </div>

        <div className="flex justify-between">
          <p>residents</p>
          <div>
            <ListOfValues ids={planet.residents} typeOfValue={Resourses.People}/>
          </div>
        </div>
    </div>
     ) : (
      <p>Sorry, no planet detected</p>
     )}
    </>
    
    
  )
}
