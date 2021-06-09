import axios from "axios";
import {api_url} from "../config/config-api";

const profile = (data, userEmail) => {
    return axios.put(api_url + '/user/' + userEmail, {data})
}

export default {
    profile
}