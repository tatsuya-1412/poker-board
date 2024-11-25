import { fetchPlayers } from "@/app/lib/actions";
import Logo from "@/app/ui/logo";
import PlayerList from "@/app/ui/player-list";

export default async function Page() {
  console.log("start!")
  const players = await fetchPlayers();
  console.log(players)

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex mb-8">
        <Logo />
      </div>
      <PlayerList initialPlayers={players}/>
    </main>
  );
}
