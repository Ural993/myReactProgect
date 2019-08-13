import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuth, getAuthAC} from "../../Redux/auth-reducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuth();
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}
let mapStateToProps=(state)=>({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

let mapDispatchToProps=(dispatch)=>({
    getAuth: ()=>{
        dispatch(getAuthAC())
    }
});
export default connect (mapStateToProps, mapDispatchToProps)(HeaderContainer);
