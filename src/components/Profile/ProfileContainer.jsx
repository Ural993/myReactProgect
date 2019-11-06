import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, updateStatus} from "../../Redux/profile-reduser";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";



class ProfileContainer extends React.Component{


    refreshProfile() {
        let userId = this.props.match.params.userId;
        if(userId === undefined){
            userId = this.props.authorizedUserId;
        }
        if (!userId){
            this.props.history.push("/login");
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
}
    componentDidMount() {
       this.refreshProfile();
    }

   componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            this.refreshProfile();
        }
   }

    render() {

        return (

                <Profile {...this.props}
                         profile={ this.props.profile}
                         status={ this.props.status}
                         updateStatus={this.props.updateStatus}
                         isOwner = {!this.props.match.params.userId}
                         savePhoto = {this.props.savePhoto}
                />

        );
    }
}
let AuthRedirectComponent= withAuthRedirect(ProfileContainer);


let mapStateToProps =(state)=>{
   return {
       profile:state.profilePage.profile,
       status:state.profilePage.status,
       authorizedUserId:state.auth.userId,
       isAuth:state.auth.isAuth
   }
};

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto})(WithUrlDataContainerComponent);
