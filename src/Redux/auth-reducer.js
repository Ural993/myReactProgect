import {authAPI, securityAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {setUserProfile} from "./profile-reduser";

const SET_USER_DATA = 'SET_USER_DATA';
const GRT_CAPTCHA_URL_SUCCESS = 'GRT_CAPTCHA_URL_SUCCESS';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null

};


const authReducer = (state = initialState, action) => {
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


export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
});
export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GRT_CAPTCHA_URL_SUCCESS,
    payload: captchaUrl
});

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};

export const login = (email, password, rememberMe, captcha) => async(dispatch) => {
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
export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }
            });
    }
};
export const getCaptchaUrl = () => async (dispatch)=>{
   const response =  await securityAPI.getCaptchaUrl();
            const captchaUrl = response.data.url;
            dispatch(getCaptchaUrlSuccess(captchaUrl))
};
