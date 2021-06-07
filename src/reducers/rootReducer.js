import {combineReducers} from "redux";
import message from "./message.reducer";
import auth from "./auth.reducer";

export default combineReducers({
    message,
    auth
});