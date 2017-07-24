import dlist from './piece/datalist/Main.vue'
export default {
  data: () => ({
    verdata: [],
    imgdata: [],
    version: {
      version: ''
    }
  }),
  methods: {
    verChange (d) {
      console.log(d)
    },
    getVerList () {
      this.$Global.async('project_vers', true).getData(null, this.$route.params.name + '/versions').then(d => {
        if (d.status === 0) {
          this.verdata = d.data
        }
      })
    },
    getImageList () {
      this.$Global.async('project_image', true).getData(null, this.$route.params.name + '/image').then(d => {
        if (d.status === 0) {
          this.imgdata = d.data
          console.log(this.imgdata)
        }
      })
    }
  },
  created () {
    this.getVerList()
    this.getImageList()
  },
  components: {
    dlist
  }
}
