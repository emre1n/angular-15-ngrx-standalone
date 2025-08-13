import { createReducer } from '@ngrx/store';

const initialState = 0;

// createReducer is a function that creates a reducer function (New way)
// export const counterReducer = createReducer(initialState);

// This is a function that creates a reducer function (Old way)
export function counterReducer(state = initialState) {
  return state;
}
