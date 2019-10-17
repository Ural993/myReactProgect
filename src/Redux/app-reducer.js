import {authAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./auth-reducer";

const INITIALAIZED_CACCESS = 'INITIALAIZED_CACCESS';



let initialState = {
    initialaized: false,


};


const appReducer = (state = initialState, action) => {
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


    export const initialaizedSacces = () => ({type: INITIALAIZED_CACCESS});

    export const initialaizeApp =()=>(dispatch) =>{
let promise = dispatch(getAuthUserData());
Promise.all([promise]).then(()=>{
    dispatch(initialaizedSacces());
})
        };

