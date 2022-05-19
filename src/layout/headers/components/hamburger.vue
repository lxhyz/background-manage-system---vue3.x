<template>
    <div class="hamburger-container" @click="toggleClick" id="hamburger">
        <el-icon :size="24">
            <component :is="icon" ></component>
        </el-icon>
    </div>
</template>

<script setup>
import {ref,computed} from 'vue'
import {useStore} from 'vuex'

const store = useStore()

const icon = computed(() => {
    return store.getters.sliderType ? 'Fold' : 'Expand' 
})

const toggleClick = () => {
    store.commit('app/changeSliderType')
}
</script>

<style lang="scss" scoped>
.hamburger-container{
    margin-left: 16px;
    box-sizing: border-box;
    cursor: pointer;
    margin-right: 20px;
}
</style>