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
        addPost:(newPostBody)=>{
            dispatch(addPostActionCreator(newPostBody));
        },
    }
}

const MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts)
export default MypostsContainer;
