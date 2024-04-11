import type { Film } from "@/app/api/definitions";

export default function Film ({ film }: {
  film: Film
}) {
  
  const {
    title,
    episode_id,
    opening_crawl,
    director,
    producer,
    release_date,
  }= film;

  return (
    <div>
        <article>
          <h3 className="text-2xl text-decorated mb-4">{ title }</h3>

          <div className="flex justify-between mb-1">
            <p className="text-left text-decorated">episode id</p>
            <p className="text-right">{ episode_id }</p>
          </div>

          <div className="mb-1">
            <p className="text-left text-decorated">opening crawl:</p>
            <p className="text-justify italic tracking-wide">{ opening_crawl }</p>
          </div>

          <div className="flex justify-between mb-1">
            <p className="text-left text-decorated">director</p>
            <p className="text-right">{ director }</p>
          </div>

          <div className="flex justify-between mb-1">
            <p className="text-left text-decorated">producer</p>
            <p className="text-right">{ producer }</p>
          </div>

          <div className="flex justify-between">
            <p className="text-left text-decorated">release date</p>
            <p className="text-right">{ release_date }</p>
          </div>
        </article>
    </div>
  )
}
