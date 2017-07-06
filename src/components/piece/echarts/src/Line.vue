<template>
  <div class="eline">
    <e-chart :option="opt" :nodes="nodes"></e-chart>
  </div>
</template>

<script>
  import Mixins from './Mixins.js'
  import Merge from '../../../Merge.js'
  export default {
    name: 'ELine',
    props: {
      label: String,
      data: Array,
      lineColor: String,
      borderColor: {
        type: String,
        default: '#48bbc0'
      },
      linearg: {
        type: Array,
        default: _ => (['rgba(73, 97, 106, 1)', 'rgba(73, 97, 106, 0)'])
      },
      axis: {
        type: Object,
        default: () => ({
          axisLine: {
            lineStyle: {
              color: '#7f8da4'
            }
          },
          axisLabel: {
            textStyle: {
              fontSize: 14
            }
          }
        })
      }
    },
    computed: {
      opt () {
        return {
          tooltip: {
            trigger: 'axis',
            formatter: (a) => {
              return a[0].data[2]
            }
          },
          xAxis: Merge({
            type: 'time',
            splitLine: { show: false }
          }, this.axis),
          yAxis: Merge({
            type: 'value',
            boundaryGap: ['0%', '30%'],
            splitLine: { show: false }
          }, this.axis),
          series: [{
            name: this.label,
            type: 'line',
            smooth: true,
            data: this.data,
            sampling: 'average',
            itemStyle: {
              normal: {
                color: this.borderColor
              }
            },
            lineStyle: {
              normal: {
                color: this.borderColor
              }
            },
            areaStyle: {
              normal: {
                color: new window.echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: this.linearg[0]
                }, {
                  offset: 1,
                  color: this.linearg[1]
                }])
              }
            }
          }]
        }
      }
    },
    mixins: [Mixins]
  }
</script>
