
<template>
  <div class="box">
    <!-- 第一层 -->
    <el-menu
      active-text-color="#ffd04b"
      background-color="#ffffff"
      class="el-menu-vertical-demo"
      text-color="black"
      v-for="(item,index) in customRoutes"
      :key="index"
      :router="true"
      :unique-opened="true"
    >
      <el-menu-item :index="item.path" v-if="!item.espdutytabList.length">
        <span>{{item.title}}</span>
      </el-menu-item>
      <!-- 第二层 -->
      <el-sub-menu :index="index" v-else>
        <template #title>
          <span>{{item.title}}</span>
        </template>
        <el-menu-item-group v-for="(i,t) in item.espdutytabList" :key="t">
          <el-menu-item :index="i.path" v-if="!i.espdutytabList.length">{{i.title}}</el-menu-item>
          <el-sub-menu :index="index  + '-' + t" v-else>
            <template #title>
              <span>{{i.title}}</span>
            </template>
            <el-menu-item-group v-for="(y,z) in i.espdutytabList" :key="z">
              <el-menu-item :index="y.path">{{y.title}}</el-menu-item>
              <!-- 第三层 -->
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </div>
</template>
<script>
  export default {
    name:'aside',
  }
</script>
<script setup>
import {ref,onMounted,onBeforeMount} from "vue"
import {useStore} from "vuex"
import router from "@/router"

let customRoutes = ref([])
onBeforeMount(() => {
  customRoutes.value = JSON.parse(localStorage.getItem('Menu'))
  console.log(customRoutes,'customRoutes1')
})


</script>

<style lang="scss" scoped>
.box{
  height:100%;
  background:#f1f3f4
}
</style>
