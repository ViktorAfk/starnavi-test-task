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
      .then(data => setValues(data))
      .catch(err => console.log(err));
    
    
  }, [ids, typeOfValue]);
 console.log(values)
  return (
      <div>
        {values 
        ? (
          <ul>
        {values.map(value => {
          const {url, name} = value;
          const preaperedId = matchId(url);
          
        return (
          <li className="text-right" key={ url }>
          <Link  href={`${preaperedId}`}>
            { name }
          </Link>
          </li>
        )
        })}
      </ul>
        ) : (
        'no information'
        )}
      </div>
      
  )
}
