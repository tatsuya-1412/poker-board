"use client";

import { AvatarColor, Player } from "@/app/lib/definitions";
import Logo from "@/app/ui/logo";
import PokerTable from "@/app/ui/poker-table";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function Page() {
  const c = AvatarColor;
  const players: Player[] = [
    {
      id: '410544b2-4001-4271-9855-fec4b6a6442a',
      name: 'Tanaka',
      isPlayer: true,
      avatarInitial: 'T',
      avatarColor: c.Blue
    },
    {
      id: 'f8fd44f3-dd7e-4c6f-bfc8-d88a7437a64d',
      name: 'Suzuki',
      isPlayer: true,
      avatarInitial: 'S',
      avatarColor: c.Green
    },
    {
      id: '795efddd-0828-47de-9740-ed0e22aae298',
      name: 'Takahashi',
      isPlayer: false,
      avatarInitial: 'T',
      avatarColor: c.Indigo
    },
    {
      id: '180c306d-c181-4d37-a61d-4929811358c8',
      name: 'Sato',
      isPlayer: false,
      avatarInitial: 'S',
      avatarColor: c.Pink
    },
    {
      id: 'b7f3b6d9-5a0f-4c1e-8c8d-9f56edff6dbb',
      name: 'Watanabe',
      isPlayer: true,
      avatarInitial: 'W',
      avatarColor: c.Violet
    },
  ];


  return (
    <main className="flex min-h-screen flex-col p-6 overflow-x-hidden">
      <header className="flex items-center justify-between mb-8">
        <Logo />
        <Link href="/">
          <Button color="gray" variant="soft" highContrast className="flex items-center">
            <FaHome className="text-lg" />
            Home
          </Button>
        </Link>
      </header>
      <section className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 inline-block">
          座席
        </h1>
      </section>
      <section className="flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
          <PokerTable players={players} />
        </div>
      </section>
    </main>
  );
}
