import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message'
import {NavLink} from "react-router-dom";
import {updateNewMessageBodyCreator, sendMessageCreator} from "./../../Redux/state"

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let DialogeElements = state.dialogs.map((n) => {
        return (<DialogItem name={n.name} id={n.id}/>)
    });

    let MessageElement = state.messages.map((m) => {
        return (<Message message={m.message}/>)
    });

    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = ()=>{
        props.sendMessage();
    }

    let onNewMessageChange = (e)=>{
      let body =   e.target.value;
      props.updateNewMessageBody(body);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogeElements}
            </div>
            <div className={s.messages}>
                <div>{MessageElement}</div>
                <div><textarea value= {newMessageBody}
                               onChange={onNewMessageChange}
                               placeholder='Enter your message'></textarea></div>
                <div><button onClick={onSendMessageClick}>Send</button></div>
            </div>
        </div>


    )
}
export default Dialogs;
