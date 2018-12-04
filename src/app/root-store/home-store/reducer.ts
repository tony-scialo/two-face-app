import { FaceImage } from './../../shared/model/face-image.model';
import { initialState, State } from './state';
import { HomeActionTypes, HomeActions } from './actions';

export function featureReducer(state = initialState, action: HomeActions) {
  switch (action.type) {
    case HomeActionTypes.TRY_IT_CLICK:
      return {
        ...state,
        userName: action.payload
      };
    case HomeActionTypes.SELECT_RANDOM_IMAGE:
      return selectRandomImage(state);
    case HomeActionTypes.GENERATE_RANDOM_SELECTS:
      return generateRandomSelects(state);
    default:
      return state;
  }
}

function selectRandomImage(state: State): State {
  const ri = getRandomImage(state.filenames);
  return {
    ...state,
    randomImg: ri
  };
}

function generateRandomNumInRange(min, max): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomImage(filenameList: FaceImage[]): string {
  const t = generateRandomNumInRange(0, filenameList.length - 1);
  return filenameList[t].filename;
}

function generateRandomSelects(state: State): State {
  const list = [];

  let randomImg;
  for (let x = 0; x < state.numSelectImg - 1; x++) {
    randomImg = getRandomImage(state.filenames);
    list.push(randomImg);
  }

  console.log(list);

  return state;
}
