import { Starship } from "@/app/api/definitions";

export default function HeroStarship({ starship }: {
  starship: Starship
}) {

  return (
    <div>
      <h4>{starship.name}</h4>
      
      <div>
        <p></p>
        <p></p>
      </div>

      <div>
        <p></p>
        <p></p>
      </div>

      <div>
        <p></p>
        <p></p>
      </div>
    </div>
  )
}