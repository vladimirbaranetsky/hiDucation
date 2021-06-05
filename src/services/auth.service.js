import axios from "axios";
import {api_url} from "../config/constants";

const register = (email, password) => {
    return axios.post(api_url + 'signup', {
        email,
        password
    })
};

const login = (email, password) => {
    return axios.post(api_url + 'signin', {
        email,
        password
    })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        });

};

const logout = () => {
    localStorage.removeItem('user')
}

export default {
    register,
    login,
    logout
}