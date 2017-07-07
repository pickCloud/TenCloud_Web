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
      data: Array,
      lineColor: String,
      series: Array,
      colors: {
        type: Array,
        default: _ => ([['#48bbc0', 'rgba(73, 97, 106, 1)', 'rgba(73, 97, 106, 0)']])
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
//        console.log(this.seriesFormat)
        return {
          tooltip: {
            trigger: 'axis',
            formatter: (a) => {
              return a[0].data[2]
            },
            padding: 0,
            backgroundColor: 'rgba(0,0,0,0.8)',
            textStyle: {
              color: '#7f8da4'
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
          series: this.seriesFormat
        }
      },
      seriesFormat () {
//        console.log(this.colors)
        return this.series.map((v, i) => {
//          console.log(this.colors[i])
          return Merge({
//            name: this.label,
            type: 'line',
            smooth: true,
//            data: this.data,
            sampling: 'average',
            itemStyle: {
              normal: {
                color: this.colors[i][0]
              }
            },
            lineStyle: {
              normal: {
                color: this.colors[i][0]
              }
            },
            areaStyle: {
              normal: {
                color: new window.echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: this.colors[i][1]
                }, {
                  offset: 1,
                  color: this.colors[i][2]
                }])
              }
            }
          }, v)
        })
      }
    },
    mixins: [Mixins]
  }
</script>
