import {
  ADD_NOTEBOOK,
  GET_NOTEBOOK,
  SET_LOADING,
  GET_RANDOM_COLOR,
} from "../actions/types";

const initialState = {
  notebook: [],
  loading: false,
  color: [],
};

const notebookreducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTEBOOK:
      return {
        ...state,
        notebook: [action.payload, ...state.notebook],
      };
    case GET_NOTEBOOK:
      return {
        ...state,
        notebook: action.payload,
        loading: false,
      };
    case GET_RANDOM_COLOR:
      return {
        ...state,
        color: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default notebookreducer;
