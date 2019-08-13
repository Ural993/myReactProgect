import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message'
import {NavLink, Redirect} from "react-router-dom";
import {sendMessageCreator} from "./../../Redux/state"
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let DialogeElements = state.dialogs.map((n) => {
        return (<DialogItem name={n.name} id={n.id}/>)
    });

    let MessageElement = state.messages.map((m) => {
        return (<Message message={m.message}/>)
    });

    let addNewMessage = (values)=>{
        props.sendMessage(values.newMessageBody);
    };
    //if(!props.isAuth) return <Redirect to={'/login'}/>;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogeElements}
            </div>
            <div className={s.messages}>
                <div>{MessageElement}</div>
                <AddMassageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>


    )
}
export default Dialogs;

const AddMassageForm =(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={"textarea"} name={"newMessageBody"} placeholder="Enter your message" />
        <div><button>Send</button></div>
        </form>
    )
};

const AddMassageFormRedux = reduxForm({form:"dialogAddMassageForm"})(AddMassageForm)
