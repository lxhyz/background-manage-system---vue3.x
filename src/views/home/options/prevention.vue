<template>
  <div class="dataShowBox">
      <div class="top">
        <span class="title">预警消息</span>
      </div>
      <el-divider border-style="double" style="marign:0 !important"/>
      <div class="bottomContent">
        <el-empty :image-size="60" class="elEmpty"/>
      </div>
  </div>
</template>

<script setup>
import {ref,reactive} from "vue"
const selectValue = ref("")
const options = reactive([
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  }
])

</script>

<style lang="scss" scoped>
    .dataShowBox{
      width:95%;
      border:1px solid #ccc;
      border-radius:4px;
      height:140px;
      .top{
        display: flex;
        align-items: center;
        height: 40px;
        padding: 0 20px;
        .title{
          font-weight: 600;
        }
      }
      .el-divider{
        margin:0;
      }
      .bottomContent{
        padding: 0 40px;
        .elEmpty{
          padding:0 !important;
        }
      }
    }
</style>
