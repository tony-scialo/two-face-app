import { Action } from '@ngrx/store';

export enum HomeActionTypes {
  TRY_IT_CLICK = '[HOME STORE] TRY_IT_CLICK'
}

export class TryItClick implements Action {
  readonly type = HomeActionTypes.TRY_IT_CLICK;
}

export type HomeActions = TryItClick;
