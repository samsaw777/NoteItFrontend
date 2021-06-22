import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
const dispatchdata = useDispatch();
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING,
  ADD_NOTEBOOK,
} from "./types";

export const registeruser = (userdata, history) => (dispatchdata) => {
  axios
    .post("/sign", userdata)
    .then((res) => history.push("/login"))
    .catch((err) =>
      dispatchdata({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const createnotebook = (notebook) => (dispatchdata) => {
  try {
    axios.post("/saveenotes").then((res) => {
      const data = res.data;
      dispatchdata({
        type: ADD_NOTEBOOK,
        payload: data,
      });
    });
  } catch {
    axios.post("/savenotes");
  }
};
