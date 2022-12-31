import axios from "axios";
import errors from "./errortype";
import { toast } from "react-toastify";
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
} from "./types";

//Load joined group
export const loadUserGroup = () => {
  return (dispatch, getState) => {
    dispatch({
      type: USER_LOADING,
    });

    axios
      .get(
        "https://remotetracker.onrender.com/logusergroups",
        tokenConfig(getState)
      )
      .then((res) => {
        dispatch({ type: LOAD_GROUPS_JOINED, payload: res.data });
      })
      .catch((err) => {
        dispatch(errors(err));
      });
  };
};

//Check token & load user data
export const loaduser = () => {
  return (dispatch, getState) => {
    //user loading
    dispatch({
      type: USER_LOADING,
    });
    //https://noteitappapi.herokuapp.com
    // fetch the user
    axios
      .get("https://remotetracker.onrender.com/loguser", tokenConfig(getState))
      .then((res) =>
        dispatch({
          type: USER_LOADED,
          payload: res.data,
        })
      )
      .catch((err) => {
        // console.log(err);
        dispatch(errors(err.response.data));
        dispatch({
          type: AUTH_ERROR,
        });
      });
  };
};

//register user
export const register = ({ name, email, password }) => {
  return (dispatch) => {
    //Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    dispatch({
      type: USER_LOADING,
    });
    //Request body
    const body = JSON.stringify({ name, email, password });
    //https://remotetracker.onrender.com/signup
    axios
      .post("https://remotetracker.onrender.com/signup", body, config)
      .then((res) => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        // console.log(err?.response);
        dispatch(errors(err?.response.data));

        dispatch({
          type: REGISTER_FAILED,
        });
      });
  };
};

//

//Login user in the application

export const Loginauth = ({ email, password }) => {
  return (dispatch) => {
    //user loading
    dispatch({
      type: USER_LOADING,
    });

    //headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    //request body
    const body = JSON.stringify({ email, password });
    //https://noteitappapi.herokuapp.com
    //post to route /signin
    axios
      .post("https://remotetracker.onrender.com/signin", body, config)
      .then((res) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
        toast.success("Logged In Sucessfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        dispatch(errors(err.response.data));
        dispatch({
          type: LOGIN_FAILED,
        });
      });
  };
};

export const glogin = (token) => {
  return (dispatch) => {
    //user loading
    dispatch({
      type: USER_LOADING,
    });

    //request body
    const data = { tokenId: token };
    //https://remotetracker.onrender.com/googlelogin
    axios
      .post("https://remotetracker.onrender.com/googlelogin", data)
      .then((res) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch(errors(err.response.data));
        dispatch({
          type: LOGIN_FAILED,
        });
      });
  };
};

//Logout User
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

//Config header and tokens
export const tokenConfig = (getState) => {
  //Get the token from localStorage
  const token = getState().auth.token;

  //Header
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  //If token add to the headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};

// Login with google
