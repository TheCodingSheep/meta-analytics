import { combineReducers } from "redux";
import userAuthReducer from "./userAuthReducer";
import loadingReducer from "./loadingReducer";


const rootReducer = combineReducers({
    userAuthReducer: userAuthReducer,
    loadingReducer: loadingReducer,

});

export default rootReducer;