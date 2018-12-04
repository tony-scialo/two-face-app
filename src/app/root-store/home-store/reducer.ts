import { initialState } from './state';
import { HomeActionTypes, HomeActions } from './actions';

export function featureReducer(state = initialState, action: HomeActions) {
  switch (action.type) {
    case HomeActionTypes.TRY_IT_CLICK:
      return {
        ...state,
        userName: action.payload
      };
    default:
      return state;
  }
}
