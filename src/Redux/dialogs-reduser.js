const APDATE_NEW_MESSAGE_BODY = 'APDATE_NEW_MESSAGE_BODY';
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

    let stateCopy = {...state,
    messages: [...state.messages]};
     switch(action.type){
         case APDATE_NEW_MESSAGE_BODY:
        stateCopy.newMessageBody = action.body;
         return stateCopy
    case SEND_MESSAGE:
        let body = stateCopy.newMessageBody;
        stateCopy.newMessageBody = "";
        stateCopy.messages.push({ message: body, id:6});
        return stateCopy;


         default:return state;
}}
export default dialogsReduser;

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: APDATE_NEW_MESSAGE_BODY, body: body});
