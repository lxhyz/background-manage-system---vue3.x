<template>
  <div class="headerBox">
    <img src="@/assets/images/logo.jpg" alt="" class="logoBox">
    <div class="leftCont">
      <div v-for="(item,index) in sort" :key="index" :class="['modlesValue',markIndex == index ? 'scrollStyle' : '']">
        {{item.value}}
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref,reactive} from 'vue'
let sort = reactive([
  {value:'首页',label:0},
  {value:'关于我们',label:1},
  {value:'平台简介',label:2},
  {value:'客户案例',label:3},
  {value:'商务合作',label:4},
])
let markIndex = ref(0)
</script>

<style lang="scss" scoped>
.headerBox{
  position:fixed;
  display: flex;
  align-items:center;
  height: 100px;
  width:100%;
  line-height: 100px;
  z-index:99;
  .logoBox{
    width:140px;
    background-size:auto;
  }
  .leftCont{
    display: flex;
    justify-content: flex-end;
    flex:1;
    height:100%;
    // background:skyblue;
    .modlesValue{
      width:100px;
      height:100%;
      color:white;
    }
    .modlesValue:hover{
      background:#0dbc5c;
      cursor:pointer;
    }
    .scrollStyle{
      border-bottom:2px solid #1e1e1e
    }
  }
}
</style>
