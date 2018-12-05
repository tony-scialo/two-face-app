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
const getSelectImgList = (state: State): string[] => state.selectImgList;
const getNumAttempts = (state: State): number => state.numAttemps;
const getTotalNumAllowedAttempts = (state: State): number =>
  state.totalNumAllowedAttempts;
const getNumCorrect = (state: State): number => state.numCorrect;
const getTotalTimeTaken = (state: State): number => state.totalTimeTaken;

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

export const selectSelectImgList: MemoizedSelector<
  object,
  string[]
> = createSelector(
  selectHomeState,
  getSelectImgList
);

export const selectNumAttempts: MemoizedSelector<
  object,
  number
> = createSelector(
  selectHomeState,
  getNumAttempts
);

export const selectTotalNumAllowedAttempts: MemoizedSelector<
  object,
  number
> = createSelector(
  selectHomeState,
  getTotalNumAllowedAttempts
);

export const selectNumCorrect: MemoizedSelector<
  object,
  number
> = createSelector(
  selectHomeState,
  getNumCorrect
);

export const selectTotalTimeTaken: MemoizedSelector<
  object,
  number
> = createSelector(
  selectHomeState,
  getTotalTimeTaken
);
