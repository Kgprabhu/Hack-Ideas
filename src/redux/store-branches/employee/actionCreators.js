import * as actionTypeVars from './actionTypeVars';

export const addEmployeeDetails = (
  payload,
) => ({
  type: actionTypeVars.ADD_EMPLOYEE_DETAIL,
  payload,
});
