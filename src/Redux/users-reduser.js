import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_ITEMS_COUNT = 'SET_TOTAL_ITEMS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize:5,
    portionSize: 10,
    totalItemsCount:0,
    currentPage:1,
    isFetching: false,
    followingInProgress: [],


}


const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                //users:[...state.users]}
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS:
            return {...state, users:[ ...action.users]};

        case SET_CURRENT_PAGE:
            return {...state, currentPage:action.currentPage};
        case SET_TOTAL_ITEMS_COUNT:
            return {...state, totalItemsCount:action.totalItemsCount};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching:action.isFetching};
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {...state,
                followingInProgress:
                    action.isFetching ? [...state.followingInProgress, action.userId] :state.followingInProgress.filter(id => id != action.userId )};
        default:
            return state;
    }};
    export default usersReduser;


    export const followSuccess = (userId) => ({type: FOLLOW, userId});
    export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
    export const setUsers = (users) => ({type: SET_USERS, users});
    export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
    export const setTotalItemsCount = (totalItemsCount) => ({type: SET_TOTAL_ITEMS_COUNT, totalItemsCount: totalItemsCount});
    export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
    export const toggleIsFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});


    export const getUsers =(page, pageSize)=>{
        return (dispatch) =>{
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        usersAPI.getUsers(page, pageSize)
            .then(response => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(response.items));
                dispatch(setTotalItemsCount(response.totalCount));
            });}};

export const follow =(userId)=>{
    return (dispatch) =>{
        dispatch(toggleIsFollowingProgress(true, userId));
        usersAPI.follow(userId)
            .then(response => {
                if(response.data.resultCode === 0){
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId));
            } )
    }};

export const unfollow =(userId)=>{
    return (dispatch) =>{
        dispatch(toggleIsFollowingProgress(true, userId));
        usersAPI.unfollow(userId)
            .then(response => {
                if(response.data.resultCode === 0){
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId));
            } )
    }};
