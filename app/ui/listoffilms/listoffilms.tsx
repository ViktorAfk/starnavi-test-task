'use client'

import { getFilms } from "@/app/api/data";
import { Film } from "@/app/api/definitions";
import { matchId } from "@/app/utilies";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ListOfFilm({ ids }: {
  ids: number[];
}) {
  const [films, setFilms] = useState<Film[] | null>(null)
  useEffect(() => {
    getFilms(ids)
      .then(data => setFilms(data));
  }, [ids]);
  
  return (
    <div>
        {films 
        ? (
          <ul>
        {films.map(film => {
          const {title, url} = film;
          const preaperedId = matchId(url);
    
          return (
            <li key={ url }>
              <Link href={`films/${preaperedId}`}>
                { title }
              </Link>
            </li>)
        })}
        </ul>
        ) : (
        <p>There are no values</p>
        )}
      </div>
      
  );
}