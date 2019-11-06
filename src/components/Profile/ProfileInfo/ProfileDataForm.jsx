import React from 'react';
import Contact from "./ProfileInfo";



const ProfileDataForm = (props)=>{
    return(
        <form>
            <div><button onClick={props.goToEditMode}>save</button></div>
            <div><b>Fullname:</b> {props.profile.fullName}</div>
            <div><b>Looking for a job:</b> {props.profile.lookingForAJob ? "Yes" : "No"}</div>
            {props.profile.lookingForAJob &&
            <div><b>My professional skills:</b> {props.profile.lookingForAJobDescription}</div>}
            <div><b>About me:</b> {props.profile.aboutMe || "--"}</div>
            <div><b>Contacts:</b> {Object.keys(props.profile.contacts).map(key =>{
                return <Contact contactTitle={key} contactValue={props.profile.contacts[key]} />
            })}</div>
        </form>
    )

};
export default ProfileDataForm;
