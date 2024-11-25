'use server';

import { Player } from "@/app/lib/definitions";
import { sql } from "@vercel/postgres";
import camelcaseKeys from "camelcase-keys";

export async function fetchPlayers() {
    try {
        console.log("fetch");
        const data = await sql<Player>`SELECT * FROM players;`;
        console.log(data);
        return camelcaseKeys(data.rows);
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch the players.');
    }
}

export async function fetchParticipants() {
    try {
        const data = await sql<Player>`
        SELECT * FROM players
        WHERE is_player = TRUE
        ORDER BY random();
        `;
        return camelcaseKeys(data.rows);
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch the players.');
    }
}

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
        console.log("update");
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
        console.log("update fin");
    } catch (error) {
        console.error("Error updating players:", error);
        throw new Error("Failed to update player information.");
    }
}

export async function updatePlayer(player: Player) {
    try {
        await sql`
            UPDATE players
            SET 
            is_player = ${player.isPlayer},
            avatar_initial = ${player.avatarInitial},
            avatar_color = ${player.avatarColor},
            bust_out_count = ${player.bustOutCount}
            WHERE id = ${player.id};
        `;
    } catch (error) {
        console.error("Error updating player:", error);
        throw new Error("Failed to update player information.");
    }
}