import { LOADING } from "../Action/actionType";

const loadingReducer = (state = {loading: false}, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }
}

export default loadingReducer;