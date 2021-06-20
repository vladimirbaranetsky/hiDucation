import {UPDATE_THEME} from "../actions/typesAction";


const initialState = {
    theme: "light"
};

export function themeReducer(state = initialState, action) {

    switch (action.type) {
        case UPDATE_THEME:
            return {...state, theme: action.payload};
        default:
            return state;

    }
}