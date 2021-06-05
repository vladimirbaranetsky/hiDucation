import {types} from "../constants/actionTypes";

const initialState = {
    profile: {
        email: '',
        password: ''
    },
    formSubmit: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN:
            console.log('login', action.payload.user)
            return {
                ...state,
                profile: action.payload.user
            }
        case types.ADD_USER:
            return {
                ...state,
                profile: action.payload.user
            }
        case types.FORM_SUBMIT_STATUS:
            return {
                ...state,
                formSubmit: action.payload.status
            }
        default:
            return state
    }
}
export default reducer;