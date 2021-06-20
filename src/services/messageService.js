import axios from "axios";
import {api_url} from "../config/config-api";

const sendMessage = (data) => {
    return axios.post(api_url + '/sendMail', {data});
};

export default {sendMessage};