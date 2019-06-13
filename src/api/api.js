import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers:{
        "API-KEY":"fe88c94b-7e3d-4776-912d-349e13ec1b3a"
    },
    baseURL:'https://social-network.samuraijs.com/api/1.0/'

});
export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return instance.get(`profile/`+userId)
    }
};
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
}
