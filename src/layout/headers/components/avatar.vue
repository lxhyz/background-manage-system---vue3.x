<template>
    
    <el-dropdown>
       <el-avatar shape="square" :src="squareUrl" :size="40" class="el-dropdown-link">
            <arrow-down />
       </el-avatar>
        <template #dropdown>
        <el-dropdown-menu>
            <el-dropdown-item @click="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup>
import {ref} from "vue"
import { useStore } from "vuex";
const store = useStore()
const squareUrl = ref('https://img0.baidu.com/it/u=1746145504,446582075&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400')
const logout = () => {
    store.dispatch('app/logout')
}
</script>

<style lang="scss" scoped>

</style>