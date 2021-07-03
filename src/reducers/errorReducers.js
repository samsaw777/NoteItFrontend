import { GET_ERRORS, REMOVE_ERRORS } from "../actions/types";

const initialState = {
  errors: {},
};

const errorreducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    case REMOVE_ERRORS:
      return {
        errors: {},
      };
    default:
      return state;
  }
};

export default errorreducer;
