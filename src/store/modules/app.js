// as 起别名
import {login as loginApi} from '@/api/login.js'
import router from '@/router'
import {setTokenTime} from '@/utils/auth'
export default {
    namespaced:true,
    state:() => ({
        token:localStorage.getItem('token') || '',
        sliderType:true,
        lang:localStorage.getItem('lang') || 'zh'
    }),
    mutations:{
        setToken(state,token){
            state.token = token
            localStorage.setItem('token',token)
        },
        changeSliderType(state){
            state.sliderType = !state.sliderType
        },
        changeLang(state,lang){
            state.lang = lang
        } 
    },
    actions:{
        login({commit},userInfo){
            return new Promise((resolve,reject) => {
                loginApi(userInfo).then(res =>{
                    commit('setToken',res.token)
                    setTokenTime()
                    router.replace('/users')
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },
        logout({commit},value){
            commit('setToken','')
            localStorage.clear()
            router.replace('/login')
        }
    }

}