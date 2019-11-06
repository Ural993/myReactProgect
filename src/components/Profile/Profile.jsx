import React from 'react';
import s from './Profile.module.css'
import Myposts from './Myposts/Myposts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MypostsContainer from "./Myposts/MypostsContiner";

const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo savePhoto = {props.savePhoto} isOwner = {props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MypostsContainer store = {props.store}/>
        </div>

    );
}

export default Profile;
