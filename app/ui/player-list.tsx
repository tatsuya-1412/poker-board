"use client";

import ParticipantList from "@/app/ui/participant-list";
import { useState } from "react";
import { Player } from "../lib/definitions";
import NonParticipantList from "./non-participant-list";
import StartButton from "./start-button";

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
