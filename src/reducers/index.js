import { combineReducers } from "redux";
import authuser from "./authReducers";
import errorreducer from "./errorReducers";
import notebookreducer from "./notebookreducer";
import chatreducer from "./chatReducers";
import menureducer from "./MenuReducers";
import chatmenureducer from "./chatmenureducer";
import joined from "./joinedGroup";
import friends from "./friendsReducer";
import todos from "./todoreducer";
const rootreducer = combineReducers({
  notebook: notebookreducer,
  errors: errorreducer,
  auth: authuser,
  chat: chatreducer,
  joinedgroup: joined,
  friends: friends,
  menu: menureducer,
  chatmenu: chatmenureducer,
  todos,
});

export default rootreducer;
