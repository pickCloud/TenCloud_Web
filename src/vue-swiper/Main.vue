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
      }
    },
    mounted () {
      this.swiper = new window.Swiper(this.$el, this.options)
      this.$nextTick(_ => {
        this.swiper.update()
      })
    },
    beforeDestroy () {
      if (this.swiper) {
        this.swiper.destroy()
        delete this.swiper
      }
    }
  }
</script>
