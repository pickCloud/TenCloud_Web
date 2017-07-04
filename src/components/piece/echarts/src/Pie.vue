<template>
  <div class="epie">
    <e-chart :option="opt" :nodes="nodes"></e-chart>
  </div>
</template>

<script>
  import Mixins from './Mixins.js'
  export default {
    name: 'EPie',
    props: {
      label: Array,
      data: Array
    },
    computed: {
      opt () {
        return {
          tooltip: {
            trigger: 'item',
            formatter: '{b} : {c} ({d}%)'
          },
          legend: {
            left: 'center',
            data: this.label,
            textStyle: {
              color: '#7f8da4'
            },
            top: '70%'
          },
          series: [
            {
              type: 'pie',
              radius: '50%',
              center: ['50%', '30%'],
              data: this.data,
              label: {
                normal: {
                  formatter: '{b} {d}%'
                }
              }
            }
          ]
        }
      }
    },
    mixins: [Mixins]
  }
</script>
