import {types} from "../constants/actionTypes";

export const actionCreators = {
    login: (user) => ({
       type: types.LOGIN,
       payload: {user}
    }),

    addUser: (user) => ({
        type: types.ADD_USER,
        payload: {user}
    }),
     formSubmitStatus: (status) => ({
         type: types.FORM_SUBMIT_STATUS,
         payload: {status}
     })
}