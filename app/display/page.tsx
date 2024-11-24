import { fetchParticipants } from "@/app/lib/data";
import PokerTable from "@/app/ui/display/poker-table";
import Logo from "@/app/ui/logo";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { NextResponse } from 'next/server';
import { FaHome } from "react-icons/fa";

export default async function Page() {
  const players = await fetchParticipants();
  const response = NextResponse.json(players);
  response.headers.set('Cache-Control', 'no-store');

  return (
    <main className="flex min-h-screen flex-col p-6 overflow-x-hidden">
      <header className="flex items-center justify-between mb-8">
        <Logo />
        <Link href="/">
          <Button color="gray" variant="soft" highContrast className="flex items-center">
            <FaHome className="text-lg"/>
            <span className="hidden sm:inline-block">Home</span>
          </Button>
        </Link>
      </header>
      <section className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 inline-block">
          座席
        </h1>
      </section>
      <section className="flex justify-center items-center mb-8">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
          <PokerTable players={players}/>
        </div>
      </section>
    </main>
  );
}
