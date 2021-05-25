import * as actionTypeVars from './actionTypeVars';

export const addNewChallenge = (
  payload,
) => ({
  type: actionTypeVars.ADD_NEW_CHALLENGE,
  payload,
});
