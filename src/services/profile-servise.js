import axios from "axios";
import {api_url} from "../config/config-api";

const profile = (data, userEmail) => {
    return axios.put(api_url + '/user/' + userEmail, {
        data: {
            body: {
                "id": 0,
                "firstName": "",
                "lastName": "",
                "email": "",
                "password": "",
                "institute": "",
                "degree": "",
                "fields": "",
                "apps": [
                    0
                ],
                "stillStudent": true,
                "roles": [
                    ""
                ]
            }
        }
    })
}

export default {
    profile
}