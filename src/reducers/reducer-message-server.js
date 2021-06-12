import {SET_MESSAGE_SERVER} from "../actions/action-types";

const initialState = {
    message: ""
}

export function messageFromServer (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case SET_MESSAGE_SERVER:
            return {
                ...state,
                message: payload
            }
        default:
            return state;
    }
}