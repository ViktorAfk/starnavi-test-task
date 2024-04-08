import { Film, Resourses } from "@/app/api/definitions";

import ListOfValues from "../listofvalues/listofvalues";

export default function Film ({ film }: {
  film: Film
}) {
  const {
    title,
    episode_id,
    edited,
    opening_crawl,
    director,
    producer,
    release_date,
    species,
    starships,
    vehicles,
    characters,
    planets,
  }= film;
console.log(species);

  return (
    <div>
        <article>
          <h3>{ title }</h3>
          <div>
            <p>episode id</p>
            <p>{ episode_id }</p>
          </div>

          <div>
            <p>opening crawl</p>
            <p>{ opening_crawl }</p>
          </div>
          <div>
            <p>director</p>
            <p>{ director }</p>
          </div>

          <div>
            <p>producer</p>
            <p>{ producer }</p>
          </div>

          <div>
            <p>release date</p>
            <p>{ release_date }</p>
          </div>

          <div>
            <p>species:</p>
            <ListOfValues typeOfValue={ Resourses.Species } ids={ species }/>
          </div>
          <div>
            <p></p>
            <p></p>
          </div>
        </article>
    </div>
  )
}