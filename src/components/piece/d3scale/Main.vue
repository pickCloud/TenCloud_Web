<template>
  <div class="d3-scale">
    <svg class="d3-scale-svg" :style="[stylew, styleh]" v-resize="lazyResize"></svg>
    <slot>
      <div class="d3-pies-label-wrap" v-if="legend">
        <div class="d3-pies-label">
          <span class="d3-pies-icon" :style="'background-color:'+legend.color"></span>
          <span>{{legend.name}}</span>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
  import D3Mixin from '../mixins/D3Mixin.js'
  const D3 = window.d3
  if (!D3) throw new Error('D3 IS NOT FOUND')

  export default {
    name: 'D3Scale',
    mixins: [D3Mixin],
    props: {
      fixed: Number,
      hideText: Boolean,
      data: {
        type: Object,
        required: true
      },
      bgClass: {
        type: String,
        default: 'd3-scale-bg'
      },
      pgClass: {
        type: String,
        default: 'd3-scale-pg'
      },
      duration: {
        type: Number,
        default: 750
      },
      border: {
        type: Number,
        default: 2
      }
    },
    watch: {
      scale (n, o) {
        if (n !== o) this.resize()
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
        // 半径
        this.radius = (this.sizeh || Math.min(this.svgel.clientWidth, this.svgel.clientHeight)) * 0.5
        // 设置arc
        this.arc.innerRadius(this.radius - this.border).outerRadius(this.radius).startAngle(0)
        // 对齐
        this.svg.attr('transform', 'translate(' + this.svgel.clientWidth / 2 + ',' + this.svgel.clientHeight / 2 + ')')
        // 圆
        let pi2 = Math.PI * 2
        //
        this.svg.select('.' + this.bgClass).attr('d', this.arc)
        this.svg.select('.' + this.pgClass)
          .transition()
          .duration(this.duration)
          .attrTween('d', (d) => {
            let interpolate = D3.interpolate(d.endAngle, this.scale * pi2)
            return (t) => {
              d.endAngle = interpolate(t)
              if (this.txt) this.txt.text((d.endAngle * 100 / pi2).toFixed(this.fixed) + '%')
              return this.arc.cornerRadius(this.border * 10)(d)
            }
          })
      },
      initVars () {
        this.svgel = this.$el.querySelector('svg')
        this.svg = D3.select(this.svgel).append('g')
        this.svg.append('path').attr('class', this.bgClass).datum({endAngle: Math.PI * 2})
        this.svg.append('path').attr('class', this.pgClass).datum({endAngle: 0})
        this.arc = D3.arc()

        if (!this.hideText) {
          this.txt = this.svg.append('text')
            .attr('class', 'd3-scale-text')
        }
        this.resize()
      }
    },
    computed: {
      scale () {
        return this.scaleValue[0] / this.scaleValue.reduce((a, b) => (a + b), 0)
      },
      scaleValue () {
        return this.data.value
      },
      legend () {
//        console.log(this.data.legend)
        return this.data.legend
      }
    },
    mounted () {
      this.initVars()
    }
  }
</script>
