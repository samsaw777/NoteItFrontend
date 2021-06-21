import { combineReducers } from "redux";
import authuser from "./authReducers";
import errorreducer from "./errorReducers";


export default combineReducers({
    auth: authuser,
    errors: errorreducer
})