'use client'
import { getResource } from "@/app/api/data";
import { Planet, Resourses } from "@/app/api/definitions";
import { useEffect, useState } from "react";
import Residents from "../residents/residents";

export default function HeroPlanet({ id }:{
  id: string;
}) {

  const [planet, setPlanet] = useState<Planet | null>(null)
  
  useEffect(() => {

    const getHomeland = async() => {
      try {
        const data = await getResource<Planet>(Resourses.Planets, Number(id));
        setPlanet(data);
      } catch (error) {
        console.log('Get data error:', error);
        throw new Error(`Failed to fetch data.`);
      }
    }

    getHomeland();

  }, [id]);
  
  return (
    <>
     {planet ? (
      <div>
        <h4 className="text-2xl text-decorated mb-4">
          {planet.name}<br />
          <span className="text-base text-white">(homeland)</span>
        </h4>

        <div className="flex justify-between mb-1">
          <p className="text-left text-decorated">diametr</p>
          <p>{planet.diameter}</p>
        </div>

        <div className="flex justify-between mb-1">
          <p className="text-left text-decorated">rotation period</p>
          <p>{planet.rotation_period}</p>
        </div>

        <div className="flex justify-between mb-1">
          <p className="text-left text-decorated">orbital period</p>
          <p>{planet.orbital_period}</p>
        </div>

        <div className="flex justify-between mb-1">
          <p className="text-left text-decorated">gravity</p>
          <p>{planet.gravity}</p>
        </div>

        <div className="flex justify-between mb-1">
          <p className="text-left text-decorated">population</p>
          <p>{planet.population}</p>
        </div>
        
        <div className="flex justify-between mb-1">
          <p className="text-left text-decorated">climate</p>
          <p>{planet.climate}</p>
        </div>

        <div className="flex justify-between gap-10 mb-1">
          <p className="text-left text-decorated">terrain</p>
          <p className="text-right">{planet.terrain}</p>
        </div>

        <div className="flex justify-between mb-1">
          <p className="text-left text-decorated">surface water</p>
          <p>{planet.surface_water}</p>
        </div>

        <div className="flex justify-between mb-1">
          <p className="text-left text-decorated">residents</p>
  
          <div>
            {planet.residents.length < 1 ? (
              'no information' ) : (
                <Residents ids={planet.residents} />
            )}
          </div>
        </div>
    </div>
     ) : (
      <p>Sorry, no planet detected</p>
     )}
    </>
  )
}
