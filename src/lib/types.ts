// grid cell
export type CellStatus = 'correct' | 'exist' | 'absent';

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
export type SpecialKey = 'Enter' | 'Delete';

// keyboard key
export type KeyStatus = 'correct' | 'exist' | 'absent' | 'unknown';

// guess
export type Guess = {
	guess: Char[];
	statuses: CellStatus[];
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
