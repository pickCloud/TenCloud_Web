const STATUS = {
  '0': ['初创建', 'primary_bg alpha-black_txt'],
  '1': ['构建中', 'primary_bg alpha-black_txt'],
  '2': ['构建成功', 'primary_bg alpha-black_txt'],
  '3': ['部署中', 'primary_bg alpha-black_txt'],
  '4': ['部署成功', 'primary_bg alpha-black_txt'],
  '-2': ['构建失败', 'pink_bg alpha-black_txt'],
  '-4': ['部署失败', 'pink_bg alpha-black_txt']
}
const MODE_CN = ['普通项目', '基础服务', '应用组件']
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
          this.getContainerList()
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
      this.$Global.async('project_container_list', true).getData({
        container_list: this.base.deploy_ips,
        container_name: this.base.container_name
      }).then(d => {
        if (d.status === 0) {
          this.containers = d.data
        }
      })
    }
  },
  computed: {
    pstatus () {
      return this.base.status !== undefined ? STATUS[this.base.status + ''][0] : ''
    },
    pclass () {
      return this.base.status !== undefined ? STATUS[this.base.status + ''][1] : ''
    },
    imgSource () {
      return this.base.image_source === 0 ? '代码仓库' : '外部镜像'
    },
    modecn () {
      return MODE_CN[this.base.mode]
    },
    verLimit () {
      return this.vers.slice(0, 5)
    }
  },
  created () {
    this.getApiData()
  }
}
