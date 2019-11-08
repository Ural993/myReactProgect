import React from 'react';
import Contact from "./ProfileInfo";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {Field, reduxForm} from "redux-form";
import s from './ProfileInfo.module.css'
import style from "../../common/FormsControls/FormsControls.module.css"
const ProfileDataForm = (props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div><button>save</button></div>
            {props.error && <div className={style.formSummaryError}>
                    {props.error}
                </div>}
            <div><b>Fullname:</b> {  <Field placeholder={"Full Name"} name={"fullName"} component={Input}
                    validate={[]}/>}</div>
            <div><b>Looking for a job:</b> {<Field  name={"lookingForAJob"} component={Input} type={"checkbox"}
                    validate={[]}/>}</div>
            <div><b>My professional skills:</b> {<Field placeholder={"Professional skills"} name={"lookingForAJobDescription"} component={Textarea}
                    validate={[]}/>}</div>
            <div><b>About me:</b> {<Field placeholder={"About me"} name={"aboutMe"} component={Textarea}
                    validate={[]}/>}</div>
           <div><b>Contacts:</b> {Object.keys(props.profile.contacts).map(key =>{
               return <div key={key} className={s.contact}> 
               <b>{key}:</b>{<Field placeholder={key} name={"contacts."+ key} component={Input}
                    validate={[]}/>}
               </div>  
           })}</div>
        </form>
    )

};
const ProfileDataFormReduxForm = reduxForm({
    form:"edit-profile"
})(ProfileDataForm);
export default ProfileDataFormReduxForm;
