import { combineReducers } from "redux";
import authuser from "./authReducers";
import errorreducer from "./errorReducers";
import notebookreducer from "./notebookreducer";

const rootreducer = combineReducers({
  notebook: notebookreducer,
});

export default rootreducer;
