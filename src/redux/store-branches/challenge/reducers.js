

import * as actionTypeVars from './actionTypeVars';
import {addChallengeInitialState} from './initialState';

export const reducer = (
  state = addChallengeInitialState,
  action,
) => {
  switch (action.type) {
    case actionTypeVars.ADD_NEW_CHALLENGE: {
      const newState = {
        ...state,
        data: action.payload.data,
      };
      return newState;
    }
    default:
      return state;
  }
};