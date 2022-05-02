// character
export type Char =
	| 'Q'
	| 'W'
	| 'E'
	| 'R'
	| 'T'
	| 'Y'
	| 'U'
	| 'I'
	| 'O'
	| 'P'
	| 'A'
	| 'S'
	| 'D'
	| 'F'
	| 'G'
	| 'H'
	| 'J'
	| 'K'
	| 'L'
	| 'Z'
	| 'X'
	| 'C'
	| 'V'
	| 'B'
	| 'N'
	| 'M';
export type CharStatus = 'correct' | 'exist' | 'absent';
export type SpecialKey = 'Enter' | 'Delete';

// guess
export type Guess = {
	guess: Char[];
	statuses: CharStatus[];
};

// game
export type GameResult = 'win' | 'lose' | undefined;
export type GameStatus = {
	guesses: Guess[];
	result: GameResult;
};
export type GameStats = {
	played: number;
	winCount: number;
	currentWinningStreak: number;
	maxWinningStreak: number;
	guessDistribution: number[];
};

// toast
export type Toast = {
	id: string;
	message: string;
};
