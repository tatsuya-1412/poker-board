import { fetchPlayers } from "@/app/lib/data";
import Logo from "@/app/ui/logo";
import PlayerList from "@/app/ui/player-list";


export default async function Page() {
  const players = await fetchPlayers();

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex mb-8">
        <Logo />
      </div>
      <PlayerList initialPlayers={players}/>
    </main>
  );
}
