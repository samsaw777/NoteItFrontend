import { MENU_INFO } from "../actions/types";

export const menuinfo = (value, name) => (dispatch) => {
  const data = { value, name };
  if (data) {
    dispatch({ type: MENU_INFO, payload: data });
  }
};
