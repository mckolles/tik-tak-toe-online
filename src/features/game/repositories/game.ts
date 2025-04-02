import { prisma } from "@/shared/lib/db";
import { Game, Prisma, User } from "@prisma/client";
import { GameEntity, GameIdleEntity, GameOverEntity} from "../domain";
import { z } from "zod";


async function gameList(where?: Prisma.GameWhereInput): Promise<GameEntity[]> {
    const games = await prisma.game.findMany({
        where,
        include: {
            winner: true,
            players: true,
        },
    });

    return games.map(dbGameToGameEntity)
}

const fieldSchema = z.array(z.union([z.string(), z.null()]))

function dbGameToGameEntity(game: Game & {
    players: User[]
    winner?: User | null
}): GameEntity {
   switch (game.status) {
       case "idle":{
        return {
            id: game.id,
            players: game.players,
            status: "idle",
        } satisfies GameIdleEntity;
       }
       case "inProgress":
       case "gameOverDraw":{
        return { 
            id: game.id,
            players: game.players,
            field: fieldSchema.parse(game.field),
            status: game.status,
        } 
       }
       case "gameOver":{
        if(!game.winner){
            throw new Error("Winner should be in gameover")
        }
        return {
            id: game.id,
            players: game.players,
            status: game.status,
            field: fieldSchema.parse(game.field),
            winner: game.winner,
        } satisfies GameOverEntity;
       } 
   }
}
    



export const gameRepository = { gameList }