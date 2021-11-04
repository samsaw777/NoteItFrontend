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
      .get("http://localhost:9000/getToDo", tokenConfig(getState))
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
      .post("http://localhost:9000/addToDo", todo, tokenConfig(getState))
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
    .delete(`http://localhost:9000/deleteTodo/${todoId}`)
    .then((res) => {
      dispatch({ type: REMOVE_TODO, payload: todoId });
    })
    .catch((error) => {
      dispatch(errors(error));
    });
};
