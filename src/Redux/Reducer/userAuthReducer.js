import * as AuthActionType from '../Action/actionType';


const initialState = {
    isLoggedin: false,
    loginUserData: null,
    registerUserData: null,
    userDate: null,
}

const userAuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case "isAuth":
            return {
                ...state,
                isLoggedin: action.payload
            }
        case AuthActionType.LOGIN_USER_SUCCESS:
            console.log('Action', action);
            return {
                ...state,
                loginUserData: action.payload,
                // userDate: action.payload.data.data.result,
            }
        case AuthActionType.REGISTER_USER_SUCCESS:
            return {
                ...state,
                registerUserData: action.payload
            }
        
        default:
            return state;
    }
}

export default userAuthReducer;