<template>
  <div class="box">
    <div class="leftContent">
      <ShowData/>
      <Prevention/>
      <OrderEcharts/>
      <BottomChart/>
    </div>
    <div class="rightContent">
      <div class="title">我的概况</div>
      <div class="goodsBox">
        <div class="topBox">
          <p>在售商品：0个</p>
          <p>在库商品：0</p>
          <p>回收站：0</p>
          <p>分销商：0个</p>
        </div>
        <div class="bottomBox">
          <p>累计订单：59个</p>
          <p>累计销售：61个</p>
          <p>累计金额：302.5元</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
   name:'Home',
  }
</script>
<script setup>
import {onMounted} from "vue"
import {useRouter,useRoute} from "vue-router"
import ShowData from "./options/showData.vue"
import Prevention from "./options/prevention.vue"
import OrderEcharts from "./options/orderEcharts.vue"
import BottomChart from "./options/bottomChart.vue"

const router = useRouter()
const route = useRoute()

  onMounted(() => {
    console.log(route.matched,'router')
  })




</script>

<style lang="scss" scoped>
	.box{
		display:flex;
		height: 100%;
		.leftContent{
			width:90%;
		}
		.rightContent{
			flex:1;
      .title{
        text-align: left;
        display: flex;
        align-items: center;
        font-weight: 600;
      }
      .title::before{
        content: "";
        display: inline-block;
        width: 2px;
        height: 30px;
        margin-right: 5px;
        background-color: #407ec9;
      }
      .goodsBox{
        width: 100%;
        height: 400px;
        border: 1px solid #ccc;
        border-radius: 6px;
        margin-top: 20px;
        text-align: center;
        font-size: 16px;
        padding: 30px 0;
        :first-child,
        :nth-child(1){
          line-height: 30px;
        }
        .topBox{
          padding-bottom: 20px;
          border-bottom: 1px solid #ccc;
        }
        .bottomBox{
          padding-top: 20px;
          line-height: 30px;
        }
      }
		}
	}
</style>
