// import { matchId } from "@/app/api/utils";
import Link from "next/link";
import { ResponseHeroesData } from "@/app/api/definitions";
import Pagination from "./pagination";

export default function HeroesTable ({ data }: {
  data: ResponseHeroesData
}) {
  const {previous, next, results:heroes} = data;

  return (
    <section className="bg-[#101010] p-4 w-96 rounded-xl">
      <ul className="flex flex-col h-96 mb-8">
        {heroes.map(hero => {
        const { id, name} = hero;

        return (
        <li className="leading-10 uppercase hover:bg-bg-color hover:text-decorated hover:rounded-xl pl-2" key={ id }>
          <Link data-cy='target-value' href={`people/${id}`}>
            { name }
          </Link>
        </li>
        )})}
      </ul>

      <Pagination nextPage={next} previousPage={previous}/>
    </section>
    
  )
}
