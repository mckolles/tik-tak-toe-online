
export type GameEntity = GameIdleEntity | GameInProgressEntity | GameOverEntity | GameOverDrawEntity;
export type PlayerEntity = {
    id: string;
    login: string;
    rating: number;
}
export type GameIdleEntity ={
    id: string;
    creator:PlayerEntity;
    type:'idle';
}
export type GameInProgressEntity = {
    id: string;
    players: PlayerEntity[];
    field: Field[];
    type: 'in-progress';
}

export type GameOverEntity = {
    id: string;
    players: PlayerEntity[];
    field: Field[];
    winner: PlayerEntity;
    type: 'game-over';
}
export type GameOverDrawEntity = {
    id: string;
    players: PlayerEntity[];
    field: Field[];
    type: 'game-over-draw';
}

export type Field = Cell[]
export type Cell = GameSymbol | null
export type GameSymbol = string