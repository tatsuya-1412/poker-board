'use server';

import { Player } from "@/app/lib/definitions";
import { sql } from "@vercel/postgres";

export async function createPlayer(player: Player) {
    try {
        await sql`
            INSERT INTO players (id, name, is_player, avatar_initial, avatar_color, bust_out_count)
            VALUES (${player.id}, ${player.name}, ${player.isPlayer}, ${player.avatarInitial}, ${player.avatarColor}, ${player.bustOutCount})
            ON CONFLICT (id) DO NOTHING;
        `;
    } catch (error) {
        console.error("Error updating players:", error);
        throw new Error("Failed to update player information.");
    }
}

export async function updatePlayers(players: Player[]) {
    try {
        for (const player of players) {
            const { id, isPlayer, avatarInitial, avatarColor, bustOutCount } = player;
    
            await sql`
                UPDATE players
                SET 
                is_player = ${isPlayer},
                avatar_initial = ${avatarInitial},
                avatar_color = ${avatarColor},
                bust_out_count = ${bustOutCount}
                WHERE id = ${id};
            `;
        }
    } catch (error) {
        console.error("Error updating players:", error);
        throw new Error("Failed to update player information.");
    }
}
