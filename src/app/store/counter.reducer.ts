import { createReducer, on } from '@ngrx/store';
import { decrement, increment } from './counter.actions';

// import { Action } from '@ngrx/store';
// import { CounterActions, INCREMENT, IncrementAction } from './counter.actions';

const initialState = 0;

// createReducer is a function that creates a reducer function
// (New way - abstracted with counterReducer and on)
export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.value),
  on(decrement, (state, action) => state - action.value)
);

// This is a function that creates a reducer function
// (Old way - what's going on under the hood)
// export function counterReducer(
//   state = initialState,
//   action: CounterActions | Action
// ) {
//   if (action.type === INCREMENT) {
//     return state + (action as IncrementAction).value;
//   }

//   return state;
// }
