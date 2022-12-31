import {
  ADD_NOTEBOOK,
  GET_NOTEBOOK,
  SET_LOADING,
  GET_RANDOM_COLOR,
  DELETION_SUCESS,
  GET_MEMBERS,
} from "./types";
import errors from "./errortype";
import { tokenConfig } from "./authtype";
import axios from "axios";

export const getGroupsMembers = (id) => {
  return (dispatch, getState) => {
    dispatch(setloading());
    axios
      .get(
        `https://remotetracker.onrender.com/getgroupmembers/${id}`,
        tokenConfig(getState)
      )
      .then((res) => {
        dispatch({ type: GET_MEMBERS, payload: res.data });
      })
      .catch((err) => {
        dispatch(errors(err));
      });
  };
};

//get the notebooks
export const getNotebooks = () => {
  return (dispatch, getState) => {
    dispatch(setloading());
    //https://remotetracker.onrender.com/
    axios
      .get("https://remotetracker.onrender.com/getnotes", tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: GET_NOTEBOOK,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch(errors(err));
      });
  };
};

export const addNotebook = (notebook) => {
  return (dispatch, getState) => {
    //https://remotetracker.onrender.com/savenotes
    axios
      .post(
        "https://remotetracker.onrender.com/savenotes",
        notebook,
        tokenConfig(getState)
      )
      .then((res) => {
        // console.log(res);
        dispatch({
          type: ADD_NOTEBOOK,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch(errors(err));
      });
  };
};

//delete group dispatch method
export const deleteGroup = (id) => (dispatch) => {
  //https://remotetracker.onrender.com/
  axios
    .delete(`https://remotetracker.onrender.com/deletegroup/${id}`)
    .then((res) => {
      dispatch({
        type: DELETION_SUCESS,
        payload: id,
      });
    })
    .catch((err) => {
      dispatch(errors(err));
    });
};

export const getrandomColor = (color) => {
  return (dispatch) => {
    dispatch({
      type: GET_RANDOM_COLOR,
      payload: color,
    });
  };
};
export const setloading = () => {
  return {
    type: SET_LOADING,
  };
};
