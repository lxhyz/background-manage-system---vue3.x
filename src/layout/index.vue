<template>
   <div class="app-wrapper">
    <el-container>
      <el-aside :width="asiderWidth" class="siderbar-container">
          <Menu/>
      </el-aside>
      <el-container class="container" :class="{hidderContainer : !$store.getters.sliderType}">
        <el-header>
          <headers/>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Menu from './Menu' 
import headers from './headers' 
import {computed} from 'vue'
import { useStore } from 'vuex';

const store = useStore()
const asiderWidth = computed(() => {
  return store.getters.sliderType ? '210px' : '67px'
})

</script>
<style lang="scss" scoped>
.app-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.siderbar-container{
    height: 100vh;
    background: #545c64;
    .el-menu{
      border:0px solid red !important;
    }
}
.container {
  width: calc(100% - $sideBarWidth);
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  transition: all 0.28s;
  &.hidderContainer {
    width: calc(100% - $hideSideBarWidth);
  }
}
::v-deep .el-header {
  padding: 0;
}
</style>