

import * as actionTypeVars from './actionTypeVars';
import {employeeDetailInitialState} from './initialState';

export const reducer = (
  state = employeeDetailInitialState,
  action,
) => {
  switch (action.type) {
    case actionTypeVars.ADD_EMPLOYEE_DETAIL: {
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