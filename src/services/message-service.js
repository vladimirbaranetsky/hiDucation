import axios from "axios";
import {api_url} from "../config/config-api";

const send = (data) => {
    return axios.post(api_url + '/sendMail', {data});
};

export default {
    send
}