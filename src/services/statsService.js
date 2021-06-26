import axios from "axios";
import {api_url} from "../config/config-api";

const getAllStats = (studId, appId) => {
    return axios.get(api_url + `/statistics/${studId}/${appId}`);
}

const getTheoryStats = (studId, appId) => {
    return axios.get(api_url + `/statistics/${studId}/${appId}/theory`);
}

const getExercisesStats = (studId, appId) => {
    return axios.get(api_url + `/statistics/${studId}/${appId}/exercises`);
}

const getExamStats = (studId, appId) => {
    return axios.get(api_url + `/statistics/${studId}/${appId}/exam`);
}

export default {getAllStats, getTheoryStats, getExercisesStats, getExamStats};