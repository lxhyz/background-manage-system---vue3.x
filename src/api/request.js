import axios from 'axios'
import { ElMessage } from 'element-plus'
import {diffTokenTime} from '@/utils/auth'
import stroe from '@/store'
const service = axios.create({
    baseURL:'https://lianghj.top:8888/api/private/v1/',
    timeout:3000,
})

service.interceptors.request.use(config => {
    if(localStorage.getItem('token')){
        // if(diffTokenTime()){
        //     stroe.dispatch('app/logout')
        //     return new Promise.reject(new Error('token失效'))
        // }
    }
    config.headers.Authorization = localStorage.getItem('token')  // 请求头配置token
    return config
},error => {
    return Promise.reject(new Error(error))
})

service.interceptors.response.use(response => {
    let {data,meta} = response.data
    if(meta.status == 200 || meta.status == 201){
        return data
    } else {
        ElMessage.error(meta.msg)
        return Promise.reject(new Error(meta.msg))
    }
},error => {
    error.response && ElMessage.error(error.response.data)
    return Promise.reject(new Error(error.response.data))
})

export default service