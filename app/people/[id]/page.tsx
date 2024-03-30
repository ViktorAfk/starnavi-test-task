'use client'
import { getHero } from "@/app/api/data";
import { Hero, Resourses } from "@/app/api/definitions";
import ListOfValues from "@/app/ui/listofvalues/listofvalues";
import HeroPlanet from "@/app/ui/planet/planet";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

export default function HeroCard() {
  const [hero, setHero] = useState<Hero | null>(null)
  const { id } = useParams();
 
  useEffect(() => {
    const loadHero = async() => {
      const data = await getHero(id.toString());
      setHero(data);
    }
    loadHero();
  }, [id]);

  return (
    <div>
    { hero ? (
       <article>
       <h2>{hero?.name}</h2>
       <div>
         <p>year of birhtday</p>
         <p>{hero?.birth_year}</p>
       </div>
       <div>
        <p>eye color</p>
        <p>{hero.eye_color}</p>
       </div>
       <div>
        <p>gender</p>
        <p>{hero.gender}</p>
       </div>
       <div>
         <p>hair color</p>
         <p>{hero?.hair_color}</p>
       </div>
       <div>
         <p>height</p>
         <p>{hero?.height}</p>
       </div>
       <div>
        <p>mass</p>
        <p>{hero.mass}</p>
       </div>
       <div>
        <p>skin color</p>
        <p>{hero.skin_color}</p>
       </div>

       <div>
        <h3>Home world</h3>
        <HeroPlanet id={hero?.homeworld}/>
       </div>
       <div>
        <h3>species</h3>
        <ListOfValues ids={hero.species} typeOfValue={Resourses.Species}/>
       </div>
       <div>
         <p>mass</p>
         <p>{hero.mass}</p>
       </div>
       <div>
        <h3>starships</h3>
        <ListOfValues ids={hero.starships} typeOfValue={Resourses.Starships}/>
       </div>
       <div>
        <h3>vehicles</h3>
         <ListOfValues ids={hero.vehicles} typeOfValue={Resourses.Vehicles}/>
       </div>
     </article>
    ) : (
      <p>there is no data</p>
    )}  
    </div>
  )
}
