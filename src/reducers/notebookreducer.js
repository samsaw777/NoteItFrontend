import {
  ADD_NOTEBOOK,
  GET_NOTEBOOK,
  GET_MEMBERS,
  SET_LOADING,
  GET_RANDOM_COLOR,
  DELETING_GROUP,
  DELETION_FAILED,
  DELETION_SUCESS,
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
    // case GET_MEMBERS:
    //   return {
    //     ...state,
    //     notebook: action.payload,
    //     loading: false,
    //   };
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
    case DELETION_SUCESS:
      return {
        ...state,
        notebook: state.notebook.filter(
          (notebook) => notebook.id !== action.payload
        ),
      };
    case DELETING_GROUP:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default notebookreducer;
