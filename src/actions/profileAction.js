import axios from "axios";
import {api_url} from "../config/config-api";
import {AUTH_ERROR, USER_LOADED} from "./typesAction";
import {clearErrors, returnErrors} from "./errorAction";

export const updateProfile = (email, data) => (dispatch) => {
    axios.put(api_url + '/user/' + email, {data})
        .then(response => {
            dispatch(clearErrors());
            dispatch({
                type: USER_LOADED,
                // payload: response.data
                payload: data
            });
        })
        .catch(error => {
            dispatch(returnErrors(error.message, error.response.status));
            dispatch({
                type: AUTH_ERROR
            })
        });
}

export const updateInputField = (type, value) => (dispatch) => {
    dispatch({
        type: type,
        payload: value
    })
}