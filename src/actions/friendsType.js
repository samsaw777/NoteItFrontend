import { SENT_REQUEST, ADD_FRIEND, REMOVE_FRIEND } from "./types";
import errors from "./errortype";
import { tokenConfig } from "./authtype";
import axios from "axios";

export const sendRequest = (body) => {
  return (dispatch, getState) => {
    axios
      .post(
        "https://noteitappapi.herokuapp.com/sendrequest",
        body,
        tokenConfig(getState)
      )
      .then((result) => {
        dispatch({
          type: SENT_REQUEST,
          payload: result.data.followRequest,
        });
      })
      .catch((err) => {
        dispatch(errors(err));
      });
  };
};

export const addFriend = (body) => {
  return (dispatch, getState) => {
    axios
      .post(
        "https://noteitappapi.herokuapp.com/addfriend",
        body,
        tokenConfig(getState)
      )
      .then((response) => {
        dispatch({
          type: ADD_FRIEND,
          payload: response.data.friends,
        });
      })
      .catch((error) => {
        dispatch(errors(error));
      });
  };
};

export const removeFriend = (body) => {
  return (dispatch) => {
    axios
      .post("https://noteitappapi.herokuapp.com/removefriend", body)
      .then((response) => {
        dispatch({
          type: REMOVE_FRIEND,
          payload: body.friendEmail,
        });
      })
      .catch((err) => console.log(err));
  };
};
