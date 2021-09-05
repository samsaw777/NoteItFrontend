import axios from "axios";
import errors from "./errortype";
import { useHistory } from "react-router-dom";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
} from "./types";

//Check token & load user data
export const loaduser = () => {
  return (dispatch, getState) => {
    //user loading
    dispatch({
      type: USER_LOADING,
    });

    // fetch the user
    axios
      .get("http://localhost:9000/loguser", tokenConfig(getState))
      .then((res) =>
        dispatch({
          type: USER_LOADED,
          payload: res.data,
        })
      )
      .catch((err) => {
        console.log(err);
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

    //Request body
    const body = JSON.stringify({ name, email, password });

    axios
      .post("http://localhost:9000/signup", body, config)
      .then((res) =>
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        })
      )

      .catch((err) => {
        dispatch(errors(err.response.data));
      });
    dispatch({
      type: REGISTER_FAILED,
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

    //post to route /signin
    axios
      .post("http://localhost:9000/signin", body, config)
      .then((res) =>
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        })
      )
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

    //post to route /signin
    // fetch("http://localhost:9000/googlelogin", {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    axios
      .post("http://localhost:9000/googlelogin", data)
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
