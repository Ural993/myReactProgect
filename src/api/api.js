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
        console.warn("Obsolete method. Please use profileAPI object")
        return profileAPI.getProfile(userId);
    }
};
export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`);
    },
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/`+userId)
    },
    getStatus(userId){
        return instance.get(`profile/status/`+userId)
},
    updateStatus(status){
        return instance.put(`profile/status`, {status: status})
    },
    updatePhoto(photoFile){
        let formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }})
    }
};
