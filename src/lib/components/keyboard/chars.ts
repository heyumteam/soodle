export type Chars =
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
export type SpecialKeys = 'Enter' |'Delete' ;
export type CharStatus = 'correct' | 'exist' | 'absent' | 'unknown';

export const FIRST_ROW_CHARS: Chars[] = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
export const SECOND_ROW_CHARS: Chars[] = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
export const THIRD_ROW_CHARS: Chars[] = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
export const ENTER_STRING = 'Enter';
export const DELETE_STRING = 'Delete';
