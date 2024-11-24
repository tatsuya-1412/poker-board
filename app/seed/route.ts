// import { players } from '@/app/lib/placeholder-data';
// import { db } from '@vercel/postgres';

// const client = await db.connect();

// async function seedPlayers() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await client.sql`
//     CREATE TYPE avatar_color_enum AS ENUM (
//       'gray', 'gold', 'bronze', 'brown', 'yellow', 'amber', 'orange', 'tomato',
//       'red', 'ruby', 'crimson', 'pink', 'plum', 'purple', 'violet', 'iris',
//       'indigo', 'blue', 'cyan', 'teal', 'jade', 'green', 'grass', 'lime',
//       'mint', 'sky'
//     );
//   `;
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS users (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       name VARCHAR(255) NOT NULL,
//       is_player BOOLEAN NOT NULL,
//       avatar_initial CHAR(1) NOT NULL,
//       avatar_color avatar_color_enum NOT NULL,
//       bust_out_count INT DEFAULT 0
//     );
//   `;

//   const insertedUsers = await Promise.all(
//     players.map(async (user) => {
//       return client.sql`
//         INSERT INTO users (id, name, is_player, avatar_initial, avatar_color, bust_out_count)
//         VALUES (${user.id}, ${user.name}, ${user.isPlayer}, ${user.avatarInitial}, ${user.avatarColor}, ${user.bustOutCount})
//         ON CONFLICT (id) DO NOTHING;
//       `;
//     }),
//   );

//   return insertedUsers;
// }


export async function GET() {
  return Response.json({
    message:
      'Uncomment this file and remove this line. You can delete this file when you are finished.',
  });
  // try {
  //   await client.sql`BEGIN`;
  //   await seedPlayers();
  //   await client.sql`COMMIT`;

  //   return Response.json({ message: 'Database seeded successfully' });
  // } catch (error) {
  //   await client.sql`ROLLBACK`;
  //   return Response.json({ error }, { status: 500 });
  // }
}
