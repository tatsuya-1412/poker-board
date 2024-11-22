import { handleAddPlayer } from "@/app/lib/actions";
import { PlayerListProps } from "@/app/lib/definitions";
import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import React from "react";
import { MdPersonAdd } from "react-icons/md";

export default function AddPlayerDialog({players, setPlayers}: PlayerListProps) {
  const [playerName, setPlayerName] = React.useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
  };

  const handleSave = () => {
    if (playerName.trim()) {
      handleAddPlayer(playerName, {players, setPlayers})
      setPlayerName("");
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
        <Button>
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
              onChange={handleNameChange}
              placeholder="Enter your name"
            />
          </label>
          {/* <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Email
            </Text>
            <TextField.Root
              defaultValue="freja@example.com"
              placeholder="Enter your email"
            />
          </label> */}
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray" onClick={handleDialogClose}>
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button onClick={handleSave}>
              Save
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  )
}
