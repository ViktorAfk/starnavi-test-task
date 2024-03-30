'use client';

import { getStarShip } from "@/app/api/data";
import { Starship } from "@/app/api/definitions";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Starship() {
 const [starship, setStarShip] = useState<Starship | null>(null);
 const { id } = useParams();
 
 useEffect(() => {
  getStarShip(id.toString())
    .then(data => setStarShip(data));
 }, [id])
 
  return (
    <article>
      <h2>{starship?.name}</h2>
    </article>

  );
}