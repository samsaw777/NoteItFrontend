import { MENU_INFO, MENU_LOADING } from "../actions/types";

//initial State
const initialState = {
  menu: {
    value: "Groups",
    name: "Groups",
  },
  loading: false,
};

const chatinfo = (state = initialState, action) => {
  switch (action.type) {
    case MENU_LOADING:
      return {
        ...state,
        loading: true,
      };
    case MENU_INFO:
      return {
        ...state,
        loading: false,
        menu: action.payload,
      };
    default:
      return state;
  }
};

export default chatinfo;
