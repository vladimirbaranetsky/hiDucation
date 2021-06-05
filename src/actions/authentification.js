import AuthService from "../services/auth.service";
import {REGISTER_FAIL, REGISTER_SUCCESS, SET_MESSAGE} from "./actionTypes";


export const register = (email, password) => (dispatch) => {
    return AuthService.register(email, password).then(
        (response) => {
            dispatch({
                type: REGISTER_SUCCESS
            });
            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message
            });
            return Promise.resolve();
        },
        (error) => {
            const message = (
                error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message || error.toString();
            dispatch({
                type: REGISTER_FAIL
            })
            dispatch({
                type: SET_MESSAGE,
                payload: message
            })
            return Promise.reject();
        }
    )
}