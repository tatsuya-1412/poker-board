import { PlayerListProps } from "@/app/lib/definitions";
import { handleTogglePlayer } from "@/app/lib/handle";
import AddPlayerDialog from "@/app/ui/add-player-dialog";
import { Avatar, IconButton } from "@radix-ui/themes";
import { useState } from "react";
import { BsPeopleFill } from "react-icons/bs";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { MdRemove } from "react-icons/md";

export default function ParticipantList({players, setPlayers}: PlayerListProps) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleList = () => {
    setIsOpen((prevState) => !prevState);
  };
  
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between mb-4">
        <div className="flex flex-row items-center">
          <BsPeopleFill className="h-10 w-10 mr-4"/>
          <p className="text-[20px] font-semibold mr-2">参加者リスト</p>
          <IconButton
            size="3"
            color="gray"
            variant="ghost"
            radius="full"
            onClick={toggleList}
          >
            {isOpen ? (
              <FiChevronUp size={20} />
            ) : (
              <FiChevronDown size={20} />
            )}
          </IconButton>
        </div>
        <AddPlayerDialog setPlayers={setPlayers}/>
      </div>
      {isOpen && (
        <div>
          {players.filter(player => player.isPlayer).map((player) => (
            <div 
              key={player.id}
              className="flex items-center justify-between p-3 border border-gray-300 rounded-md mb-2"
            >
              <div className="flex items-center">
                <Avatar radius="full" variant="solid" size="2" color={player.avatarColor} fallback={player.avatarInitial} className="mr-4"/>
                <p>{player.name}</p>
              </div>
              <IconButton size="3" color="ruby" variant="ghost" radius="full" onClick={() => handleTogglePlayer(player.id, {setPlayers})}>
                <MdRemove size={20} width="22" height="22" />
              </IconButton>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}