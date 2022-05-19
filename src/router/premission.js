import router from './index'
import store from '@/store'

const whiteList = ['/login']  // 未登录可访问的页面
router.beforeEach((to,from,next) => {
    // 判断是否有token
    if(store.getters.token){
        if(to.path =='/login'){
            next('/')
        }else {
            next()
        }
    }else{
        if(whiteList.includes(to.path)){
            next()
        }else {
            next('/login')
        }
    }
}) 