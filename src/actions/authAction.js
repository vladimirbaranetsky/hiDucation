import AuthService from "../services/authService";
import {
    AUTH_ERROR, CLEAR_USER_PROFILE,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS, SET_USER_PROFILE, USER_LOADED, USER_LOADING
} from "./typesAction";
import store from "../store/store";
import axios from "axios";
import {api_url} from "../config/config-api";
import {clearErrors, returnErrors} from "./errorAction";

// export const loadUser = () => (dispatch) => {
//     dispatch({type: USER_LOADING});
//
//     const token = store.getState().auth.token;
//     const config = {
//         headers: {
//             "Content-type": "application/json"
//         }
//     }
//     if(token){
//         config.headers['x-auth-token'] = token;
//     }
//     axios.get(api_url + '/user', config)
//         .then(response => {
//             dispatch(clearErrors());
//             dispatch({
//                 type: USER_LOADED,
//                 payload: response.data
//             });
//         })
//         .catch(error => {
//             dispatch(returnErrors(error.message, error.response.status));
//             dispatch({
//                 type: AUTH_ERROR
//             })
//         });
// }

export const registration = (data) => (dispatch) => {
    return AuthService.registration(data)
        .then(response => {
            dispatch(clearErrors());
            dispatch({
                type: REGISTER_SUCCESS,
            })
        })
        .catch(error => {
            dispatch(returnErrors(error.message, error.response.status));
            dispatch({
                type: REGISTER_FAIL
            });
            return Promise.reject();
        });
}

export const login = (data) => (dispatch) => {
    return AuthService.login(data)
        .then(response => {
            dispatch(clearErrors());
            localStorage.setItem('token', response.data.token);
            return AuthService.getUserData(data.email)
                .then(response => {
                    dispatch({
                        // type: LOGIN_SUCCESS,
                        // payload: response.data
                        //temporary code execution
                        type: LOGIN_SUCCESS,
                        payload: {user: data}
                    })
                    dispatch({
                        type: SET_USER_PROFILE,
                        payload: data
                    })
                })
                .catch(error => {
                    dispatch(returnErrors(error.message, error.response.status));
                    dispatch({
                        type: LOGIN_FAIL
                    })
                    return Promise.reject();
                });
        })
        .catch(error => {
            dispatch(returnErrors(error.message, error.response.status));
            dispatch({
                type: LOGIN_FAIL
            })
            return Promise.reject();
        });
};

export const logout = () => (dispatch) => {
    AuthService.logout();
    dispatch({
        type: CLEAR_USER_PROFILE
    })
    dispatch({
        type: LOGOUT_SUCCESS,
    });
};