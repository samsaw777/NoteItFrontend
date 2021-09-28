import { combineReducers } from "redux";
import authuser from "./authReducers";
import errorreducer from "./errorReducers";
import notebookreducer from "./notebookreducer";
import chatreducer from "./chatReducers";
import joined from "./joinedGroup";
import friends from "./friendsReducer";
const rootreducer = combineReducers({
  notebook: notebookreducer,
  errors: errorreducer,
  auth: authuser,
  chat: chatreducer,
  joinedgroup: joined,
  friends: friends,
});

export default rootreducer;
