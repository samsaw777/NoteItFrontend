import { combineReducers } from "redux";
import authuser from "./authReducers";
import errorreducer from "./errorReducers";
import notebookreducer from "./notebookreducer";
import chatreducer from "./chatReducers";
const rootreducer = combineReducers({
  notebook: notebookreducer,
  errors: errorreducer,
  auth: authuser,
  chat: chatreducer,
});

export default rootreducer;
