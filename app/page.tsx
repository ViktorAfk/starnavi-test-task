
import HeroesTable from "./ui/table/table";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1>Home page</h1>
     <HeroesTable />
    </main>
  );
}
