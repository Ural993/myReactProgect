
const SEND_MESSAGE = "SEND_MESSAGE";

type DialogsType ={
    id:number,
    name:string
}
type MessagesType ={
    id:number,
    message:string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}] as Array<DialogsType>,

    messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'}] as Array<MessagesType>,
    newMessageBody: ""
}
export type InitialStateType = typeof initialState 


const dialogsReduser = (state = initialState, action:any):InitialStateType=>{

     switch(action.type){
         case SEND_MESSAGE:
        let body = action.newMessageBody;
        return {
            ...state,
            messages: [...state.messages, {id:6, message: body}]
        };


         default:return state;
}}
export default dialogsReduser;

export const sendMessageCreator = (newMessageBody:string) => ({type: SEND_MESSAGE, newMessageBody});

