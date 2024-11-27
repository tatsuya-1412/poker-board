"use client";

import Loading from "@/app/display/loading";
import { Player, PokerTableProps } from "@/app/lib/definitions";
import BustOutDialog from "@/app/ui/display/count-dialog";
import { Avatar } from "@radix-ui/themes";
import { useEffect, useRef, useState } from "react";
import CountResetButton from "./count-reset-button";


export default function PokerTable({ players: initialPlayers }: PokerTableProps) {
  const [players, setPlayers] = useState<Player[]>(initialPlayers);

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [activePlayerIndex, setActivePlayerIndex] = useState<number | null>(null);

  useEffect(() => {
    const updateContainerWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateContainerWidth();

    window.addEventListener("resize", updateContainerWidth);
    return () => window.removeEventListener("resize", updateContainerWidth);
  }, []);

  if (containerWidth === 0) {
    return <div ref={containerRef} className="w-full h-[400px] mx-auto">
      <Loading />
    </div>;
  }

  const centerX = containerWidth / 2;
  const centerY = 220;
  const radiusX = 0.4 * containerWidth;
  const radiusY = 180;

  const numSeats = players.length

  const avatars = Array.from({ length: numSeats }, (_, i) => {
    const angle = (2 * Math.PI * i) / numSeats - Math.PI / 2;
    const x = centerX + radiusX * Math.cos(angle);
    const y = centerY + radiusY * Math.sin(angle);

    return (
      <div
        key={i}
        className="absolute flex flex-col items-center"
        style={{
          left: `${x}px`,
          top: `${y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="relative" onClick={() => setActivePlayerIndex(i)}>
          <Avatar radius="full" variant="solid" size="4" color={players[i].avatarColor} fallback={players[i].avatarInitial} className=""/>
          {players[i].bustOutCount > 0 && (
            <div
              className="absolute flex items-center justify-center rounded-full text-white font-bold text-xs"
              style={{
                top: "-10px",
                left: "-10px",
                width: "24px",
                height: "24px",
                backgroundColor: "red",
              }}
            >
              {players[i].bustOutCount}
            </div>
          )}
          {i === 0 && (
            <div
              className="absolute flex items-center justify-center rounded-full border-2 text-white font-bold text-xs"
              style={{
                top: "-10px",
                right: "-10px",
                width: "28px",
                height: "28px",
                backgroundColor: "black",
                borderColor: "green",
              }}
            >
              BTN
            </div>
          )}
        </div>
    
        <div
          className="mt-1 px-3 py-1 rounded-full bg-black text-white text-center text-sm font-semibold"
        >
          {players[i].name}
        </div>
      </div>
    );    
  });

  return (
    <>
      <div
        ref={containerRef}
        className="relative w-full h-[450px] mx-auto"
      >
        <svg
          className="absolute left-0 top-0"
          width={containerWidth}
          height={400}
          xmlns="http://www.w3.org/2000/svg"
          >
          <ellipse
            cx={centerX}
            cy={centerY-10}
            rx={radiusX}
            ry={radiusY}
            fill="none"
            stroke="rgba(0, 0, 0, 1)"
            strokeWidth="3"
          />
        </svg>
        {avatars}
      </div>
      {activePlayerIndex !== null && (
        <BustOutDialog
          player={players[activePlayerIndex]}
          initialValue={players[activePlayerIndex].bustOutCount}
          onClose={() => {
            setActivePlayerIndex(null);
          }}
        />
      )}
      <div className="flex justify-center items-center">
        <CountResetButton players={players} setPlayers={setPlayers}/>
      </div>
    </>
  );
}
