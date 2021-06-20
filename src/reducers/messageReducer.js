import {SEND_MESSAGE_FAIL, SEND_MESSAGE_SUCCESS} from "../actions/typesAction";

const initialState = {
    isSend: false
};

export function messageReducer (state = initialState, action) {
    switch (action.type) {
        case SEND_MESSAGE_SUCCESS:
            return {...state, isSend: true};
        case SEND_MESSAGE_FAIL:
            return {...state, isSend: false};
        default:
            return state;

    }
}
