import {GET_EXAM_STATS_FAIL, GET_EXAM_STATS_SUCCESS} from "../actions/typesAction";

const initialState = {
    examId: 0,
    gradeOverall: 0,
    exercises: [
        {
            exId: 0,
            level: 0,
            progress: 0,
            paragraphsOverall: 0
        }
    ]
}

export function examStatsReducer (state = initialState, action){
    switch (action.type) {
        case GET_EXAM_STATS_SUCCESS:
            return{
                ...state,
                ...action.payload
            }
        case GET_EXAM_STATS_FAIL:
            return {
                ...state,
                examId: 0,
                gradeOverall: 0,
                exercises: [
                    {
                        exId: 0,
                        level: 0,
                        progress: 0,
                        paragraphsOverall: 0
                    }
                ]
            }
        default:
            return state;
    }
}