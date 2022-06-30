<template>
  <div class="block text-center" m="t-4">
    <el-carousel trigger="click" height="800px">
      <el-carousel-item v-for="item in 1" :key="item">
        <div class="imgBox">
          <img src="@/assets/images/img01.jpg">
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
  .imgBox{
    width: 100%;
    height: 100%;
    img{
      width:auto;
      max-width:100%;
      height: 100%;
    }
  }
}


</style>
