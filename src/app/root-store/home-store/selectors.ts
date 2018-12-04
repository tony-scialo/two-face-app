import { State } from './state';
import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

const getUserName = (state: State): string => state.userName;

export const selectHomeState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('home');

export const selectUserName: MemoizedSelector<object, string> = createSelector(
  selectHomeState,
  getUserName
);
