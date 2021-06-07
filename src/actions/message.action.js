import {CLEAR_MESSAGE, SET_MESSAGE} from "./action-types";

export const setMessage = (message) => ({
    type: SET_MESSAGE,
    payload: message
})

 export const clearMessage = () => ({
     type: CLEAR_MESSAGE
 })

//messages (notifications) from APIs