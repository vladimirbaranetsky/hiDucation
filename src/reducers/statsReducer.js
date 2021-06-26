import {GET_ALL_STATS_FAIL, GET_ALL_STATS_SUCCESS} from "../actions/typesAction";

const initialState = {
    id: 0,
    theory: [
        {
            itemId: 0,
            progress: 0
        }
    ],
    exercises: [
        {
            exId: 0,
            level: 0,
            progress: 0,
            paragraphsOverall: 0
        }
    ],
    exam: true
}


export function statsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_STATS_SUCCESS:
            return{
                ...state,
                ...action.payload
            }
        case GET_ALL_STATS_FAIL:
            return {
                ...state,
                id: 0,
                theory: [
                    {
                        itemId: 0,
                        progress: 0
                    }
                ],
                exercises: [
                    {
                        exId: 0,
                        level: 0,
                        progress: 0,
                        paragraphsOverall: 0
                    }
                ],
                exam: true
            }
        default:
            return state;
    }
}