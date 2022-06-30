import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import router from "@/router"
import store from "@/store"
import {getRouter} from "@/api"

// 定义白名单
const whiteList = ['/login']

router.beforeEach(async(to,form,next) => {
  console.log(to,'to')
  NProgress.start()
  // 获取token
  const hasToken = store.getters.token
  if(hasToken){
    if(to.path == '/login'){
      next()
    }else{
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if(hasRoles){
        next()
      }else{
        try{
          store.dispatch('user/getRoles',{user:'admin',password:'0217=lxh'})
          let menu = JSON.parse(localStorage.getItem('Menu'))
          // router.addRoute(menu)
          next()
        }
        catch(err){
          next()
        }
      }
    }
  }else{
   next()
  }
  NProgress.done()
})

