import {
  CLEAR_AUTH_STATE,
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../constants/actionTypes';

const auth = (state, {type, payload}) => {
  switch (type) {
    case LOGIN_LOADING:
    case REGISTER_LOADING:
      // console.log("stete", state);
      return {
        ...state,
        loading: true,
      };

    case REGISTER_SUCCESS:
      // console.log("stete", state);
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case LOGIN_SUCCESS:
      // console.log("stete", state);
      return {
        ...state,
        loading: false,
        data: payload,
        isLoggedIn: true,
      };

    case LOGIN_FAIL:
    case REGISTER_FAIL:
      // console.log("stete", state);
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case CLEAR_AUTH_STATE:
      // console.log("stete", state);
      return {
        ...state,
        loading: false,
        data: null,
        error: null,
      };
    case LOGOUT_USER:
      return {
        ...state,
        loading: false,
        data: null,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};

export default auth;
