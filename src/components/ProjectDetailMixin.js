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
    vers: [],
    containers: []
  }),
  methods: {
    getApiData () {
      this.$Global.async('project_detail', true).getData(null, this.$route.params.id).then(d => {
        if (d.status === 0) {
          this.base = d.data[0]
          this.getVerList()
        }
      })
    },
    getVerList () {
      this.$Global.async('project_vers', true).getData(null, this.base.name + '/versions').then(d => {
        if (d.status === 0) {
          this.vers = d.data
          // console.log(d.data)
        }
      })
    },
    editorHandle () {
      this.$router.push({name: 'ProjectEditor', params: {id: this.$route.params.id}})
    },
    build () {
      this.$router.push({name: 'Build', params: {name: this.base.name, repos_url: this.base.repos_url, repos_name: this.base.repos_name, id: this.$route.params.id, image_name: this.base.image_name}})
    },
    deploy () {
      if (this.vers.length === 0) {
        this.$toast('请先进行版本构建', 'cc')
      } else {
        this.$router.push({name: 'Deploy', params: {id: this.$route.params.id, name: this.base.name, type: 'deploy', image_name: this.base.image_name}})
      }
    },
    gotVerListMore () {
      // console.log(this.vers)
      this.$router.push({name: 'Verlist', params: {verlist: this.vers}})
    },
    getContainerList () {
      this.$Global.async('project_container_list', true).getData(null, this.base.deploy_ips).then(d => {
        if (d.status === 0) {
          this.containers = d.data
        }
      })
    }
  },
  computed: {
    pstatus () {
      return STATUS[this.base.status + '']
    },
    verLimit () {
      return this.vers.slice(0, 5)
    }
  },
  created () {
    this.getApiData()
  }
}
