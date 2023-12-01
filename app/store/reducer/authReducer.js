import { actionTypes } from "store/constants/authActions";

const initialState = {
    user: null,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.LOGIN_SUCCESS:
        return {
          ...state,
          user: action.payload,
          error: null,
        };
      case actionTypes.LOGIN_FAILURE:
        return {
          ...state,
          user: null,
          error: action.payload,
        };
      case actionTypes.LOGOUT_SUCCESS:
        return {
          ...state,
          user: null,
          error: null,
        };
      case actionTypes.LOGOUT_FAILURE:
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;