export default {
  data: () => ({
    appid: -1,
    editor: false
  }),
  methods: {
    getApiData () {
      this.appid = this.$route.params.id
    },
    getPerformance () {
      this.$Global.async('')
    },
    editorHandle () {
      this.editor = true
    },
    submitAlter () {
      this.editor = false
      if (this.tempEditor.title === this.title && this.tempEditor.description === this.description) return
      this.$Global.async('cluster_update', true).getData({
        id: this.$route.params.id,
        name: this.tempEditor.title,
        description: this.tempEditor.description
      }).then(d => {
        this.cluster.name = this.tempEditor.title
        this.cluster.description = this.tempEditor.description
        this.$toast(d.message)
      })
    },
    cancelAlter () {
      this.editor = false
    }
  },
  mounted () {
    this.getApiData()
  }
}
