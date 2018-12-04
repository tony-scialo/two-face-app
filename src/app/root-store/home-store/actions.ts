import { Action } from '@ngrx/store';

export enum HomeActionTypes {
  TRY_IT_CLICK = '[HOME STORE] TRY_IT_CLICK',
  USER_TIMER_START = '[HOME STORE] USER_TIMER_START',
  USER_TIMER_END = '[HOME STORE] USER_TIMER_END',
  SELECT_RANDOM_IMAGE = '[HOME STORE] SELECT_RANDOM_IMAGE',
  GENERATE_RANDOM_SELECTS = '[HOME STORE] GENERATE_RANDOM_SELECTS'
}

export class TryItClick implements Action {
  readonly type = HomeActionTypes.TRY_IT_CLICK;
  constructor(public payload: string) {}
}

export class UserTimerStart implements Action {
  readonly type = HomeActionTypes.USER_TIMER_END;
}

export class UserTimerEnd implements Action {
  readonly type = HomeActionTypes.USER_TIMER_END;
}

export class SelectRandomImage implements Action {
  readonly type = HomeActionTypes.SELECT_RANDOM_IMAGE;
}

export class GenerateRandomSelects implements Action {
  readonly type = HomeActionTypes.GENERATE_RANDOM_SELECTS;
}

export type HomeActions =
  | TryItClick
  | UserTimerStart
  | UserTimerEnd
  | SelectRandomImage
  | GenerateRandomSelects;
