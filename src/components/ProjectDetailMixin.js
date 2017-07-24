const STATUS = {
  '0': '无',
  '1': '构建成功',
  '2': '部署成功',
  '-1': '构建失败',
  '-2': '部署失败'
}
export default {
  data: () => ({
    base: {},
    vers: []
  }),
  methods: {
    getApiData () {
      this.$Global.async('project_detail', true).getData(null, this.$route.params.id).then(d => {
        if (d.status === 0) {
          this.base = d.data[0]
          // console.log(this.base)
        }
      })
    },
    getVerList () {
      this.$Global.async('project_vers', true).getData(null, this.base.name + '/versions').then(d => {
        if (d.status === 0) {
          this.vers = d.data
        }
      })
    },
    editorHandle () {
      this.$router.push({name: 'ProjectEditor', params: {id: this.$route.params.id}})
    },
    build () {
      this.$router.push({name: 'Build', params: {name: this.base.name}})
    },
    deploy () {
      this.$router.push({name: 'Deploy', params: {id: this.$route.params.id}})
    }
  },
  computed: {
    pstatus () {
      return STATUS[this.base.status + '']
    }
  },
  created () {
    this.getApiData()
    this.getVerList()
  }
}
