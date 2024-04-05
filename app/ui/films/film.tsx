import { Film } from "@/app/api/definitions";

export default function Film ({ film }: {
  film: Film
}) {
  return (
    <div>

        <article>
          <h3>{film.title}</h3>
        </article>
    </div>
  )
}