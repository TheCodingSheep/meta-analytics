import { UserAuthService } from "../../Service/UserAuthService";
import * as AuthActionType from '../Action/actionType';
import { loadingAction } from "../Action/loadingAction";

// =============== Login User action ================== //
export const loginUserAction = (data) => {
    return (dispatch) => {
        console.log('login',data)
        dispatch(loadingAction(true));
        return UserAuthService.login(data)
            .then(response => {
                dispatch(loadingAction(false));
                console.log('login-response',response)
                return dispatch({ type: AuthActionType.LOGIN_USER_SUCCESS, payload: response })
            })
            .catch(err => {
                dispatch(loadingAction(false));
                throw err;
            })
    }
}

// =============== Register User action ================== //
// export const registerUserAction = (data) => {
//     return (dispatch) => {
//         dispatch(loadingAction(true));
//         return UserAuthService.registerUser(data)
//             .then(response => {
//                 dispatch(loadingAction(false));
//                 return dispatch({ type: AuthActionType.REGISTER_USER_SUCCESS, payload: response })
//             })
//             .catch(err => {
//                 dispatch(loadingAction(false));
//                 throw err;
//             })
//     }
// }

// =============== Forgot Password ================== //
// export const forgotPasswordAction = (data) => {
//     return (dispatch) => {
//         dispatch(loadingAction(true));
//         return UserAuthService.forgetPassword(data)
//             .then(response => {
//                 dispatch(loadingAction(false));
//                 return dispatch({ type: AuthActionType.FORGOT_PASSWORD_SUCCESS, payload: response })
//             })
//             .catch(err => {
//                 dispatch(loadingAction(false));
//                 throw err;
//             })
//     }
// }

// =============== Verify Auth Token ================== //
// export const VerifyTokenAction = (data) => {
//     return (dispatch) => {
//         dispatch(loadingAction(true));

//         return UserAuthService.verifyToken(data)
//             .then(response => {
//                 dispatch(loadingAction(false));
//                 return dispatch({ type: AuthActionType.FORGOT_PASSWORD_SUCCESS, payload: response })
//             })
//             .catch(err => {
//                 dispatch(loadingAction(false));
//                 throw err;
//             })
//     }
// }

// =============== Login User action ================== //
// export const userAuthAction = (data, authService, authType) => {
//     return (dispatch) => {
//         dispatch(loadingAction(true));
//         return authService(data)
//             .then(response => {
//                 dispatch(loadingAction(false));
//                 return dispatch({type: authType, payload: response})
//             })
//             .catch(err => {
//                 dispatch(loadingAction(false));
//                 throw err;
//             }) 
//     }
// }