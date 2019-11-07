import React from 'react';
import Contact from "./ProfileInfo";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {Field, reduxForm} from "redux-form";


const ProfileDataForm = (props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div><button>save</button></div>
            <div><b>Fullname:</b> {  <Field placeholder={"Full Name"} name={"fullName"} component={Input}
                    validate={[]}/>}</div>
            <div><b>Looking for a job:</b> {<Field  name={"lookingForAJob"} component={Input} type={"checkbox"}
                    validate={[]}/>}</div>
            <div><b>My professional skills:</b> {<Field placeholder={"Professional skills"} name={"professionalSkills"} component={Textarea}
                    validate={[]}/>}</div>
            <div><b>About me:</b> {<Field placeholder={"About me"} name={"aboutMe"} component={Textarea}
                    validate={[]}/>}</div>
           
        </form>
    )

};
const ProfileDataFormReduxForm = reduxForm({
    form:"edit-profile"
})(ProfileDataForm);
export default ProfileDataFormReduxForm;
