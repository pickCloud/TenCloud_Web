import Popper from './Poppers.js'

export default {
  mixins: [Popper],
  data: () => ({
    formdata: {
      name: '',
      // repos_name: '',
      // repos_url: '',
      description: ''
    },
    repos_idx: '0',
    githubs: []
  }),
  methods: {
    addProject () {
      this.formdata.repos_name = this.githubs[this.repos_idx].repos_name
      this.formdata.repos_url = this.githubs[this.repos_idx].repos_url
      console.log(this.formdata)
      if (this.formdata.name === '') {
        this.$toast('名称不能为空', 'cc')
        return
      }
      if (this.formdata.description === '') {
        this.$toast('description不能为空', 'cc')
        return
      }
      this.$Global.async('project_add', true).getData(this.formdata).then(d => {
        if (d.status === 0) {
          this.$router.push({name: 'Projects'})
        }
        this.$toast('添加成功', 'cc')
      }, e => {

      })
    },
    getApiData () {
      let tips = this.popperWaiting('读取中')
      this.$Global.async('project_repos', true).getData().then(d => {
        if (d.status === 0) {
          this.githubs = d.data
          this.repos_idx = '0'
        } else {
          this.$toast(d.message, 'cc')
        }
        // console.log(tips)
        tips.actionPopper()
      })
    }
  },
  created () {
    this.getApiData()
  }
}
