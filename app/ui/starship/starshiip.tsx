import { Starship } from "@/app/api/definitions";

export default function HeroStarship({ starship }: {
  starship: Starship
}) {

  const {
    name,
    model,
    starship_class,
    manufacturer,
    cost_in_credits,
    length,
    crew,
    passengers,
    max_atmosphering_speed,
    hyperdrive_rating,
    MGLT,
    cargo_capacity,
    consumables,
  } = starship;

  return (
    <div>
      <h4 className="text-2xl text-decorated mb-4">{ name }</h4>
      
      <div className="flex justify-between mb-1">
        <p className="text-left text-decorated">model</p>
        <p>{ model }</p>
      </div>

      <div className="flex justify-between mb-1">
        <p className="text-left text-decorated">starship class</p>
        <p className="text-right">{ starship_class }</p>
      </div>

      <div className="flex justify-between mb-1">
        <p className="text-left text-decorated">manufacturer</p>
        <p className="text-right">{ manufacturer }</p>
      </div>

      <div className="flex justify-between mb-1">
        <p className="text-left text-decorated">cost in credits</p>
        <p className="text-right">{ cost_in_credits }</p>
      </div>

      <div className="flex justify-between mb-1">
        <p className="text-left text-decorated">length</p>
        <p className="text-right">{ length }</p>
      </div>

      <div className="flex justify-between mb-1">
        <p className="text-left text-decorated">crew</p>
        <p className="text-right">{ crew }</p>
      </div>

      <div className="flex justify-between mb-1">
        <p className="text-left text-decorated">passengers</p>
        <p className="text-right">{ passengers }</p>
      </div>

      <div className="flex justify-between mb-1">
        <p className="text-left text-decorated">max atmosphering speed</p>
        <p className="text-right">{ max_atmosphering_speed }</p>
      </div>

      <div className="flex justify-between mb-1">
        <p className="text-left text-decorated">hyperdrive rating</p>
        <p className="text-right">{ hyperdrive_rating }</p>
      </div>

      <div className="flex justify-between mb-1">
        <p className="text-left text-decorated">MGLT</p>
        <p className="text-right">{ MGLT }</p>
      </div>

      <div className="flex justify-between mb-1">
        <p className="text-left text-decorated">cargo capacity</p>
        <p className="text-right">{ cargo_capacity }</p>
      </div>

      <div className="flex justify-between mb-1">
        <p className="text-left text-decorated">consumables</p>
        <p className="text-right">{ consumables }</p>
      </div>
    </div>
  )
}