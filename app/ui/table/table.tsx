import { getAllHeroes } from "@/app/api/data";
import Link from "next/link";

export default async function HeroesTable () {
  const { results } = await getAllHeroes();
  
  return (
    <ul>
      {results.map(hero => {
        const { url, name} = hero;
        const preaperedUrl = url.split('https://sw-api.starnavi.io/');

        return (
        <li key={ url }>
          <Link href={preaperedUrl[1]}>
            { name }
          </Link>
        </li>
      )})}
    </ul>
  )
}