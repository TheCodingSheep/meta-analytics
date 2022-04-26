import {LOADING} from "../Action/actionType";

export const loadingAction = (value) => {
    return dispatch => {
        dispatch({type:LOADING, payload: value})
    }
}