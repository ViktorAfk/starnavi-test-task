'use client'
import { addPeopleToList } from "@/app/api/data";
import { Hero } from "@/app/api/definitions";
import { useEffect, useState } from "react";

export default function ListOfPeople({ ids }: {
  ids: number[]
}) {
  const [people, setPeople] = useState<Hero[]>([]);

  useEffect(() => {
    const loadPeople = async() => {
      const results = await addPeopleToList(ids);
      setPeople(results);
    }

    loadPeople();
  }, [ids]);

  return (
      (<ul>
      { people ? people.map(person => {
        return (
          <li key={person.url}>
            {person.name}
          </li>
        )
      }) : (
        <p>no body</p>
      )}
    </ul>)
  )
}
