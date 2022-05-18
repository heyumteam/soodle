import type { Readable, Writable } from 'svelte/store';

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
export type Quiz = {
	answer: string;
	wordLength: number;
	guesses: Guess[];
	currentGuess: Char[];
	knownChars: { [char in Char]?: CharStatus };
};

export type Game = {
	quizzes: Quiz[];
	currentQuizIndex: number;
};

// toast
export type Toast = {
	id: string;
	message: string;
};

// store
export type GameStore = {
	subscribe: Writable<Game>['subscribe'];
	nextQuiz: () => void;
	prevQuiz: () => void;
	addChar: (char: Char) => void;
	removeChar: () => void;
	makeGuess: () => void;
};

export type QuizStore = {
	subscribe: Readable<Quiz>['subscribe'];
	addChar: (char: Char) => void;
	removeChar: () => void;
	makeGuess: () => void;
};

export type GuessStore = {
	subscribe: Readable<Char[]>['subscribe'];
	addChar: (char: Char) => void;
	removeChar: () => void;
};

