<template>
  <div class="echarts" v-resize="resize"></div>
</template>

<script>
  export default {
    name: 'MChart',
    props: {
      option: Object,
      nodes: {
        type: Number,
        default: 60
      }
    },
    watch: {
      'option': {
        handler (n, o) {
          this.$EChart.setOption(n)
        },
        deep: true
      }
    },
    methods: {
      update (d, m = false, i = 0) {
        let tempd = this.option.series[i].data
        if (m) {
          d.forEach((v, i) => {
            if (tempd.length >= this.nodes) tempd.shift()
            tempd.push(v)
          })
        } else {
          if (tempd.length >= this.nodes) tempd.shift()
          tempd.push(d)
        }
      },
      resize () {
        if (this.$EChart) this.$EChart.resize()
      }
    },
    mounted () {
      this.$EChart = window.echarts.init(this.$el)
      if (this.option) this.$EChart.setOption(this.option)
    },
    beforeDestroy () {
      this.$EChart.dispose()
    }
  }
</script>

<style lang="scss" src="./style.scss"></style>
