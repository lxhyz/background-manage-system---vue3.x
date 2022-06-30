<template>
  <!-- <Header/>
  <Swiper/> -->
  <div class="loginBox">
    <img src="@/assets/images/home.svg" alt="">
    <div class="loginContent">
      <img src="@/assets/images/homeLogin.png" alt="">
      <div class="loginForm">
        <h5>GO - LOGIN</h5>
        <div class="formBox">
          <el-form
            label-width="0"
            :model="formTable"
            style="max-width: 460px"
            ref="rulesFormRef"
            :rules="rules"
          >
            <el-form-item size="large" prop="user">
              <el-input v-model="formTable.user" placeholder="用户名" class="w-50 m-2"/>
            </el-form-item>
            <el-form-item size="large" prop="password">
              <el-input v-model="formTable.password" placeholder="密码"/>
            </el-form-item>
          </el-form>
          <el-button type="primary" class="loginBtn" @click="handlerLogin(rulesFormRef)">登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref,reactive} from 'vue'
import {useStore} from "vuex"
import {useRouter} from "vue-router"
import {login} from "@/api/index"
import Header from "./component/header.vue"
import Swiper from "./component/swiper.vue"

let store = useStore()
let router = useRouter()

let formTable = reactive({
  user: 'admin',
  password: '12345678',
})
let rulesFormRef = ref()

let rules = reactive({
  user:[
    {required:true,message:"请输入合法用户名",trigger:'blur'}
  ],
  password:[
    {required:true,message:'请输入合法密码',trigger:'blur'},
    {min:5,max:8,message:'请输入5~8位由数组加字母组成的密码',trigger:'blur'}
  ]
})

const handlerLogin = (formRules) => {
    formRules.validate(async (valid) => {
      if(valid){
        await login({user:formTable.user,password:formTable.password}).then(res => {
          let {data:{access_token}} = res
          if(access_token){
            store.commit('user/TOKEN',access_token)
            router.replace({name:"enterpriseManage"})
          }
        })
      }
    })
}

</script>

<style lang="scss" scoped>
.loginBox{
  width: 100%;
  height: 100vh;
  background-color: #eee;
  img{
    width: 100%;
    height: 100%;
  }
  .loginContent{
    position: absolute;
    width: 94%;
    height: 94%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: #fffc;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 20px 60px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    img{
      width: 45%;
      height: 60%;
    }
    .loginForm{
      padding: 20px;
      background: #fff;
      width: 30%;
      height: 50%;
      border-radius: 10px;
      box-shadow: 2px 3px 7px #0003;
      h5{
        font-weight: 600;
        font-size: 24px;
      }
      .formBox{
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 30px;
        margin-top: 10%;
      }
      .loginBtn{
        width: 20%;
        height: 40px;
        margin-top: 10%;
      }
    }
  }
}
</style>
