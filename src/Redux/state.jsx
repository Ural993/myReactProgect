import profileReduser from "./profile-reduser";
import dialogsReduser from "./dialogs-reduser";

const ADD_POST = 'ADD-POST';
const APDATE_NEW_POST_TEXT = 'APDATE-NEW-POST-TEXT';

const APDATE_NEW_MESSAGE_BODY = 'APDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = "SEND_MESSAGE";
let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCount: 12},
                {id: 2, message: "It's my first post", likeCount: 13},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
    },
    _collSubscriber() {
        console.log('jhg')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._collSubscriber = observer;
    },


    dispatch(action) {
        this._state.profilePage =  profileReduser(this._state.profilePage, action);
        this._state.dialogsPage =  dialogsReduser(this._state.dialogsPage, action);
        this._collSubscriber(this._state);
        }
    }








window.store = store;


export default store;
