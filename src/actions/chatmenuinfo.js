import { CHATMENU_INFO } from "../actions/types";

export const chatinfo = (value, name) => (dispatch) => {
  const data = { value, name };
  if (data) {
    dispatch({ type: CHATMENU_INFO, payload: data });
  }
};
