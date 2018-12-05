import { Action } from '@ngrx/store';
import { UserImageSelect } from 'src/app/shared/model/user-image-select.model';

export enum HomeActionTypes {
  TRY_IT_CLICK = '[HOME STORE] TRY_IT_CLICK',
  USER_TIMER_START = '[HOME STORE] USER_TIMER_START',
  USER_TIMER_END = '[HOME STORE] USER_TIMER_END',
  SELECT_RANDOM_IMAGE = '[HOME STORE] SELECT_RANDOM_IMAGE',
  GENERATE_RANDOM_SELECTS = '[HOME STORE] GENERATE_RANDOM_SELECTS',
  USER_IMAGE_SELECTION = '[HOME STORE] USER_IMAGE_SELECTION',
  GO_BACK_TO_SELECT_IMAGE = '[HOME STORE] GO_BACK_TO_SELECT_IMAGE',
  GO_TO_SHOW_RESULTS = '[HOME STORE] GO_TO_SHOW_RESULTS',
  HEADER_LOGO_SELECTED = '[HOME STORE] HEADER_LOGO_SELECTED'
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

export class UserImageSelection implements Action {
  readonly type = HomeActionTypes.USER_IMAGE_SELECTION;
  constructor(public payload: UserImageSelect) {}
}

export class GoBackToSelectImage implements Action {
  readonly type = HomeActionTypes.GO_BACK_TO_SELECT_IMAGE;
}

export class GoToShowResults implements Action {
  readonly type = HomeActionTypes.GO_TO_SHOW_RESULTS;
}

export class HeaderLogoSelected implements Action {
  readonly type = HomeActionTypes.HEADER_LOGO_SELECTED;
}

export type HomeActions =
  | TryItClick
  | UserTimerStart
  | UserTimerEnd
  | SelectRandomImage
  | GenerateRandomSelects
  | UserImageSelection
  | GoToShowResults
  | HeaderLogoSelected;
