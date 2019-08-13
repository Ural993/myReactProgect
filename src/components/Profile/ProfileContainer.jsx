import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../Redux/profile-reduser";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";



class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 1143;
        }
       this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {

        return (

                <Profile {...this.props} profile={ this.props.profile} status={ this.props.status} updateStatus={this.props.updateStatus}/>

        );
    }
}
let AuthRedirectComponent= withAuthRedirect(ProfileContainer);


let mapStateToProps =(state)=>{
   return {
       profile:state.profilePage.profile,
       status:state.profilePage.status,
   }
};

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps, {getUserProfile, getStatus, updateStatus})(WithUrlDataContainerComponent);
