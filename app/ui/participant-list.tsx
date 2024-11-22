import { handleTogglePlayer } from "@/app/lib/actions";
import { PlayerListProps } from "@/app/lib/definitions";
import AddPlayerDialog from "@/app/ui/addPlayerDialog";
import { Avatar, IconButton } from "@radix-ui/themes";
import { BsPeopleFill } from "react-icons/bs";
import { MdRemove } from "react-icons/md";

export default function ParticipantList({players, setPlayers}: PlayerListProps) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between mb-4">
        <div className="flex flex-row items-center">
          <BsPeopleFill className="h-12 w-12 mr-4"/>
          <p className="text-[20px] font-semibold">参加者リスト</p>
        </div>
        <AddPlayerDialog players={players} setPlayers={setPlayers}/>
      </div>
      <div>
        {players.filter(player => player.isPlayer).map((player) => (
          <div 
            key={player.id}
            className="flex items-center justify-between p-3 border border-gray-300 rounded-md mb-2"
          >
            <div className="flex items-center">
              <Avatar radius="full" variant="solid" color={player.avatarColor} fallback={player.avatarInitial} className="mr-4"/>
              <p>{player.name}</p>
            </div>
            <IconButton color="indigo" variant="soft" onClick={() => handleTogglePlayer(player.id, {players, setPlayers})}>
              <MdRemove width="18" height="18" />
            </IconButton>
          </div>
        ))}
      </div>
    </div>
  )
}