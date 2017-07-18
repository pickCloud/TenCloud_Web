import Popper from './Poppers.js'

export default {
  mixins: [Popper],
  data: () => ({
    formdata: {
      name: '',
      // repos_name: '',
      // repos_url: '',
      description: '',
      mode: '0'
    },
    repos_idx: '0',
    git_tip: '绑定github代码仓库',
    githubs: []
  }),
  methods: {
    addProject () {
      let temp = this.githubs[this.repos_idx]
      // console.log(this.formdata)
      if (!temp) return
      if (this.formdata.name === '') {
        this.$toast('名称不能为空', 'cc')
        return
      }
      if (this.formdata.description === '') {
        this.$toast('description不能为空', 'cc')
        return
      }
      this.formdata.repos_name = temp.repos_name
      this.formdata.repos_url = temp.repos_url
      this.$Global.async('project_add', true).getData(this.formdata).then(d => {
        if (d.status === 0) {
          this.$router.push({name: 'Projects'})
        }
        this.$toast('添加成功', 'cc')
        // console.log(d)
      }, e => {
        this.$toast(e.response.data.message, 'cc')
      })
    },
    bindGitHub () {
      if (this.git_tip.indexOf('<img') !== -1) return
      this.getApiData()
    },
    getApiData () {
      this.git_tip = '<img class="vam" src="./static/img/spin.gif"></img> <span class="vam">数据加载中</span>'
      // let tips = this.popperWaiting('读取中')
      this.$Global.async('project_repos', true).getData().then(d => {
        if (d.status === 0) {
          this.githubs = d.data
          this.repos_idx = '0'
          this.git_tip = '重新绑定github代码仓库'
        } else {
          this.$toast(d.message, 'cc')
        }
        // console.log(tips)
        // tips.actionPopper()
      })
    }
  },
  computed: {
    gitLoadStyle () {
      return this.git_tip.indexOf('<img') !== -1 ? 'loading' : ''
    }
  },
  created () {
    // this.getApiData()
  }
}
