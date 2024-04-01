
import HeroesTable from "./ui/table/table";

export default async function Home() {
  return (
    <main className="container py">
      <div className="flex flex-col items-center w-full py-8">
        <h1 className="text-5xl tracking-0.1 uppercase mb-8">World of <span className="text-bold">StarWars</span> </h1>
        <HeroesTable />
      </div>
     
    </main>
  );
}
