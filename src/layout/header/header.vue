<template>
  <div class="box">
  	haeder组件
  </div>
</template>

<script setup>
import {ref,watch} from "vue"
import {useRouter,useRoute} from "vue-router"
const router = useRouter()
const route = useRoute()
let routeData = ref(route.matched)

watch(routeData.value,(value) => {
},{deep:true,immediate:true})

</script>

<style lang="scss" scoped>
.box{
  	width: 100%;
    background: white;
    overflow: hidden;
    height: 59px;
    box-shadow: 0 2px #f1f3f4;
}
</style>
