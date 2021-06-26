import {combineReducers} from "redux";
import {messageReducer} from "./messageReducer";
import {errorsReducer} from "./errorsReducer";
import {authReducer} from "./authReducer";
import {productsReducer} from "./productsReducer";
import {profileReducer} from "./profileReducer";
import {themeReducer} from "./themeReducer";
import {statsReducer} from "./statsReducer";
import {theoryStatsReducer} from "./statsTheoryReducer";
import {exercisesStatsReducer} from "./statsExercisesReducer";
import {examStatsReducer} from "./statsExamReducer";


export default combineReducers({
    auth: authReducer,
    errors: errorsReducer,
    products: productsReducer,
    message: messageReducer,
    userProfile: profileReducer,
    theme: themeReducer,
    allStats: statsReducer,
    theoryStats: theoryStatsReducer,
    exercisesStats: exercisesStatsReducer,
    examStats: examStatsReducer
});