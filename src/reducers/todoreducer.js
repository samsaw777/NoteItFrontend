import { SET_LOADING, GET_TODO, ADD_TODO, REMOVE_TODO } from "../actions/types";
const initialState = {
  todos: [],
  loading: false,
};

const todoreducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case GET_TODO:
      return {
        ...state,
        todos: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.is !== action.payload),
      };
    default:
      return state;
  }
};

export default todoreducer;
