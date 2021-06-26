import {GET_EXERCISES_STATS_FAIL, GET_EXERCISES_STATS_SUCCESS} from "../actions/typesAction";

const initialState = {
    exId: 0,
    level: 0,
    progress: 0,
    paragraphsOverall: 0
}

export function exercisesStatsReducer(state = initialState, action){
    switch (action.type) {
        case GET_EXERCISES_STATS_SUCCESS:
            return{
                ...state,
                ...action.payload
            }
        case GET_EXERCISES_STATS_FAIL:
            return {
                exId: 0,
                level: 0,
                progress: 0,
                paragraphsOverall: 0
            }
        default:
            return state;
    }
}