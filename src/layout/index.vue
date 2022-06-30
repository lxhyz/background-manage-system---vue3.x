<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <Aside/>
      </el-aside>
      <el-container>
        <el-header class="header">
          <Header/>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Header from "./header/header.vue"
import Aside from "./aside/index.vue"
</script>

<style lang="scss" scoped>
.header{
  padding: 0 !important;
}
</style>
