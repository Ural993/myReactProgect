import React, {useState} from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";



const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);


    if(!props.profile){
        return <Preloader/>
    }
    const onMainPhotoSelected =(e)=>{
        if(e.target.files.length){
            props.savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData)=>{
       props.saveProfile(formData);
        setEditMode(false);
    };
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large  || userPhoto} className={s.mainPhoto}/>
                {props.isOwner && <div><input type="file" onChange={onMainPhotoSelected}/></div>}
               <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                { editMode ? <ProfileDataForm initialValues ={props.profile} onSubmit={onSubmit} profile = {props.profile}/>
                :<ProfileData goToEditMode ={()=>{setEditMode(true)}} profile = {props.profile} isOwner = {props.isOwner}/>}

            </div>
        </div>

    );
}

export default ProfileInfo;


const Contact =({contactTitle, contactValue})=>{
    return(
            <div>
               <div className={s.contact}><b>{contactTitle}:</b>{contactValue}</div>
            </div>
    )
};

const ProfileData = (props)=>{
   return(
       <div>
           {props.isOwner && <div><button onClick={props.goToEditMode}>edit</button></div>}
           <div><b>Fullname:</b> {props.profile.fullName}</div>
           <div><b>Looking for a job:</b> {props.profile.lookingForAJob ? "Yes" : "No"}</div>
           {props.profile.lookingForAJob &&
           <div><b>My professional skills:</b> {props.profile.lookingForAJobDescription}</div>}
           <div><b>About me:</b> {props.profile.aboutMe || "--"}</div>
           <div><b>Contacts:</b> {Object.keys(props.profile.contacts).map(key =>{
               return <Contact contactTitle={key} contactValue={props.profile.contacts[key]} />
           })}</div>
       </div>
   )



};


