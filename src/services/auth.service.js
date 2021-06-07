import axios from "axios";
import {api_url} from "../config/constants";

const register = (email, password) => {
    return axios.post(api_url + '/user/registration', {
        email,
        password
    })
};

const login = (email, password) => {
    return axios.get(api_url + '/user/login', {
        email,
        password
    })
        .then((response) => {
            console.log(response)
            if (response.data.token) {
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