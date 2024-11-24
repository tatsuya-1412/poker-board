import { Button, Link } from "@radix-ui/themes";
import { updatePlayers } from "../lib/actions";
import { Player } from "../lib/definitions";

interface StartButtonProps {
  players: Player[];
}

export default function StartButton({players}: StartButtonProps) {
  const handleSubmit = async () => {
    try {
      await updatePlayers(players);
      console.log("Players updated successfully.");
    } catch (error) {
      console.error("Error updating players:", error);
    }
  };

  return (
    <div>
      <Link
        key="display"
        href="/display"
      >
        <Button color="gray" variant="solid" highContrast size="3" onClick={handleSubmit}>
        <p className="font-semibold">スタート</p>
        </Button>
      </Link>
    </div>
  );
}