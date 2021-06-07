import axios from "axios";
import {api_url} from "../config/config-api";
import authHeader from "./auth-header";

export const getUserBoard = () => {
    return axios.get(api_url + 'user', {headers: authHeader()})
};

