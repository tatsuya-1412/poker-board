"use client";

import { Player } from "@/app/lib/definitions";
import NonParticipantList from "@/app/ui/non-participant-list";
import ParticipantList from "@/app/ui/participant-list";
import StartButton from "@/app/ui/start-button";
import { useState } from "react";

interface InitialPlayerListProps {
  initialPlayers: Player[];
}

export default function PlayerList({ initialPlayers }: InitialPlayerListProps ) {
  const [players, setPlayers] = useState<Player[]>(initialPlayers);
  
  return (
    <div className="flex flex-col">
      <div className="mb-8">
        <ParticipantList players={players} setPlayers={setPlayers}/>
      </div>
      <div className="mb-8">
        <NonParticipantList players={players} setPlayers={setPlayers}/>
      </div>
      <StartButton players={players}/>
    </div>
  );
}
