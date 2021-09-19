import { CHAT_INFO, CHAT_LOADING } from "../actions/types";

//initial State
const initialState = {
  chat: {},
  loading: false,
};

const chatinfo = (state = initialState, action) => {
  switch (action.type) {
    case CHAT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CHAT_INFO:
      return {
        ...state,
        loading: false,
        chat: action.payload,
      };
    default:
      return state;
  }
};

export default chatinfo;
