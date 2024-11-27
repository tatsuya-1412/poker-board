'use server';

import {
    Player
} from '@/app/lib/definitions';
import { sql } from '@vercel/postgres';
import decamelizeKeys from "decamelize-keys";



export async function addPlayer(player: Player): Promise<void> {
    const dbPlayer = decamelizeKeys(player);
    await sql`
        INSERT INTO players (
        id, name, is_player, avatar_initial, avatar_color, bust_out_count
        ) VALUES (
        ${dbPlayer.id},
        ${dbPlayer.name},
        ${dbPlayer.is_player},
        ${dbPlayer.avatar_initial},
        ${dbPlayer.avatar_color},
        ${dbPlayer.bust_out_count}
        );
    `;
}