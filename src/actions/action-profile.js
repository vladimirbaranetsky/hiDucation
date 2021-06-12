import ProfileService from "../services/profile-servise";
import {PROFILE_UPDATE_FAIL, PROFILE_UPDATE_SUCCESS} from "./action-types";


export const profile = (data, userEmail) => (dispatch) => {
    return ProfileService.profile(data, userEmail)
        .then(response => {
            //localStorage.setItem("user", JSON.stringify(response.data));
            localStorage.setItem("user", JSON.stringify(data));
            dispatch({
                /*type: PROFILE_UPDATE_SUCCESS,
                payload: response.data*/

                type: PROFILE_UPDATE_SUCCESS,
                payload: {user: data}
            });
        })
        .catch(error => {
            dispatch({
                type: PROFILE_UPDATE_FAIL
            });
            alert(error.message);
            return Promise.reject();
        });
}