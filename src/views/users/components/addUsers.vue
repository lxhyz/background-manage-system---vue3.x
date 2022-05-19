<template>
    <el-dialog
        :model-value="dialogVisible"
        :title="dialogTitle"
        width="40%"
    >
        <el-form ref="formRef" :model="form" :rules="rules" label-width="70px">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="form.username" />
            </el-form-item>
            <el-form-item label="密码" prop="password" v-if="dialogTitle == '添加用户'">
                <el-input v-model="form.password" type="pwssword"/>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="form.email" />
            </el-form-item>
            <el-form-item label="电话" prop="mobile">
                <el-input v-model="form.mobile" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="handleCancel">取消</el-button>
                <el-button type="primary" @click="handleConfirm">确定</el-button
                >
            </span>
        </template>
    </el-dialog>
</template>
<script>
export default{
    name:'addUsers'
}
</script>
<script setup>
import {ref,defineEmits,defineProps,watch } from "vue"
import { ElMessage } from 'element-plus'
import {addUser,editUser} from "@/api/user.js"
const emits = defineEmits(['update:modelValue','initUserList'])
const props = defineProps({
    dialogTitle:{
        typeof:String,
        default:'添加用户(默认)'
    },
    userInfo:{
        typeof:Object,
        default:() => {}
    }
})

const formRef = ref(null)
let form = ref({
    username:'',
    password:'',
    email:'',
    mobile:''
})

watch(props.userInfo,(val) => {
    if(JSON.stringify(val) != '{}'){
        form.value = val
    }
},{deep:true,immediate:true})

let rules = ref({
    username:[{required:true,message:'请输入用户名',tirgger:blur}],
    password:[{required:true,message:'请输入密码',tirgger:blur}],
    email:[{required:true,message:'请输入邮箱',tirgger:blur}],
    mobile:[{required:true,message:'请输入电话',tirgger:blur}],
})

const handleCancel = () => {
    emits('update:modelValue',false)
}

const handleConfirm = () => {
    formRef.value.validate(async (vaild) => {
        if(vaild){
            if(props.dialogTitle == '添加用户' ){
                await addUser(form.value).then(res => {
                    emits('initUserList')
                })
            }
            if(props.dialogTitle == '编辑用户'){
                await editUser(form.value).then(res => {
                    emits('initUserList')
                })
            }
            emits('update:modelValue',false)
            
        }
    })
}
</script>

<style lang="scss" scoped>

</style>