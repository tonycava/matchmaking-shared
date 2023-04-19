export declare type Role = "ADMIN" | "USER";
export declare type Chat = {
    id: string;
    userId: string;
    content: string;
    createdAt: Date;
    user: {
        username: string;
        role: Role;
    };
};
export declare enum WEB_SOCKET_EVENT {
    CONNECT = "connect",
    LEAVE_WAITING = "leaveWaiting",
    JOIN_GAME = "joinGame",
    JOIN_WAITING = "joinWaiting",
    UPDATE = "update",
    PLAY = "play",
    CHAT = "chat",
    NEW_MESSAGE = "newMessage",
    PARTNER = "partner"
}
export declare type Range = {
    start: number;
    end: number;
};
export declare type Game = {
    state: 'choosing' | 'reveal' | 'finished';
    round: number;
    timerPlay: number;
    timerRev: number;
    players: [string, string];
    whoWin: [Some, Some, Some];
    actualPlay: {
        [player: string]: string | Move;
    };
};
export declare type Some = string | null;
export declare type Move = 'rock' | 'paper' | 'scissors';
