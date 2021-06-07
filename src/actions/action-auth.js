import AuthService from "../services/auth-service";
import {
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_FAIL,
    REGISTER_SUCCESS
} from "./action-types";



export const register = (data) => (dispatch) => {
    return AuthService.register(data)
        .then(response => {
            dispatch({
                type: REGISTER_SUCCESS,
            });

        })
        .catch(error => {
            dispatch({
                type: REGISTER_FAIL
            });
            alert(error.message);

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
            });
        })
        .catch(error => {
            dispatch({
                type: LOGIN_FAIL
            });
            alert(error.message);

            return Promise.reject();
        });
};

export const logout = () => (dispatch) => {
    AuthService.logout();

    dispatch({
        type: LOGOUT,
    });
};