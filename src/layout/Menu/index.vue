<template>
    <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        :default-active="defaultActive"
        text-color="#fff"
        router
        unique-opened
        :collapse="!$store.getters.sliderType"
        >
        <el-sub-menu :index="item.id" v-for="(item,index) in menusList" :key="index">
            <template #title>
                <el-icon>
                    <component :is="iconList[index]"></component>
                </el-icon>
                <span>{{item.authName}}</span>
            </template>
            <el-menu-item :index="'/' + childItem.path" v-for="(childItem,childIndex) in item.children" :key="childIndex" @click="savePath">
                <el-icon>
                    <component :is="icon[index][childIndex]"></component>
                </el-icon>
                <span>{{$t(`menus.${childItem.path}`)}}</span>
            </el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>

<script setup>
import router from "@/router"
import {ref,onMounted,computed} from 'vue'
import {menuList} from "@/api/menu"
// import variables from "@/styles/variables.scss"

const iconList = ref(['user','setting','shop','tickets','pie-chart'])

const icon = ref([['Avatar'],['Edit','EditPen'],['Dessert','ColdDrink','Burger'],['List'],['Odometer']])

const defaultActive = ref(sessionStorage.getItem('path') ||  '/users')


const menusList = ref({})

const initMenusList = async () => {
    menusList.value = await menuList()
    // defaultActive.value = '/' + menusList.value[0].children[0].path
}

const savePath = (event) => {
    sessionStorage.setItem('path',event.index)
}

onMounted(() => {
    initMenusList()
})
</script>

<style lang="scss" scoped>

</style>