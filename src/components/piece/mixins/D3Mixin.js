export default {
  props: {
    sizew: Number,
    sizeh: Number
  },
  computed: {
    stylew () {
      let style = {}
      if (this.sizew) {
        style.width = this.sizew + 'px'
      }
      return style
    },
    styleh () {
      let style = {}
      if (this.sizeh) {
        style.height = this.sizeh + 'px'
      }
      return style
    }
  }
}
