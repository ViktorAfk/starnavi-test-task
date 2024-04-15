'use client'
import { getResources } from "@/app/api/data";
import { Hero, Resourses } from "@/app/api/definitions";
import { matchId } from "@/app/api/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Residents({ ids }: {
  ids: number[]
}) {
  const [residents, setResidents] = useState<Hero[] | null>(null);
  
  useEffect(() => {

    const getResidents = async() => {
      try {
        const data = await getResources<Hero>(Resourses.People, ids);
        setResidents(data);

      } catch(error) {
        console.error('Get data error:', error);
        throw new Error(`Failed to fetch ${Resourses.People} data.`)
      }
    }
    getResidents();
  }, [ids]);

  return (
      <div>
        {residents 
        ? (
          <ul className="text-right">
        {residents.map(resident => {
          const {id, name} = resident;
          const lastResidentName = residents[residents?.length - 1]
        return (
          <li className="inline-block ml-2" key={ id }>
          <Link className="hover:text-decorated" data-cy='target-element'  href={`${id}`}>
            { lastResidentName.name === name ? name : `${name},` }
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
