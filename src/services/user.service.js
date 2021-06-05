import axios from "axios";
import {api_url} from "../config/constants";
import authHeader from "./auth-header";

const getUserBoard = () => {
    return axios.get(api_url + 'user', {headers: authHeader()})
};


export default {
    getUserBoard
};