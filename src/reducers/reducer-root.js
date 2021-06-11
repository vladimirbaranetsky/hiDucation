import {combineReducers} from "redux";

import {authentication} from "./reducer-auth";
import {send} from "./reducer-message";
import {profileUpdate} from "./reducer-profile";
import {messageFromServer} from "./reducer-message-server";

export default combineReducers({
    data: authentication,
    message: send,
    profileUpdate: profileUpdate,
    messageServer: messageFromServer
});