import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuth, getAuthAC, logout} from "../../Redux/auth-reducer";


class HeaderContainer extends React.Component {



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
    logout:()=>{
        dispatch(logout())
    }
});
export default connect (mapStateToProps, mapDispatchToProps)(HeaderContainer);
