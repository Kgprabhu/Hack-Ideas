import { combineReducers } from 'redux';

import {reducer as challenge } from './store-branches/challenge/reducers';
import {reducer as employee} from './store-branches/employee/reducers';

export const topReducer = combineReducers({
  challenge,
  employee
})