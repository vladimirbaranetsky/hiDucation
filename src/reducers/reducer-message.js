import {SEND_MESSAGE_FAIL, SEND_MESSAGE_SUCCESS} from "../actions/action-types";

const initialState = {isSend: false, message: ""};

export function send (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case SEND_MESSAGE_SUCCESS:
            return {...state, message: payload, isSend: true};
        case SEND_MESSAGE_FAIL:
            return {...state, message: '', isSend: false};
        default:
            return state;

    }
}
