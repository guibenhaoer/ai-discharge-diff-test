<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';

const pieChartRef = ref<HTMLDivElement | null>(null);
const barChartRef = ref<HTMLDivElement | null>(null);
const lineChartRef = ref<HTMLDivElement | null>(null);
const radarChartRef = ref<HTMLDivElement | null>(null);

onMounted(() => {
  if (pieChartRef.value) {
    const pieChart = echarts.init(pieChartRef.value);
    pieChart.setOption({
      title: {
        text: '测试饼图',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        bottom: '10%'
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: '搜索引擎' },
            { value: 735, name: '直接访问' },
            { value: 580, name: '邮件营销' },
            { value: 484, name: '联盟广告' },
            { value: 300, name: '视频广告' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    });
  }

  if (barChartRef.value) {
    const barChart = echarts.init(barChartRef.value);
    barChart.setOption({
      title: {
        text: '测试柱状图',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }
      ]
    });
  }

  if (lineChartRef.value) {
    const lineChart = echarts.init(lineChartRef.value);
    lineChart.setOption({
      title: {
        text: '测试折线图',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    });
  }

  if (radarChartRef.value) {
    const radarChart = echarts.init(radarChartRef.value);
    radarChart.setOption({
      title: {
        text: '测试雷达图',
        left: 'center'
      },
      tooltip: {},
      radar: {
        indicator: [
          { name: '销售', max: 6500 },
          { name: '管理', max: 16000 },
          { name: '信息技术', max: 30000 },
          { name: '客服', max: 38000 },
          { name: '研发', max: 52000 },
          { name: '市场', max: 25000 }
        ]
      },
      series: [
        {
          name: '预算 vs 开销',
          type: 'radar',
          data: [
            {
              value: [4300, 10000, 28000, 35000, 50000, 19000],
              name: '预算'
            },
            {
              value: [5000, 14000, 28000, 31000, 42000, 21000],
              name: '开销'
            }
          ]
        }
      ]
    });
  }
});
</script>

<template>
  <div>
    <h1>图表页面</h1>
    <div ref="pieChartRef" style="margin-top: 20px; width: 100%; max-width: 600px; height: 400px;"></div>
    <div ref="barChartRef" style="margin-top: 20px; width: 100%; max-width: 600px; height: 400px;"></div>
    <div ref="lineChartRef" style="margin-top: 20px; width: 100%; max-width: 600px; height: 400px;"></div>
    <div ref="radarChartRef" style="margin-top: 20px; width: 100%; max-width: 600px; height: 400px;"></div>
  </div>
</template>

<style scoped>
/* Add any page-specific styles here */
</style>