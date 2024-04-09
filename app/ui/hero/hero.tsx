'use client'
import { Hero } from "@/app/api/definitions";
import HeroPlanet from "@/app/ui/planet/planet";

export default function HeroCard({ hero }: {
  hero: Hero;
}) {
  
  return (
    <div className="w-100 fp-4">
      <article className="grid gap-2">
        <div>
          <div className="mb-4">
            <h2 className="text-3xl text-decorated inline-block">{hero?.name}</h2>
          </div>

          <div className="flex justify-between mb-1">
          <p className="text-left text-decorated">year of birhtday</p>
          <p className="text-right">{hero?.birth_year}</p>
          </div>

          <div className="flex justify-between mb-1">
            <p className="text-left text-decorated">eye color</p>
            <p>{hero.eye_color}</p>
          </div>

          <div className="flex justify-between mb-1">
            <p className="text-left text-decorated">gender</p>
            <p>{hero.gender}</p>
          </div>

          <div className="flex justify-between mb-1">
            <p className="text-left text-decorated">hair color</p>
            <p>{hero?.hair_color}</p>
          </div>

          <div className="flex justify-between mb-1">
            <p className="text-left text-decorated">height</p>
            <p>{hero?.height}</p>
          </div>

          <div className="flex justify-between mb-1">
            <p className="text-left text-decorated">mass</p>
            <p>{hero.mass}</p>
          </div>

          <div className="flex justify-between mb-1">
            <p className="text-left text-decorated">skin color</p>
            <p>{hero.skin_color}</p>
          </div>

          <div className="flex justify-between mb-1">
            <p className="text-left text-decorated">mass</p>
            <p>{hero.mass}</p>
          </div>
        </div>

        <div>
          <HeroPlanet id={hero.homeworld}/>
        </div>
      </article>
    </div>
  )
}
