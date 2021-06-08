import {combineReducers} from "redux";

import {authentication} from "./reducer-auth";
import {send} from "./reducer-message";

export default combineReducers({
    data: authentication,
    message: send
});

