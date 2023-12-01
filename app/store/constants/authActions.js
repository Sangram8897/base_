
export const actionTypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT_REQUEST: 'LOGOUT_REQUEST',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_FAILURE: 'LOGOUT_FAILURE'
}

export const loginRequest = (username, password) => ({
  type: actionTypes.LOGIN_REQUEST,
  payload: { username, password },
});

export const loginSuccess = (user) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: actionTypes.LOGIN_FAILURE,
  payload: error,
});

export const logoutRequest = () => ({
  type: actionTypes.LOGOUT_REQUEST,
});

export const logoutSuccess = () => ({
  type: actionTypes.LOGOUT_SUCCESS,
});

export const logoutFailure = (error) => ({
  type: actionTypes.LOGOUT_FAILURE,
  payload: error,
});