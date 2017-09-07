<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'swiper',
    props: {
      options: {
        type: Object,
        required: true
      },
      name: {
        type: String
      }
    },
    mounted () {
      this.swiper = new window.Swiper(this.$el, this.options)
      this.$nextTick(_ => {
        this.swiper.update()
      })
      if (this.name) {
        if (!this.$parent.swipers) this.$parent.swipers = {}
        this.$parent.swipers[this.name] = this.swiper
      }
    },
    beforeDestroy () {
      if (this.swiper) {
        this.swiper.destroy()
        if (this.$parent.swipers) delete this.$parent.swipers[this.name]
        delete this.swiper
      }
    }
  }
</script>
