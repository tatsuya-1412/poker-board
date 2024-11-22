export type Player = {
    id: string;
    name: string;
    isPlayer: boolean;
    avatarInitial: string;
    avatarColor: AvatarColor;
}

export interface PlayerListProps {
    players: Player[];
    setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
}
  
export enum AvatarColor {
    Gray = "gray",
    Gold = "gold",
    Bronze = "bronze",
    Brown = "brown",
    Yellow = "yellow",
    Amber = "amber",
    Orange = "orange",
    Tomato = "tomato",
    Red = "red",
    Ruby = "ruby",
    Crimson = "crimson",
    Pink = "pink",
    Plum = "plum",
    Purple = "purple",
    Violet = "violet",
    Iris = "iris",
    Indigo = "indigo",
    Blue = "blue",
    Cyan = "cyan",
    Teal = "teal",
    Jade = "jade",
    Green = "green",
    Grass = "grass",
    Lime = "lime",
    Mint = "mint",
    Sky = "sky"
}