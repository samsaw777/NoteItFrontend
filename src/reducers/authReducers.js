// import { SET_CURRENT_USER, USER_LOADING } from "../actions/types";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOAD_GROUPS_JOINED,
} from "../actions/types";

//initial state
const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  user: {},
  joinedGroups: [],
  loading: false,
};

const authuser = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
    case LOAD_GROUPS_JOINED:
      return {
        ...state,
        joinedGroups: action.payload,
        loading: false,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case AUTH_ERROR:
    case LOGIN_FAILED:
    case LOGOUT_SUCCESS:
    case REGISTER_FAILED:
      localStorage.removeItem("token");
      return {
        ...state,
        user: {},
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
};

export default authuser;
