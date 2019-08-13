import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const APDATE_NEW_POST_TEXT = 'APDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState ={
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 12},
        {id: 2, message: "It's my first post", likeCount: 13},
    ],
    newPostText: '',
    profile: null,
    status: "",
}


 const profileReduser = (state = initialState, action)=>{
    switch(action.type)  {
        case ADD_POST:{
        let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
        };
        let stateCopy = {...state};
        stateCopy.posts = [...state.posts];
        stateCopy.posts.push(newPost);
        stateCopy.newPostText = '';
        return stateCopy;}
     case APDATE_NEW_POST_TEXT:{
         let stateCopy = {...state};
        stateCopy.newPostText = action.newText;
    return stateCopy;}
        case SET_USER_PROFILE:{
            return {...state, profile: action.profile};}
        case SET_STATUS:{
            return {...state, status: action.status};}


        default: return  state;
}

}
export default profileReduser;


export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const getUserProfile = (userId) => (dispatch)=>{
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        } );
};
export const getStatus = (userId) => (dispatch)=>{
profileAPI.getStatus(userId)
    .then(response => {
        dispatch(setStatus(response.data));
    } );
};
export const updateStatus = (status) => (dispatch)=>{
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0){
            dispatch(setStatus(status));
            }
        } );
};
export const updateNewPostTextActionCreator = (text) => ({type: APDATE_NEW_POST_TEXT, newText: text});
