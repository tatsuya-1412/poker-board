import { updatePlayers } from "@/app/lib/actions";
import { Player } from "@/app/lib/definitions";
import { Button } from "@radix-ui/themes";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

interface StartButtonProps {
  players: Player[];
}

export default function StartButton({players}: StartButtonProps) {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await updatePlayers(players);
      console.log("Players updated successfully.");
      if (isMounted) {
        router.push('/display');
      }
    } catch (error) {
      console.error("Error updating players:", error);
    }
  };
  
  return (
    <div>
      {isLoading ? (
        <Button loading color="gray" variant="solid" highContrast size="3">
          スタート
        </Button>
      ) : (
        <Button color="gray" variant="solid" highContrast size="3" onClick={handleSubmit}>
        <p className="font-semibold">スタート</p>
        </Button>
      )}
    </div>
  );
}