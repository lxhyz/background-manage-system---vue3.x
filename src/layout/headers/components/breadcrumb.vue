<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="(item,index) in breadcrumbList" :key="index">
            <span v-if="index == breadcrumbList.length -1 " class="no-redirect">{{$t(`menus.${item.name}`)}}</span>
            <span v-else class="redirect" @click="handlerRedirect(item.path)">{{$t(`menus.${item.name}`)}}</span>
        </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import {watch,ref} from 'vue'
import {useRoute,useRouter} from 'vue-router'

const route = useRoute()
const router = useRouter()

const breadcrumbList = ref([])
watch(route,(value) => {
    breadcrumbList.value = value.matched
},{deep:true,immediate:true})

const handlerRedirect = (path) => {
    router.push(path)
}
</script>

<style lang="scss" scoped>
.no-redirect{
    color: #97a8be;
    cursor: text;
}
.redirect{
    color: #666;
    font-weight: 600;
    cursor: pointer;
    &:hover{
       color: skyblue; 
    }
}
</style>