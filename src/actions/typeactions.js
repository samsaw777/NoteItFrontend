import { ADD_NOTEBOOK, GET_NOTEBOOK, SET_LOADING } from "./types";
import axios from "axios";
export const getNotebooks = () => {
  let data;
  return (dispatch) => {
    axios.get("http://localhost:9000/getnotes").then((res) => {
      data = res.data;
      dispatch({
        type: GET_NOTEBOOK,
        payload: data,
      });
    });
  };

  //   return {
  //     type: GET_NOTEBOOK,
  //     payload: data,
  //   };
};

export const addNotebook = (notebook) => {
  return (dispatch) => {
    axios
      .post("http://localhost:9000/savenotes", notebook)
      .then((res) => {
        console.log(res);
        dispatch({
          type: ADD_NOTEBOOK,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};

export const setloading = () => {
  return {
    type: SET_LOADING,
  };
};
