
export type GameEntity = GameIdleEntity | GameInProgressEntity | GameOverEntity | GameOverDrawEntity;
export type PlayerEntity = {
    id: string;
    login: string;
    rating: number;
}
export type GameIdleEntity ={
    id: string;
    players:PlayerEntity[];
    status:'idle';
}
export type GameInProgressEntity = {
    id: string;
    players: PlayerEntity[];
    field: Field;
    status: 'inProgress';
}

export type GameOverEntity = {
    id: string;
    players: PlayerEntity[];
    field: Field;
    winner: PlayerEntity;
    status: 'gameOver';
}
export type GameOverDrawEntity = {
    id: string;
    players: PlayerEntity[];
    field: Field;
    status: 'gameOverDraw';
}

export type Field = Cell[]
export type Cell = GameSymbol | null
export type GameSymbol = string