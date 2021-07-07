import StatsService from "../services/statsService"
import {clearErrors, returnErrors} from "./errorAction";
import {
    GET_ALL_STATS_FAIL,
    GET_ALL_STATS_SUCCESS,
    GET_EXAM_STATS_FAIL,
    GET_EXAM_STATS_SUCCESS,
    GET_EXERCISES_STATS_FAIL,
    GET_EXERCISES_STATS_SUCCESS,
    GET_THEORY_STATS_FAIL,
    GET_THEORY_STATS_SUCCESS
} from "./typesAction";




export const getAllStats = (studId, appId) => (dispatch) =>  {
    return StatsService.getAllStats(studId,appId)
        .then(response => {
            dispatch(clearErrors());
            dispatch({
                type: GET_ALL_STATS_SUCCESS,
                payload: response
            });
        })
        .catch(error => {
            dispatch(returnErrors(error.message, error.response.status));
            dispatch({
                type: GET_ALL_STATS_FAIL
            });
            alert(error.message)
            return Promise.reject();
        });
}

export const getTheoryStats = (studId, appId) => (dispatch) => {
    return StatsService.getTheoryStats(studId,appId)
        .then(response => {
            dispatch(clearErrors());
            dispatch({
                type: GET_THEORY_STATS_SUCCESS,
                payload: response
            });
        })
        .catch(error => {
            dispatch(returnErrors(error.message, error.response.status));
            dispatch({
                type: GET_THEORY_STATS_FAIL
            })
            alert(error.message)
            return Promise.reject();
        });
}

export const getExercisesStats = (studId, appId) => (dispatch) => {
    return StatsService.getExercisesStats(studId,appId)
        .then(response => {
            dispatch(clearErrors());
            dispatch({
                type: GET_EXERCISES_STATS_SUCCESS,
                payload: response
            });
        })
        .catch(error => {
            dispatch(returnErrors(error.message, error.response.status));
            dispatch({
                type: GET_EXERCISES_STATS_FAIL
            })
            alert(error.message)
            return Promise.reject();
        });
}

export const getExamStats = (studId, appId) => (dispatch) => {
    return StatsService.getExamStats(studId,appId)
        .then(response => {
            dispatch(clearErrors());
            dispatch({
                type: GET_EXAM_STATS_SUCCESS,
                payload: response
            });
        })
        .catch(error => {
            dispatch(returnErrors(error.message, error.response.status));
            dispatch({
                type: GET_EXAM_STATS_FAIL
            })
            alert(error.message)
            return Promise.reject();
        });
}