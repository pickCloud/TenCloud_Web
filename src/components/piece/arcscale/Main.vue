<template>
  <div class="arc-scale">
    <svg class="arc-scale-svg" :style="[stylew, styleh]" v-resize="initPos">aaa</svg>
    <slot></slot>
  </div>
</template>

<script>
  const D3 = window.d3
  if (!D3) throw new Error('D3 IS NOT FOUND')

  export default {
    name: 'ArcScale',
    props: {
      width: Number,
      height: Number,
      fixed: Number,
      hideText: Boolean,
      duration: {
        type: Number,
        default: 750
      },
      scale: {
        type: Number,
        default: 0.5
      },
      border: {
        type: Number,
        default: 2
      }
    },
    watch: {
      scale (n, o) {
        if (n !== o) this.ani()
      }
    },
    methods: {
      ani () {
        let pi2 = Math.PI * 2
        this.progress.transition()
          .duration(this.duration)
          .attrTween('d', (d) => {
            let interpolate = D3.interpolate(d.endAngle, this.scale * pi2)
            return (t) => {
              d.endAngle = interpolate(t)
              if (this.txt) this.txt.text((d.endAngle * 100 / pi2).toFixed(this.fixed))
              return this.arc(d)
            }
          })
      },
      initSvg () {
        let {arc, g} = this
        this.bg = g.append('path')
          .datum({endAngle: 2 * Math.PI})
          .attr('class', 'arc-bg')
          .attr('d', this.arc)

        this.progress = g.append('path')
          .datum({endAngle: 0})
          .attr('class', 'arc-progress')
          .attr('d', arc.cornerRadius(this.border * 10))

        if (!this.hideText) {
          this.txt = this.g.append('text')
            .attr('class', 'arc-text')
        }
      },
      initPos () {
        this.r = Math.min(this.svgel.clientWidth, this.svgel.clientHeight)
        this.arc.innerRadius((this.r / 2) - this.border).outerRadius(this.r / 2).startAngle(0)
        this.g.attr('style', 'transform:translate(' + this.svgel.clientWidth / 2 + 'px,' + this.svgel.clientHeight / 2 + 'px)')

        if (this.progress) this.progress.attr('d', this.arc.cornerRadius(this.border * 10))
        if (this.bg) this.bg.attr('d', this.arc)
      }
    },
    computed: {
      stylew () {
        let style = {}
        if (this.width) {
          style.width = this.width + 'px'
        }
        return style
      },
      styleh () {
        let style = {}
        if (this.height) {
          style.height = this.height + 'px'
        }
        return style
      }
    },
    mounted () {
      this.arc = D3.arc()
      this.svgel = this.$el.querySelector('svg')
      this.g = D3.select(this.svgel).append('g')
      this.initPos()
      this.initSvg()
      this.ani()
    }
  }
</script>

<style lang='scss'>
  .arc-scale-svg {
    width: 100%;
    height: 100%;
    margin-bottom: 24px;
  }
  .arc-bg {
    fill: #ddd;
  }
  .arc-progress {
    fill: orange;
  }
  .arc-text {
    text-anchor: middle;
    dominant-baseline: middle;
  }
</style>
