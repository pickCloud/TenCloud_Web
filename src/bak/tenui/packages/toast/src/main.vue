<template>
  <transition name="ten-fade">
    <div class="toast" :class="[styleClass]" v-show="visible">
      {{content}}
    </div>
  </transition>
</template>

<script>
  export default {
    data () {
      return {
        visible: false,
        content: '',
        duration: 3000,
        type: 'info',
// l lt lb r rt rb t b cc
        pointClass: 'b',
        customClass: '',
        closed: false,
        timer: null
      }
    },
    watch: {
      closed (newVal) {
        if (newVal) {
          this.visible = false
          this.$el.addEventListener('transitionend', this.destroyElement)
        }
      }
    },
    methods: {
      destroyElement () {
        this.$el.removeEventListener('transitionend', this.destroyElement)
        this.$destroy(true)
        this.$el.parentNode.removeChild(this.$el)
      },

      close () {
        this.closed = true
        if (typeof this.onClose === 'function') {
          this.onClose(this)
        }
      },

      clearTimer () {
        clearTimeout(this.timer)
      },

      startTimer () {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            if (!this.closed) {
              this.close()
            }
          }, this.duration)
        }
      }
    },
    computed: {
      styleClass () {
        return this.type + ' ' + this.pointClass + ' ' + this.customClass
      }
    },
    mounted () {
      this.startTimer()
    }
  }
</script>
