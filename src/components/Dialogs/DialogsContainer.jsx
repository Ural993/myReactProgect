import React from 'react';
import {updateNewMessageBodyCreator, sendMessageCreator} from "./../../Redux/dialogs-reduser"
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state)=>{
return{
    dialogsPage: state.dialogsPage,

}
}
let mapDispatchToProps = (dispatch)=>{
return{
    updateNewMessageBody:(body)=>{
        dispatch(updateNewMessageBodyCreator(body))
    },
    sendMessage:()=>{
        dispatch(sendMessageCreator())
    },
}
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;
