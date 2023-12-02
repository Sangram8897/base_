export type ActionTypes =
  | 'LOGIN_REQUEST'
  | 'LOGIN_SUCCESS'
  | 'LOGIN_FAILURE'
  | 'LOGOUT_REQUEST'
  | 'LOGOUT_SUCCESS'
  | 'LOGOUT_FAILURE';

export const actionTypes: Record<ActionTypes, ActionTypes> = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT_REQUEST: 'LOGOUT_REQUEST',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_FAILURE: 'LOGOUT_FAILURE'
};

// Usage example:
const actionType: ActionTypes = actionTypes.LOGIN_REQUEST;