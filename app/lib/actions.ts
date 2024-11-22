import { AvatarColor, Player, PlayerListProps } from "@/app/lib/definitions";
import { v4 as uuidv4 } from 'uuid';

export const handleTogglePlayer = (id: string, { players, setPlayers }: PlayerListProps) => {
    setPlayers((prevPlayers) =>
        prevPlayers.map((player) =>
            player.id === id ? { ...player, isPlayer: !player.isPlayer } : player
        )
    );
};

const getRandomColor = (): AvatarColor => {
    const colors = Object.values(AvatarColor);
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex] as AvatarColor;
};

export const handleAddPlayer = (name: string, { players, setPlayers }: PlayerListProps) => {
    if (name) {
        const newPlayer: Player = {
            id: uuidv4(),
            name: name,
            isPlayer: true,
            avatarInitial: name.charAt(0),
            avatarColor: getRandomColor(),
        };
        setPlayers((prevPlayers) => [...prevPlayers, newPlayer]);
    }
};
