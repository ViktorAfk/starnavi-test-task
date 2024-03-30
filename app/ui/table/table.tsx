import { getAllHeroes } from "@/app/api/data";
import { matchId } from "@/app/utilies";
import Link from "next/link";

export default async function HeroesTable () {
  const { results } = await getAllHeroes();
  
  return (
    <ul>
      {results.map(hero => {
        const { url, name} = hero;
        const preaperedId = matchId(url) || '1';

        return (
        <li key={ url }>
          <Link href={`people/${preaperedId}`}>
            { name }
          </Link>
        </li>
      )})}
    </ul>
  )
}