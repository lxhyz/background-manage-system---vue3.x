<template>
    <div class="login-container">
        <el-form ref="formRef" :model="form" class="loginInfo" :rules="rules">
            <div class="title-container">
                <h3 class="title">
                    {{$t('login.title')}}
                </h3>
            </div>
            <el-form-item class="itm-contianer" prop="username">
                <el-input v-model="form.username" :prefix-icon="Search" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item class="itm-contianer" prop="password">
                <el-input v-model="form.password" :prefix-icon="Search" show-password placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item class="itm-contianer">
                <div class="loginBtn">
                    <el-button type="primary" class="btn" @click="handlerLogin">{{$t('login.btnTitle')}}</el-button>
                </div>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import {useStore} from 'vuex'
import {ZoomOut,Search} from '@element-plus/icons-vue'
import { tupleExpression } from '@babel/types';
import {login} from '@/api/login.js'
const store = useStore()
let form = ref({
    username:'',
    password:''
})
let rules = ref({
    username:[{required:true,message:'请输入合法用户名',tirgger:blur}],
    password:[{required:true,message:'请输入合法密码',tirgger:blur}]
})

let formRef = ref(null)


let handlerLogin = () => {
    formRef.value.validate(async (valid) => {
        if(valid){
        //    await login(form.value).then(res => {
        //        console.log(res,'res');
        //    }).catch(err => {
        //        console.log(err,'err');
        //    })
        store.dispatch('app/login',form.value)
        }
    })
}
</script>

<style lang="scss" scoped>
    .login-container{
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgb(53, 66, 80);
        width: 100%;
        height: 100%;
        .loginInfo{
            width: 30%;
            .title-container{
                text-align: center;
                .title{
                    color: white;
                }
            }
            .itm-contianer{
                flex-wrap: nowrap !important;
                margin-top: 30px;
                .svg-container{
                    position: absolute;
                    top: 24%;
                    left: 10px;
                    z-index: 99;
                }
                .loginBtn{
                    width: 100%;
                    text-align: center;
                    .btn{
                        width: 120px;
                    }
                }
            }
        }
    }
</style>