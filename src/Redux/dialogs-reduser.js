
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}],
    messages: [
        {message: 'hi'},
        {message: 'How are you?'},
        {message: 'Yo'}],
    newMessageBody: ""
}



const dialogsReduser = (state = initialState, action)=>{

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

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

