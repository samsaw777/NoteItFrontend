import { CHATMENU_INFO, CHATMENU_INFO_LOADING } from "../actions/types";

//initial State
const initialState = {
  menu: {
    value: "Messages",
    name: "Messages",
  },
  loading: false,
};

const menuinfo = (state = initialState, action) => {
  switch (action.type) {
    case CHATMENU_INFO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CHATMENU_INFO:
      return {
        ...state,
        loading: false,
        menu: action.payload,
      };
    default:
      return state;
  }
};

export default menuinfo;
