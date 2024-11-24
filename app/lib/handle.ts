import { PlayerListProps } from "@/app/lib/definitions";

export const handleTogglePlayer = (id: string, { setPlayers }: Omit<PlayerListProps, 'players'>) => {
    setPlayers((prevPlayers) =>
        prevPlayers.map((player) =>
            player.id === id ? { ...player, isPlayer: !player.isPlayer } : player
        )
    );
};