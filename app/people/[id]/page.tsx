'use client'
import { getHero } from "@/app/api/data";
import { Hero } from "@/app/api/definitions";
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
         <p>hair color</p>
         <p>{hero?.hair_color}</p>
       </div>
       <div>
         <p>height</p>
         <p>{hero?.height}</p>
       </div>
       <HeroPlanet id={hero?.homeworld}/>
       <div>
         <p></p>
         <p></p>
       </div>
       <div>
         <p></p>
         <p></p>
       </div>
     </article>
    ) : (
      <p>there is no data</p>
    )}  
    </div>
  )
}
