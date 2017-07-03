<template>
  <div class='d3-line' v-resize="lazyResize">
    <svg class='d3-line-svg' :style='[stylew, styleh]'></svg>
  </div>
</template>

<script>
  import D3Mixin from '../mixins/D3Mixin.js'
  const D3 = window.d3
  if (!D3) throw new Error('D3 IS NOT FOUND')

  export default {
    name: 'D3Line',
    mixins: [D3Mixin],
    props: {
      data: {
        type: Array,
        required: true
      },
      yticks: {
        type: Number,
        default: 5
      },
      pathClass: {
        type: String,
        default: 'd3-line-path'
      },
      xClass: {
        type: String,
        default: 'd3-line-x'
      },
      yClass: {
        type: String,
        default: 'd3-line-y'
      },
      padding: {
        type: Object,
        default: () => ({
          left: 28,
          right: 20,
          top: 10,
          bottom: 20
        })
      }
    },
    data: () => ({
      h: null,
      w: null
    }),
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
        this.w = this.width || this.svgel.clientWidth
        this.h = this.height || this.svgel.clientHeight

        this.svg.attr('style', 'transform:translate(' + this.padding.left + 'px,' + this.padding.top + 'px)')

        this.scaleX = D3.scaleTime().rangeRound([0, this.axisw])
        this.scaleY = D3.scaleLinear().rangeRound([this.axish, 0])
        this.area = D3.area().x((d) => this.scaleX(d.date)).y1((d) => this.scaleY(d.value)).curve(D3.curveBasis)

        this.scaleX.domain(D3.extent(this.data, (d) => d.date))
        this.scaleY.domain([0, D3.max(this.data, (d) => d.value) * 2])
        this.area.y0(this.scaleY(0))

        this.path
          .datum(this.data)
          .attr('d', this.area)
        // 时间轴
        this.xAxis
          .attr('style', 'transform:translateY(' + this.axish + 'px)')
          .call(D3.axisBottom(this.scaleX).tickFormat((d) => {
            return D3.timeFormat('%H:%M:%S')(d)
          }))
        // y轴
        this.yAxis
          .call(D3.axisLeft(this.scaleY).ticks(this.yticks))
      },
      initVars () {
        this.svgel = this.$el.querySelector('svg')
        this.svg = D3.select(this.svgel).append('g')
        this.path = this.svg.append('path').attr('class', this.pathClass)
        this.xAxis = this.svg.append('g').attr('class', this.xClass)
        this.yAxis = this.svg.append('g').attr('class', this.yClass)

        this.resize()
      }
    },
    computed: {
      axish () {
        return this.h - this.padding.top - this.padding.bottom
      },
      axisw () {
        return this.w - this.padding.left - this.padding.right
      }
    },
    mounted () {
      this.initVars()
    }
  }
</script>
