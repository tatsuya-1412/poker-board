import { updatePlayers } from "@/app/lib/actions";
import { Player } from "@/app/lib/definitions";
import { Button } from "@radix-ui/themes";
import { useState } from "react";
import { GrPowerReset } from "react-icons/gr";

interface CountResetButtonProps {
  players: Player[];
  setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
}

export default function CountResetButton({ players, setPlayers }: CountResetButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleReset = async () => {
    setIsLoading(true);
    try {
      const updatedPlayers = players.map(player => ({
        ...player,
        bustOutCount: 0,
      }));      
      await updatePlayers(updatedPlayers);
      setPlayers(updatedPlayers);
      console.log("Players updated successfully.");
    } catch (error) {
      console.error("Error updating players:", error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div>
      {isLoading ? (
        <Button loading color="gray" variant="soft" highContrast size="3">
          スタート
        </Button>
      ) : (
        <Button color="gray" variant="soft" highContrast className="items-center" onClick={handleReset}>
          <GrPowerReset className="text-lg"/>
          <span className="hidden sm:inline-block">飛び回数</span>
        </Button>
      )}
    </div>
  );
}