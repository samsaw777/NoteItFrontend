import {
  JOINED_GROUP,
  JOINED_GROUP_LOADING,
  JOINED_FAILED,
  GET_MEMBERS,
} from "../actions/types";

const initialState = {
  joinedList: [],
  loading: false,
};

const joinedGroup = (state = initialState, action) => {
  switch (action.type) {
    case JOINED_GROUP_LOADING:
      return { ...state, loading: true };
    case JOINED_GROUP:
      return {
        ...state,
        joinedList: [action.payload, ...state],
        loading: false,
      };
    case GET_MEMBERS:
      return {
        ...state,
        joinedList: action.payload,
        loading: false,
      };
    case JOINED_FAILED:
      return {
        ...state,
        joinedGroup: {},
        loading: false,
      };
    default:
      return state;
  }
};

export default joinedGroup;
