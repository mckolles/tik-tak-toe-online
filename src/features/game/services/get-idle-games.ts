import { GameIdleEntity } from "../domain";
import { gameRepository } from "../repositories/game";

export async function getidleGames (): Promise<GameIdleEntity[]> {
   const games =  await gameRepository.gameList({
    status: "idle" 
   });

   return games as GameIdleEntity[]
}; 