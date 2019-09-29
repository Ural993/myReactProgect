import {authAPI, usersAPI} from "../api/api";
import {setTotalUsersCount, setUsers, toggleIsFetching} from "./users-reduser";

const SET_USER_DATA = 'SET_USER_DATA';



let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,

};


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
               ...action.data,

                };



        default:
            return state;
    }}
    export default authReducer;


    export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA,
        data:{userId, email, login, isAuth}});

    export const getAuthAC =()=>{
    return (dispatch) =>{
        authAPI.me()
            .then(response => {
                if(response.data.resultCode === 0){
                    let {id, login, email} = response.data.data;
                    dispatch(setAuthUserData(id, email, login, true));
                }
            } );
        }};

export const login =(email, password, rememberMe)=>{
    return (dispatch) =>{
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if(response.data.resultCode === 0){
                  dispatch(setAuthUserData())
                }
            } );
    }};
export const logout =()=>{
    return (dispatch) =>{
        authAPI.logout()
            .then(response => {
                if(response.data.resultCode === 0){
                    dispatch(setAuthUserData(null, null, null, false));
                }
            } );
    }};
