import { GET_ERRORS } from "./types";

const errors = (err) => {
  return {
    type: GET_ERRORS,
    payload: err,
  };
};

export default errors;
