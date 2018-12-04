import { State } from './state';
import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

const getUserName = (state: State): string => state.userName;
const getRandomImg = (state: State): string => state.randomImg;
const getTimerLength = (state: State): number => state.timerLength;
const getNumSelectImg = (state: State): number => state.numSelectImg;

export const selectHomeState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('home');

export const selectUserName: MemoizedSelector<object, string> = createSelector(
  selectHomeState,
  getUserName
);

export const selectRandomImage: MemoizedSelector<
  object,
  string
> = createSelector(
  selectHomeState,
  getRandomImg
);

export const selectTimerLength: MemoizedSelector<
  object,
  number
> = createSelector(
  selectHomeState,
  getTimerLength
);

export const selectNumSelectImg: MemoizedSelector<
  object,
  number
> = createSelector(
  selectHomeState,
  getNumSelectImg
);
