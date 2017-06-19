export default {
  data: () => ({
    editor: false,
    prodata: {},
    tempEditor: {
      title: '',
      description: ''
    }
  }),
  methods: {
    inpChange (e, key) {
      this.tempEditor[key] = e.target.innerHTML
    },
    editorHandle () {
      this.editor = true
      this.tempEditor.title = this.prodata.name
      this.tempEditor.description = this.prodata.description
    },
    submitAlter () {
      this.editor = false
      if (this.tempEditor.title === this.prodata.name && this.tempEditor.description === this.prodata.description) return
      // this.$Global.async('cluster_update', true).getData({
      //   id: this.$route.params.id,
      //   name: this.tempEditor.title,
      //   description: this.tempEditor.description
      // }).then(d => {
      //   this.prodata.name = this.tempEditor.title
      //   this.prodata.description = this.tempEditor.description
      //   this.$toast(d.message, 'cc')
      // })
    },
    cancelAlter () {
      this.editor = false
      this.prodata.name = this.prodata.name + ' '
      this.prodata.description = this.prodata.description + ' '
    }
  }
}
