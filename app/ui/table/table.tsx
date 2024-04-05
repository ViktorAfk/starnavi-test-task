import { getAllHeroes } from "@/app/api/data";
import { matchId } from "@/app/utilies";
import Link from "next/link";

export default async function HeroesTable () {
  const { results } = await getAllHeroes();
  
  return (
    <ul className="flex flex-col  w-96 rounded-xl bg-[#101010] p-4 br-2">
      {results.map(hero => {
        const { url, name} = hero;
        const preaperedId = matchId(url) || '1';

        return (
        <li className="leading-10 uppercase hover:bg-bg-color hover:text-decorated" key={ url }>
          <Link href={`people/${preaperedId}`}>
            { name }
          </Link>
        </li>
      )})}
    </ul>
  )
}