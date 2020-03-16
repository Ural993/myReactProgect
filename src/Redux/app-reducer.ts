import {authAPI, usersAPI} from "../api/api";
// import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./auth-reducer";

const INITIALAIZED_CACCESS = 'INITIALAIZED_CACCESS';

export type initialStateType = {
    initialaized: boolean
}

let initialState:initialStateType = {
    initialaized: false,
};


const appReducer = (state = initialState, action:any):initialStateType => {
    switch (action.type) {
        case INITIALAIZED_CACCESS:
            return {
                ...state,
               initialaized: true,
                };



        default:
            return state;
    }}
    export default appReducer;

    type initialaizedSaccesActionType ={
        type : typeof INITIALAIZED_CACCESS 
    }
    export const initialaizedSacces = ():initialaizedSaccesActionType => ({type: INITIALAIZED_CACCESS});

    export const initialaizeApp =()=>(dispatch:any) =>{
let promise = dispatch(getAuthUserData());
Promise.all([promise]).then(()=>{
    dispatch(initialaizedSacces());
})
        };

