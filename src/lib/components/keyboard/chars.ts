import type { Char, SpecialKey } from '$lib/types';

export const FIRST_ROW_CHARS: Char[] = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
export const SECOND_ROW_CHARS: Char[] = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
export const THIRD_ROW_CHARS: Char[] = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
export const ALL_CHARS: Char[] = [...FIRST_ROW_CHARS, ...SECOND_ROW_CHARS, ...THIRD_ROW_CHARS];
export const ENTER_STRING = 'Enter';
export const DELETE_STRING = 'Delete';
export const ALL_SPECIAL_KEYS: SpecialKey[] = [ENTER_STRING, DELETE_STRING];
