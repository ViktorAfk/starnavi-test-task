'use client'
import getDetailInformation from "@/app/api/data";
import { Film, Hero, Resourses } from "@/app/api/definitions";
import Films from "@/app/ui/films/film";
import ListOfValues from "@/app/ui/listofvalues/listofvalues";
import HeroPlanet from "@/app/ui/planet/planet";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

export default function HeroCard({ hero }: {
  hero: Hero;
}) {
  
  return (
    <div className="w-100 fp-4">
      <article className="grid gap-2">
      <div>
        <h2 className="text-3xl text-decorated mb-4">{hero?.name}</h2>

        <div className="flex justify-between">
         <p className="text-left">year of birhtday</p>
         <p className="text-right">{hero?.birth_year}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-left">eye color</p>
          <p>{hero.eye_color}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-left">gender</p>
          <p>{hero.gender}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-left">hair color</p>
          <p>{hero?.hair_color}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-left">height</p>
          <p>{hero?.height}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-left">mass</p>
          <p>{hero.mass}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-left">skin color</p>
          <p>{hero.skin_color}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-left">mass</p>
          <p>{hero.mass}</p>
        </div>
      </div>
        
      <div>
        
      </div>
      <div>
        <div>
          <HeroPlanet id={hero.homeworld}/>
        </div>
      </div>
      
      </article>

    </div>
  )
}


{/* <div className="flex justify-between">
          <p>species</p>
          <ListOfValues ids={hero.species} typeOfValue={Resourses.Species}/>
        </div>

        {hero.starships.length > 0 && 
          (
            <div>
              <h3>starships</h3>
              <ListOfValues ids={hero.starships} typeOfValue={Resourses.Starships}/>
            </div>
          )
        }
       
        {hero.vehicles.length > 0 && 
          (
            <div>
              <h3>vehicles</h3>
              <ListOfValues ids={hero.vehicles} typeOfValue={Resourses.Vehicles}/>
            </div>
          )
        } */}