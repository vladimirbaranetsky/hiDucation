import {
    CLEAR_USER_PROFILE,
    NEW_EMAIL,
    NEW_FIRST_NAME,
    NEW_ID,
    NEW_LAST_NAME,
    NEW_PASSWORD, SET_PHOTO_AVATAR, SET_USER_PROFILE
} from "../actions/typesAction";


const initialState = {
    id: 0,
    photo: {},
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    institute: "",
    degree: "",
    fields: "",
    apps: [
        0
    ],
    stillStudent: true,
    roles: [
        ""
    ]
}

export function profileReducer (state = initialState, action) {
    switch (action.type){
        case NEW_ID:
            return {
                ...state,
                id: action.payload
            }
        case NEW_EMAIL:
            return {
                ...state,
                email: action.payload
            }
        case NEW_PASSWORD:
            return {
                ...state,
                password: action.payload
            }
        case NEW_FIRST_NAME:
            return {
                ...state,
                firstName: action.payload
            }
        case NEW_LAST_NAME:
            return {
                ...state,
                lastName: action.payload
            }
        case SET_PHOTO_AVATAR:
            return {
                ...state,
                photo: action.payload
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                ...action.payload
            }
        case CLEAR_USER_PROFILE:
            return {
                id: 0,
                photo: {},
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                institute: "",
                degree: "",
                fields: "",
                apps: [
                    0
                ],
                stillStudent: true,
                roles: [
                    ""
                ]
            }

        default:
            return state;
    }
}