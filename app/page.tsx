import { fetchPlayers } from "@/app/lib/data";
import Logo from "@/app/ui/logo";
import PlayerList from "@/app/ui/player-list";
import { NextResponse } from 'next/server';

export default async function Page() {
  const players = await fetchPlayers();
  const response = NextResponse.json(players);
  response.headers.set('Cache-Control', 'no-store');

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex mb-8">
        <Logo />
      </div>
      <PlayerList initialPlayers={players}/>
    </main>
  );
}
