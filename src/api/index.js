import request from "@/utils/request.js"

export function getRouter(data){
  return request({
    url:"/getMenu",
    method:'post',
    data
  })
}

// 登录接口
export  function login(data){
  return request({
    url:'/login',
    data,
    method:'POST'
  })
}
