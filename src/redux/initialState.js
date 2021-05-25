import { addChallengeInitialState } from './store-branches/challenge/initialState';
import { employeeDetailInitialState } from './store-branches/employee/initialState';

export const initialState = {
  challengeDetail: addChallengeInitialState,
  employeeDetail: employeeDetailInitialState,
};