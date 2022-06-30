<template>
  <div class="dataShowBox">
      <div class="top">
        <span class="title">交易动态</span>
        <el-select v-model="selectValue"  placeholder="请选择" size="mini" class="select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-tag class="ml-2" type="info">最新交易订单</el-tag>
      </div>
      <el-divider border-style="double" style="marign:0 !important"/>
      <div class="bottomContent">
        <div class="child">
          <p>成交金额</p>
          <text class="value">302<i>元</i></text>
        </div>
        <div class="child">
          <p>成交金额</p>
          <text class="value">302<i>元</i></text>
        </div>
        <div class="child">
          <p>成交金额</p>
          <text class="value">302<i>元</i></text>
        </div>
        <div class="orderCotent">
          <p>订单数量</p>
          <text class="value">42笔</text>
        </div>
        <div class="orderCotent">
          <p>订单数量</p>
          <text class="value">42笔</text>
        </div>
        <div class="orderCotent">
          <p>订单数量</p>
          <text class="value">42笔</text>
        </div>
        <div class="orderCotent">
          <p>订单数量</p>
          <text class="value">42笔</text>
        </div>
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
      height:100px;
      margin-bottom: 20px;
      .top{
        display: flex;
        align-items: center;
        height: 40px;
        padding: 0 20px;
        .title{
          font-weight: 600;
        }
        .select{
          margin:0 20px;
        }
        ::v-deep .el-input__wrapper{
          width: 100px;
          height: 25px;
        }
      }
      .el-divider{
        margin:0;
      }
      .bottomContent{
        display: flex;
        align-items: center;
        height: 58%;
        padding: 0 40px;

        .child{
            padding: 10px 50px;
            border-right: 1px solid #ccc;
            p{
              padding-bottom: 8px;
            }
            .value{
              color:skyblue;
              i{
                color:black;
                margin-left: 4px;
              }
            }
        }
        .orderCotent{
          margin-left: 20px;
          padding-right: 108px;
          p{
            padding-bottom: 8px;
          }
          .value{
            font-size: 15px;
          }
        }
      }
    }
</style>
