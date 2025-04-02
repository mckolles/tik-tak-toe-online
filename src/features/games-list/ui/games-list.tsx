import { getidleGames } from "@/features/game/services/get-idle-games";

export async function GamesList() {
    const games = await getidleGames();
    return <div>{games.map((game) => {
        return <Card>
            
        </Card>
    })}</div>;
}