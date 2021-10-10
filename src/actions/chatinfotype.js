import { CHAT_INFO, CHAT_LOADING } from "../actions/types";

export const chatinfodata = (id, chatname, array, image) => (dispatch) => {
  // dispatch({ type: CHAT_LOADING });
  const data = { id, chatname, image, member: array };

  if (data) {
    dispatch({ type: CHAT_INFO, payload: data });
  }
};
