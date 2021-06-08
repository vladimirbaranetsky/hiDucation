import MessageService from "../services/message-service";
import {SEND_MESSAGE_FAIL, SEND_MESSAGE_SUCCESS} from "./action-types";



export const sendMessage = (data) => (dispatch) => {
    return MessageService.send(data)
        .then(response => {
            dispatch({
                type: SEND_MESSAGE_SUCCESS,
                payload: data.message
                // payload: response.data
            });

        })
        .catch(error => {
            dispatch({
                type: SEND_MESSAGE_FAIL
            });
            alert(error.message);

            return Promise.reject();
        });
}