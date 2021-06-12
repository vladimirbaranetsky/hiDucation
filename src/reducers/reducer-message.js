import {SEND_MESSAGE_FAIL, SEND_MESSAGE_SUCCESS} from "../actions/action-types";

const initialState = {isSend: false};

export function send (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case SEND_MESSAGE_SUCCESS:
            return {...state, isSend: true};
        case SEND_MESSAGE_FAIL:
            return {...state, isSend: false};
        default:
            return state;

    }
}
