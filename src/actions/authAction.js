import AuthService from "../services/auth-service";
import {
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_FAIL,
    REGISTER_SUCCESS, SET_MESSAGE_SERVER
} from "./action-types";
import React from "react";

export const registration = (data) => (dispatch) => {
    return AuthService.registration(data)
        .then(response => {
            dispatch({
                type: REGISTER_SUCCESS,
            })
            dispatch({
                type: SET_MESSAGE_SERVER,
                payload: {
                    title: "Registration completed!",
                    subtitle: ""
                }

            });
        })
        .catch(error => {
            dispatch({
                type: REGISTER_FAIL
            });
            dispatch({
                type: SET_MESSAGE_SERVER,
                payload: {
                    title: "Registration fail :(",
                    subtitle: error.message
                }
            });
            return Promise.reject();
        });
}

export const login = (data) => (dispatch) => {
    return AuthService.login(data)
        .then(response => {
            // localStorage.setItem('user', JSON.stringify(response.data));
            localStorage.setItem('user', JSON.stringify(data));
            dispatch({
                // type: LOGIN_SUCCESS,
                // payload: response.data
                //temporary code execution
                type: LOGIN_SUCCESS,
                payload: {user: data}
            })
            dispatch({
                type: SET_MESSAGE_SERVER,
                payload: {
                    title: "Authorization completed!",
                    subtitle: ""
                }
            });
        })
        .catch(error => {
            dispatch({
                type: LOGIN_FAIL
            })
            dispatch({
                type: SET_MESSAGE_SERVER,
                payload: {
                    title: "Authorization fail :(",
                    subtitle: error.message
                }
            });
            return Promise.reject();
        });
};

export const logout = () => (dispatch) => {
    AuthService.logout();

    dispatch({
        type: LOGOUT,
    });
};