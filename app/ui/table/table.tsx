import { matchId } from "@/app/utilies";
import Link from "next/link";
import { Hero } from "@/app/api/definitions";
import Pagination from "./pagination";

export default function HeroesTable ({ heroes, nextPage, previousPage }: {
  heroes: Hero[];
  nextPage: string | null;
  previousPage: string | null;
}) {

  return (
    <section className="bg-[#101010] p-4 w-96 rounded-xl">
      <ul className="flex flex-col h-96 mb-8">
        {heroes.map(hero => {
        const { url, name} = hero;
        const heroId = matchId(url) || '1';

        return (
        <li className="leading-10 uppercase hover:bg-bg-color hover:text-decorated hover:rounded-xl pl-2" key={ url }>
          <Link href={`people/${heroId}`}>
            { name }
          </Link>
        </li>
        )})}
      </ul>
      
      <Pagination nextPage={nextPage} previousPage={previousPage}/>
    </section>
    
  )
}