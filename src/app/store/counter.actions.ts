import { createAction, props } from '@ngrx/store';

// createAction is a function that creates an action
// (New way - abstracted with createAction and props)
export const increment = createAction(
  '[Counter] Increment',
  props<{ value: number }>()
);

// This is a function that creates a reducer function
// (Old way - what's going on under the hood)

// export const INCREMENT = '[Counter] Increment';
// export class IncrementAction implements Action {
//   readonly type = INCREMENT;

//   constructor(public value: number) {}
// }

// export type CounterActions = IncrementAction;
