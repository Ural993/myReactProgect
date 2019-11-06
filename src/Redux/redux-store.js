import {applyMiddleware, combineReducers, compose, createStore} from "redux";
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(redusers, composeEnhancers(applyMiddleware(thunkMiddleware)));


window.store = store;

export default store;
