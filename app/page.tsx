import { fetchPlayers } from "@/app/lib/actions";
import Logo from "@/app/ui/logo";
import PlayerList from "@/app/ui/player-list";
import { unstable_noStore } from 'next/cache';

export default async function Page() {
  unstable_noStore();
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
