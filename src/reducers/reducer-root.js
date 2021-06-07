import {combineReducers, createStore} from "redux";

import {authentication} from "./reducer-auth";

export default combineReducers({
    data: authentication
});

