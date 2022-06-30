<template>
  <div class="orderEcharts">
    <div class="days">
      <el-button type="primary">近三天</el-button>
      <el-button type="primary">近七天</el-button>
      <el-button type="primary">自定义</el-button>
    </div>
    <div id="orderBox"></div>
  </div>
</template>

<script setup>
	import { getCurrentInstance,onMounted } from 'vue'
   const instance = getCurrentInstance()
	const echarts = instance.appContext.config.globalProperties.$echarts // 全局属性 --->详情看man.js挂载的$echarts

  // 创建echarts图标
  const markOrderEcharts =() => {
    const colors = ['#5470C6', '#91CC75', '#EE6666'];
    var chartDom = echarts.init(document.getElementById('orderBox'))
    let option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      // toolbox: {
      //   feature: {
      //     dataView: { show: true, readOnly: false },
      //     magicType: { show: true, type: ['line', 'bar'] },
      //     restore: { show: true },
      //     saveAsImage: { show: true }
      //   }
      // },
      legend: {
        data: ['Evaporation', 'Precipitation', 'Temperature']
      },
      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisPointer: {
            type: 'shadow'
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'Precipitation',
          min: 0,
          max: 250,
          interval: 50,
          axisLabel: {
            formatter: '{value} ml'
          }
        },
        {
          type: 'value',
          name: 'Temperature',
          min: 0,
          max: 25,
          interval: 5,
          axisLabel: {
            formatter: '{value} °C'
          }
        }
      ],
      series: [
        {
          name: 'Evaporation',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value) {
              return value + ' ml';
            }
          },
          data: [
            2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
          ]
        },
        {
          name: 'Precipitation',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value) {
              return value + ' ml';
            }
          },
          data: [
            2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
          ]
        },
        {
          name: 'Temperature',
          type: 'line',
          yAxisIndex: 1,
          tooltip: {
            valueFormatter: function (value) {
              return value + ' °C';
            }
          },
          data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
      ]
    };
    option && chartDom.setOption(option);
  }

  onMounted(() => {
    markOrderEcharts()
  })
</script>

<style lang="scss" scoped>
  .orderEcharts{
    width: 95%;
    margin-top: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    min-height:200px ;
    padding: 20px 0;
    padding-left: 20px;
    box-sizing: border-box;
    .days{
      display: flex;
      height: 20%;
    }
    #orderBox{
      width: 100%;
      height: 280px;
    }
  }
</style>
