import {
  JOINED_GROUP,
  JOINED_FAILED,
  JOINED_GROUP_LOADING,
  GET_MEMBERS,
} from "./types";
import axios from "axios";
import errors from "./errortype";

export const getMembers = (body) => {
  return (dispatch) => {
    dispatch({ type: JOINED_GROUP_LOADING });
    axios
      .get("https://remotetracker.onrender.com/getmembers", body)
      .then((res) => {
        dispatch({ type: GET_MEMBERS, payload: res });
      })
      .catch((err) => {
        dispatch(errors(err.response.data));

        dispatch({
          type: JOINED_FAILED,
        });
      });
  };
};

export const joingroup = (body) => {
  return (dispatch) => {
    dispatch({ type: JOINED_GROUP_LOADING });

    axios
      .post("https://remotetracker.onrender.com/addmember", body)
      .then((res) => {
        dispatch({ type: JOINED_GROUP, payload: res.data[0].members });
      })
      .catch((err) => {
        dispatch(errors(err.response.data));

        dispatch({
          type: JOINED_FAILED,
        });
      });
  };
};
