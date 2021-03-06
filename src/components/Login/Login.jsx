import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "../common/FormsControls/FormsControls.module.css"



const LoginForm= (props)=>{

    return(
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Email"} name={"email"} component={Input}
                    validate={[required]}/>
                </div>
                <div>
                    <Field placeholder={"password"}  name={"password"} component={Input}
                           validate={[required]}/>
                </div>
                <div>
                    <Field type={"checkbox"} name={"rememberMe"}
                           component={Input}   validate={[required]}/> remember me
                </div>
                {props.captchaUrl && <img src={props.captchaUrl} alt=""/>}
                {props.captchaUrl &&  <Field placeholder={"Symbols"} name={"captcha"} component={Input}
                                             validate={[required]}/>}
                {props.error && <div className={style.formSummaryError}>
                    {props.error}
                </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
};
const LoginReduxForm = reduxForm({
    form:"login"
})(LoginForm);

const Login= (props)=>{
    const onSubmit = (formData)=>{
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };
    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    return(
        <div>
            <h1>Login</h1>
           <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>

    )
};
const mapStateToProps = (state)=>({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,

});

export default connect(mapStateToProps, {login})(Login);
