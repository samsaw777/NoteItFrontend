import { SET_LOADING, ADD_TODO, GET_TODO, REMOVE_TODO } from "./types";
import errors from "./errortype";
import { tokenConfig } from "./authtype";
import axios from "axios";

export const setloading = () => {
  return {
    type: SET_LOADING,
  };
};

export const getTodos = () => {
  return (dispatch, getState) => {
    dispatch(setloading());
    axios
      .get("https://noteitappapi.herokuapp.com/getToDo", tokenConfig(getState))
      .then((response) => {
        dispatch({
          type: GET_TODO,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch(errors(error));
      });
  };
};

export const addTodos = (todo) => {
  return (dispatch, getState) => {
    axios
      .post(
        "https://noteitappapi.herokuapp.com/addToDo",
        todo,
        tokenConfig(getState)
      )
      .then((response) => {
        dispatch({
          type: ADD_TODO,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch(errors(error));
      });
  };
};

export const removeTodos = (todoId) => (dispatch) => {
  axios
    .delete(`https://noteitappapi.herokuapp.com/deleteTodo/${todoId}`)
    .then((res) => {
      dispatch({ type: REMOVE_TODO, payload: todoId });
    })
    .catch((error) => {
      dispatch(errors(error));
    });
};
