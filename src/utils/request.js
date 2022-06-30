import store from "@/store"
import axios from "axios"
import { ElMessage } from 'element-plus'

let instance = axios.create({
  timeout:5000,
  baseURL:"http://127.0.0.1:4523/mock/1131777"
})

instance.interceptors.request.use(
  (config) => {
    if(store.state.UserToken){
      config.headers.Authorization = store.state.UserToken
    }
    return config
  },
  error => {
    new Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    if(response.data.code == 200){
      ElMessage({
        message: response.data.msg,
        type: 'success',
      })
    }else{
      ElMessage({
        message: response.data.msg,
        type: 'error',
      })
    }
    return response.data
  },
  error => {
    console.log(error,'响应失败');
    new Promise.reject(error)
  }

)
export default instance

