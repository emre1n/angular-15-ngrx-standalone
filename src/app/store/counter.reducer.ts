import { createReducer, on } from '@ngrx/store';
import { increment } from './counter.actions';

const initialState = 0;

// createReducer is a function that creates a reducer function (New way)
export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1)
);

// This is a function that creates a reducer function (Old way)
// export function counterReducer(state = initialState) {
//   return state;
// }
