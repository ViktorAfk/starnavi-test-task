'use client'
import { universalRequest } from "@/app/api/data";
import { typeOfResourses, unionResourse } from "@/app/api/definitions";
import { matchId } from "@/app/utilies";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ListOfValues({ ids, typeOfValue }: {
  ids: number[]
  typeOfValue: typeOfResourses;
}) {
  const [values, setValues] = useState<unionResourse | null>(null);

  useEffect(() => {

    universalRequest(typeOfValue, ids)
    .then(data => setValues(data));
    
    
  }, [ids, typeOfValue]);

 
  return (
      <div>
        {values 
        ? (
          <ul>
        {values.map(value => {
          const {url, name} = value;
          const preaperedId = matchId(url)
        return (
          <li key={ url }>
          <Link href={`${typeOfValue}/${preaperedId}`}>
            { name }
          </Link>
          </li>
        )
        })}
      </ul>
        ) : (
        'There are no values'
        )}
      </div>
      
  )
}
