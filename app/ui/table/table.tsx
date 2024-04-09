'use client'
import { getAllHeroes } from "@/app/api/data";
import { getSearchWith, matchId } from "@/app/utilies";
import Link from "next/link";
import { PageLink } from "../link";
import { useEffect, useState } from "react";
import { ResponseHeroesData } from "@/app/api/definitions";
import { useSearchParams } from "next/navigation";

export default function HeroesTable () {
  const [data, setData] = useState<ResponseHeroesData | null>(null);
  const [] = useSearchParams();
  
  // const setSearchPage = (param: number | string) => {
  //   const searchPage = param.toString();

  //   return {
  //     search: getSearchWith(searchParams,
  //       { page: searchPage }),
  //   };
  // };
  
  useEffect(() => {
    const getPeopleForRender = async() => {
      const response = await getAllHeroes();
      setData(response);
    }
    getPeopleForRender();
  }, [])
  return (
    <section>
      <ul className="flex flex-col  w-96 rounded-xl bg-[#101010] p-4 br-2">
        {data?.results.map(hero => {
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
      <div className="flex justify-center">
        <PageLink text="Previous" pageNumber={""}/>
        <PageLink text="Next" pageNumber=""/>
      </div>
    </section>
    
  )
}