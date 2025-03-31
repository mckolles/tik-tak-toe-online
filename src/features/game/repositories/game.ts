import { prisma } from "@/shared/lib/db";
import { Game, User } from "@prisma/client";


async function gameList(): Promise<GameEntity[]> {
    const games = await prisma.game.findMany({
        include: {
            winner: true,
            players: true,
        },
    });
}

function dbGameToGameEntity(game: Game & {
    players: User[]
}): GameEntity {
   switch (game.status) {
       case "idle":
   }
}
    



export const gameRepository = { gameList }