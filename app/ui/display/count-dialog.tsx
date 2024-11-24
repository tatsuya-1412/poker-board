import { updatePlayer } from "@/app/lib/actions";
import { Player } from "@/app/lib/definitions";
import { Button, Dialog, TextField } from "@radix-ui/themes";
import { useState } from "react";

interface BustOutDialogProps {
  player: Player;
  initialValue: number;
  onClose: (newValue: number | null) => void;
}

export default function BustOutDialog({
  player,
  initialValue,
  onClose,
}: BustOutDialogProps) {
  const [inputValue, setInputValue] = useState<number>(
    initialValue
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    setIsLoading(true);
    try {
      const parsedValue = Number(inputValue);
      if (!isNaN(parsedValue)) {
        player.bustOutCount = parsedValue
        await updatePlayer(player);
        onClose(parsedValue);
      }
    } catch (error) {
      console.error("Error updating players:", error);
    }
  };

  return (
    <Dialog.Root open onOpenChange={() => onClose(null)}>
      <Dialog.Content maxWidth="300px">
        <Dialog.Title>{player.name}の飛び回数</Dialog.Title>
        <TextField.Root
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
          type="number"
          placeholder="Enter count"
        />
        <div className="flex justify-end mt-4">
          {isLoading ? (
          <Button loading color="gray" variant="solid" highContrast>
            Save
          </Button>
          ) : (
            <Button onClick={handleSave} color="gray" variant="solid" highContrast>
              Save
            </Button>
          )}
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
}
