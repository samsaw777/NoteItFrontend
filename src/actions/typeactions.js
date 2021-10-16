import {
  ADD_NOTEBOOK,
  GET_NOTEBOOK,
  SET_LOADING,
  GET_RANDOM_COLOR,
  DELETING_GROUP,
  DELETION_FAILED,
  DELETION_SUCESS,
  GET_MEMBERS,
} from "./types";
import errors from "./errortype";
import { tokenConfig } from "./authtype";
import axios from "axios";
export const getNotebooks = () => {
  return (dispatch, getState) => {
    dispatch(setloading());
    //https://noteitappapi.herokuapp.com/
    axios
      .get("https://noteitappapi.herokuapp.com/getnotes", tokenConfig(getState))
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
    //https://noteitappapi.herokuapp.com/savenotes
    axios
      .post(
        "https://noteitappapi.herokuapp.com/savenotes",
        notebook,
        tokenConfig(getState)
      )
      .then((res) => {
        console.log(res);
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
  //https://noteitappapi.herokuapp.com/
  axios
    .delete(`https://noteitappapi.herokuapp.com/${id}`)
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
