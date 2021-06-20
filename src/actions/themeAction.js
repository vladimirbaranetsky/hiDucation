import {UPDATE_THEME} from "./typesAction";


export const updateTheme = (theme) => (dispatch) => {
    dispatch({
        type: UPDATE_THEME,
        payload: theme
    })
}