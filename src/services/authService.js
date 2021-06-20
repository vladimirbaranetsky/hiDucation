import axios from "axios";
import {api_url} from "../config/config-api";

const getUserData = (email) => {
    return axios.get(api_url + `/user/${email}`);
}

const registration = (data) => {
    return axios.post(api_url + '/user/registration', {data});
};

const login = (data) => {
    return axios.get(api_url + '/user/login', {data});
};

const logout = () => {
    localStorage.removeItem('user')
};

export default {registration, login, logout, getUserData};

