import Selects from './Selects.js'
export default {
  mixins: [Selects],
  methods: {
    delProject (id) {
      let delids = this.selects
      if (id !== -1) delids = [id + '']
      if (delids.length === 0) {
        this.$toast('请选择要删除的项目', 'cc')
      } else {
        this.popperDelete('您确定要删除项目' + this.getAttrById(delids).join(',') + '吗？', _ => {
          this.$Global.async('projects_del', true).getData({
            id: delids
          }).then(d => {
            if (d.status === 0) {
              this.getApiData()
            }
            this.$toast(d.message, 'cc')
          })
        })
      }
    },
    getApiData () {
      // const cid = this.clusterid = 1
      this.$Global.async('projects', true).getData(null).then(d => {
        // console.log(d.data)
        this.listts = d.data
      })
    }
  },
  created () {
    this.getApiData()
  }
}
