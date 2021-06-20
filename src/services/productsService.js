import axios from "axios";
import {api_url} from "../config/config-api";

const getProducts = () => {
    return axios.get(api_url + '/applications');
};

export default {getProducts};