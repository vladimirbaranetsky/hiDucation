import {
    CLEAR_MESSAGE,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    SET_MESSAGE
} from "../actions/action-types";

const user = JSON.parse(localStorage.getItem('user'))

const initialState = user
    ? {isLoggedIn: true, user}
    : {isLoggedIn: false, user: null};

export function authentication (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: false
            }
        case REGISTER_FAIL:
            return {
                ...state,
                isLoggedIn: false
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: payload.user
            }
        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                user: null
            }
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null
            }
        default:
            return state;
    }
}