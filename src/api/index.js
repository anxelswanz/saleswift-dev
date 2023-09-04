import axios from "axios";
import base from './base'

import { stringify } from "qs";

const client = axios.create({
    // 使用stringify作为参数序列化器
    paramsSerializer: stringify
})

const api = {
    getCityList() {
        return axios.get(base.getList)
    },
    // 获取用户接口
    getUser(params) {
        return axios.get(base.getUser, { params })
    },
    //校验验证码
    verifycode(params) {
        return axios.get(base.verifycode, { params })
    },
    uploadPhoto(params) {
        return axios.post(base.uploadPhoto, params, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveItem(data) {
        return client.post(base.saveItem, data, {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        })
    },
    getByCategory(params) {
        return axios.get(base.getByCategory, { params })
    },
    getItemByItemId(params) {
        return axios.get(base.getItemByItemId, { params })
    },
    followUser(params) {
        return axios.get(base.followUser, { params })
    },
    getFollowers(params) {
        return axios.get(base.getFollowers, { params })
    },
    getFollowing(params) {
        return axios.get(base.getFollowing, { params })
    },
    getUserById(params) {
        return axios.get(base.getUserById, { params })
    },
    ifFollow(params) {
        return axios.get(base.ifFollow, { params })
    },
    ifAddFav(params) {
        return axios.get(base.ifAddFav, { params })
    }
}

export default api