import MessageService from "../services/messageService";
import {SEND_MESSAGE_FAIL, SEND_MESSAGE_SUCCESS} from "./typesAction";
import {clearErrors, returnErrors} from "./errorAction";



export const sendMessage = (data) => (dispatch) => {
    return MessageService.sendMessage(data)
        .then(response => {
            dispatch(clearErrors());
            dispatch({
                type: SEND_MESSAGE_SUCCESS,
                // payload: response.data
            });

        })
        .catch(error => {
            dispatch(returnErrors(error.message, error.response.status));
            dispatch({
                type: SEND_MESSAGE_FAIL
            });
            alert(error.message);

            return Promise.reject();
        });
}