import dlist from './piece/datalist/Main.vue'
export default {
  data: () => ({
    verdata: [],
    branchs: [],
    branch: '1',
    isDoing: false,
    isOpen: false,
    version: {
      version: ''
    }
  }),
  methods: {
    openIntro () {
      this.isOpen = !this.isOpen
    },
    getVerList () {
      this.$Global.async('project_vers', true).getData(null, this.$route.params.name + '/versions').then(d => {
        if (d.status === 0) {
          this.verdata = d.data
          console.log(d)
        }
      })
    },
    getBranch () {
      this.$Global.async('project_branch', true).getData(null, this.$route.params.repos_name).then(d => {
        if (d.status === 0) {
          this.branchs = d.data
          this.branch = this.branchs[0].branch_name
        }
      })
    },
    startBuild () {
      if (this.branchs.length === 0) return
      let pdata = {
        prj_name: this.$route.params.name,
        image_name: this.$route.params.image_name,
        version: (this.version.version + '').replace(/(^\s+)|(\s+$)/g, ''),
        branch_name: this.branch,
        repos_url: this.$route.params.repos_url
      }
      if (pdata.version === '') {
        this.$toast('请输入版本号', 'cc')
        return
      }
      this.isDoing = true
      this.$Global.async('project_create', true).getData(pdata).then(d => {
        if (d.status === 0) {
          this.$router.replace({name: 'ProjectDetail', params: {id: this.$route.params.id}})
        }
        this.$toast(d.message, 'cc')
        this.isDoing = false
      })
    }
  },
  created () {
    if (!this.$route.params.repos_url) {
      this.$router.replace({name: 'ProjectDetail', params: {id: this.$route.params.id}})
    } else {
      this.getVerList()
      this.getBranch()
    }
  },
  components: {
    dlist
  }
}
