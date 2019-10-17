import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReduser from "./dialogs-reduser";
import profileReduser from "./profile-reduser";
import usersReduser from "./users-reduser";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";

let redusers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    usersPage: usersReduser,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})


let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
