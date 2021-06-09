import {PROFILE_UPDATE_FAIL, PROFILE_UPDATE_SUCCESS} from "../actions/action-types";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
    ? {isUpdated: true, user}
    : {isUpdated: false, user: null};

export function profileUpdate(state = initialState, action){
    const{type, payload} = action;

    switch (type){
        case(PROFILE_UPDATE_SUCCESS):
            return{
                ...state,
                isUpdated: true,
                user: payload.user
            }
        case (PROFILE_UPDATE_FAIL):
            return {
                ...state,
                isUpdated: false,
                user: null
            }
        default:
            return state;
    }
}