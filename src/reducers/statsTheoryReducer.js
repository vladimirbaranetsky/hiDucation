import {GET_THEORY_STATS_FAIL, GET_THEORY_STATS_SUCCESS} from "../actions/typesAction";

const initialState = {
    itemId: 0,
    progress: 0
}

export function theoryStatsReducer (state = initialState, action){
    switch (action.type) {
        case GET_THEORY_STATS_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        case GET_THEORY_STATS_FAIL:
            return {
                ...state,
                itemId: 0,
                progress: 0
            }
        default:
            return state;
    }
}