import {authAPI, securityAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {setUserProfile} from "./profile-reduser";

const SET_USER_DATA = 'SET_USER_DATA';
const GRT_CAPTCHA_URL_SUCCESS = 'GRT_CAPTCHA_URL_SUCCESS';

export type initialStateType ={
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    captchaUrl: string | null
}

let initialState:initialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null

};


const authReducer = (state = initialState, action:any):initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            };
        case GRT_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.payload,
            };
        default:
            return state;
    }
}
export default authReducer;
export type SetAuthUserDataActionDataType={
    userId:number|null,
    email: string|null, 
    login:string|null, 
    isAuth:boolean
}
export type SetAuthUserDataActionType ={
    type: typeof SET_USER_DATA,
    data: SetAuthUserDataActionDataType
}
export const setAuthUserData = (userId:number|null, email:string|null, login:string|null, isAuth:boolean):SetAuthUserDataActionType => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
});
type GetCaptchaUrlSuccessActionType={
    type: typeof GRT_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl:string}
}
export const getCaptchaUrlSuccess = (captchaUrl:string):GetCaptchaUrlSuccessActionType => ({
    type: GRT_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
});

export const getAuthUserData = () => async (dispatch:any) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};

export const login = (email:string, password:string, rememberMe:boolean, captcha:string) => async(dispatch:any) => {
       let response = await authAPI.login(email, password, rememberMe, captcha);
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                } else {
                    if(response.data.resultCode === 10){
                        dispatch(getCaptchaUrl())
                    }
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                    let action = stopSubmit("login", {_error: message});
                    dispatch(action);
                }
    };
export const logout = () => async (dispatch:any) => {
       let response =  await authAPI.logout();
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }
};
export const getCaptchaUrl = () => async (dispatch:any)=>{
   const response =  await securityAPI.getCaptchaUrl();
            const captchaUrl = response.data.url;
            dispatch(getCaptchaUrlSuccess(captchaUrl))
};
