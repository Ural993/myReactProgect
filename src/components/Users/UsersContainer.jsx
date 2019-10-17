import React from 'react';
import {connect} from "react-redux";
import {follow, getUsers, unfollow,} from "../../Redux/users-reduser";
import Users from './Users'
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersSelector
} from "../../Redux/users-selectors";




class UsersContainer extends React.Component{
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
            }

    onPageChanged = (pageNumber)=>{
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users onPageChanged={this.onPageChanged}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress = {this.props.followingInProgress}
            />
        </>

    }
}


let mapStateToProps=(state)=>{
    return{
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),

    }
};
let AuthRedirectComponent= withAuthRedirect(UsersContainer);



 export default connect (mapStateToProps, {follow, unfollow, getUsers} )(AuthRedirectComponent);

