import React from 'react';
import {
    addPostActionCreator,
    updateNewPostTextActionCreator
} from "../../../Redux/profile-reduser";
import Myposts from "./Myposts";
import {connect} from "react-redux";




let mapStateToProps = (state)=>{
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText

    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        updateNewPostText:(text)=>{
            dispatch(updateNewPostTextActionCreator(text));
        },
        addPost:()=>{
            dispatch(addPostActionCreator());
        },
    }
}

const MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts)
export default MypostsContainer;
