export default {
  data: () => ({
    isInfoEditor: false,
    infoEditorTemp: {}
  }),
  methods: {
    getValueByKey (key) {
      let keys = key.split('.')
      return keys.reduce((a, b) => a[b], this)
    },
    editorBegin () {
      this.isInfoEditor = true
      if (!this.editorElements) this.editorElements = this.$el.querySelectorAll('.edirot-input')
      this.editorElements.forEach((e, i) => {
        e.removeAttribute('readonly')
        this.infoEditorTemp[e.dataset.key] = e.value
      })
    },
    editorSure () {
      let postdata = {}
      let hasEditor = false
      this.isInfoEditor = false
      this.editorElements.forEach((e, i) => {
        e.setAttribute('readonly', 'readonly')
        let v = this.getValueByKey(e.dataset.key)
        if (v !== this.infoEditorTemp[e.dataset.key]) {
          postdata[e.dataset.name] = v
          hasEditor = true
        }
      })

      if (hasEditor) {
        postdata.id = this.$route.params.id
        this.$axios.http(this.updateApi, postdata, 'post').then(d => {
          this.$toast(d.message, 'cc')
        })
      }
    },
    setValueBuKey (key, v) {
      let temp = this
      let keys = key.split('.')
      keys.forEach((k, i) => {
        if (i === keys.length - 1) {
          temp[k] = v
        } else {
          temp = temp[k]
        }
      })
    },
    editorCancel () {
      this.isInfoEditor = false
      this.editorElements.forEach((e, i) => {
        e.setAttribute('readonly', 'readonly')
        this.setValueBuKey(e.dataset.key, this.infoEditorTemp[e.dataset.key])
      })
    }
  }
}
