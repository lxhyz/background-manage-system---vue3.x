<template>
    <div @click="handlerFullScreen">
        <el-icon><Rank /></el-icon>
    </div>
</template>

<script setup>
import screenfull from 'screenfull';

const handlerFullScreen = () => {
    if(screenfull.isEnabled){
        screenfull.toggle()
    }
}
</script>

<style lang="scss" scoped>

</style>