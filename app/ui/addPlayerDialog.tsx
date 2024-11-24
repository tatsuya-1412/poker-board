import { createPlayer } from "@/app/lib/actions";
import { AvatarColor, Player, PlayerListProps } from "@/app/lib/definitions";
import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import React from "react";
import { MdPersonAdd } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';

export default function AddPlayerDialog({ setPlayers }: Omit<PlayerListProps, 'players'>) {
  const [playerName, setPlayerName] = React.useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
  };

  const getRandomColor = (): AvatarColor => {
    const colors = Object.values(AvatarColor);
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex] as AvatarColor;
  };

  const handleSave = async () => {
    if (playerName.trim()) {
        const newPlayer: Player = {
          id: uuidv4(),
          name: playerName,
          isPlayer: true,
          avatarInitial: playerName.charAt(0),
          avatarColor: getRandomColor(),
          bustOutCount: 0
      };
      setPlayers((prevPlayers) => [...prevPlayers, newPlayer]);
      setPlayerName("");
      try {
        await createPlayer(newPlayer);
        console.log("Players updated successfully.");
      } catch (error) {
        console.error("Error updating players:", error);
      }
    } else {
      alert("名前を入力してください");
    }
  };

  const handleDialogClose = () => {
    setPlayerName("");
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button color="gray" variant="solid" highContrast>
          <MdPersonAdd />追加
        </Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="300px">
        <Dialog.Title>プレイヤーの追加</Dialog.Title>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              名前
            </Text>
            <TextField.Root
              value={playerName}
              color="gray"
              onChange={handleNameChange}
              placeholder="Enter your name"
            />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray" onClick={handleDialogClose}>
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button color="gray" variant="solid" highContrast onClick={handleSave}>
              Save
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
