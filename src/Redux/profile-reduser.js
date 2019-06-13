import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const APDATE_NEW_POST_TEXT = 'APDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState ={
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 12},
        {id: 2, message: "It's my first post", likeCount: 13},
    ],
    newPostText: '',
    profile: null
}


 const profileReduser = (state = initialState, action)=>{
console.log(action.profile);
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


        default: return  state;
}

}
export default profileReduser;


export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const getUserProfile = (userId) => (dispatch)=>{
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        } );
};
export const updateNewPostTextActionCreator = (text) => ({type: APDATE_NEW_POST_TEXT, newText: text});
