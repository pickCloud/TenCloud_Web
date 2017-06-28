<template>
  <div class="d3-pies" v-resize="lazyResize">
    <svg class='d3-pies-svg' :style='[stylew, styleh]'></svg>
    <div class="d3-pies-label-wrap">
      <div class="d3-pies-label" v-for="item in data">
        <span class="d3-pies-icon" :style="'background-color:'+item.color"></span>
        <span>{{item.name}}</span>
        <span class="d3-pies-p">{{getp(item.value)}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import D3Mixins from '../mixins/D3Mixin.js'
  const D3 = window.d3
  if (!D3) throw new Error('D3 IS NOT FOUND')

  export default {
    name: 'D3Pies',
    mixins: [D3Mixins],
    props: {
      fixed: Number,
      hasText: Boolean,
      data: {
        type: Array,
        required: true
      },
      border: {
        type: Number,
        default: 2
      },
      outScale: {
        type: Number,
        default: 0.75
      }
    },
    watch: {
      data (n, o) {
        this.resize()
      }
    },
    methods: {
      lazyResize () {
        if (this.timeout) clearTimeout(this.timeout)
        this.timeout = setTimeout(_ => {
          this.resize()
          clearTimeout(this.timeout)
          this.timeout = null
        }, 500)
      },
      resize () {
        // 获取半径
        this.radius = (this.sizeh || Math.min(this.svgel.clientWidth, this.svgel.clientHeight)) * 0.5
        // 获取饼状数据
        this.pie.value((d) => d.value).sort((a, b) => (a.value - b.value))
        // 获取最大比例
        let max = D3.max(this.data, (d) => d.vr)
        // 获取最大半径
        let maxradius = (this.radius - this.border) / max
        // 外圈
        this.outArc.innerRadius(this.radius * 0.5)
        // 片
        let slice = this.svg
          .attr('transform', 'translate(' + this.svgel.clientWidth / 2 + ',' + this.svgel.clientHeight / 2 + ')')
          .select('.slices')
          .selectAll('path')
          .data(this.pie(this.data))
        slice
          .enter().append('path')
          .attr('class', 'd3-pies-path')
          .attr('fill', (d) => d.data.color)
          .attr('d', (d) => this.arc.outerRadius(maxradius * d.data.vr)(d))
//        slice
//          .transition()
//          .duration(750)
//          .attrTween('d', (d) => {
//            console.log(d)
//            return (t) => {
//              return this.arc.outerRadius(maxradius * d.data.vr)(d)
//            }
//          })
        slice.exit().remove()

        if (!this.hasText) return
        let text = this.svg
          .select('.texts')
          .selectAll('text')
          .data(this.pie(this.data))
        text.enter().append('text')
          .attr('class', (d, i) => ('d3-pies-text d3-pies-text-' + i))
          .attr('transform', (d) => 'translate(' + this.outArc.outerRadius(maxradius * d.data.vr * this.outScale).centroid(d) + ')')
          .text((d) => this.getp(d.data.value))
        text.exit().remove()
      },
      initVars () {
        this.svgel = this.$el.querySelector('svg')
        this.svg = D3.select(this.svgel).append('g')
        // 定义片组
        this.svg.append('g').attr('class', 'slices')
        // 定义文字组
        this.svg.append('g').attr('class', 'texts')
        this.arc = D3.arc().innerRadius(0)
        this.outArc = D3.arc()
        this.pie = D3.pie()
        this.resize()
      },
      getp (v) {
        return (v * 100 / this.sum).toFixed(this.fixed) + '%'
      }
    },
    computed: {
      sum () {
        return this.data.reduce((a, b) => (a + b.value), 0)
      }
    },
    mounted () {
      this.initVars()
    }
  }
</script>
