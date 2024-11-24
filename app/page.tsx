"use client";

import { AvatarColor, Player } from "@/app/lib/definitions";
import Logo from "@/app/ui/logo";
import NonParticipantList from "@/app/ui/non-participant-list";
import ParticipantList from "@/app/ui/participant-list";
import { Button, Link } from "@radix-ui/themes";
import React from "react";


export default function Page() {
  // テスト用
  const c = AvatarColor;
  const [players, setPlayers] = React.useState<Player[]>([
    {
      id: '410544b2-4001-4271-9855-fec4b6a6442a',
      name: 'Tanaka',
      isPlayer: true,
      avatarInitial: 'T',
      avatarColor: c.Blue,
      bustOutCount: 0,
    },
    {
      id: 'f8fd44f3-dd7e-4c6f-bfc8-d88a7437a64d',
      name: 'Suzuki',
      isPlayer: true,
      avatarInitial: 'S',
      avatarColor: c.Green,
      bustOutCount: 0,
    },
    {
      id: '795efddd-0828-47de-9740-ed0e22aae298',
      name: 'Takahashi',
      isPlayer: false,
      avatarInitial: 'T',
      avatarColor: c.Indigo,
      bustOutCount: 0,
    },
    {
      id: '180c306d-c181-4d37-a61d-4929811358c8',
      name: 'Sato',
      isPlayer: false,
      avatarInitial: 'S',
      avatarColor: c.Pink,
      bustOutCount: 0,
    },
    {
      id: 'b7f3b6d9-5a0f-4c1e-8c8d-9f56edff6dbb',
      name: 'Watanabe',
      isPlayer: true,
      avatarInitial: 'W',
      avatarColor: c.Violet,
      bustOutCount: 0,
    },
  ]);

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex mb-8">
        <Logo />
      </div>
      <div className="mb-8">
        <ParticipantList players={players} setPlayers={setPlayers}/>
      </div>
      <div className="mb-8">
        <NonParticipantList players={players} setPlayers={setPlayers}/>
      </div>
      <div>
      <Link
        key="display"
        href="/display"
      >
        <Button color="gray" variant="solid" highContrast size="3" >
        <p className="font-semibold">スタート</p>
        </Button>
       </Link>
      </div>
    </main>
  );
}
