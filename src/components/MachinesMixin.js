import Poppers from './Poppers.js'
import Selects from './Selects.js'
import StatusCode from './StatusCode.js'
export default {
  mixins: [Poppers, Selects],
  data: () => ({
    isDeploy: false
  }),
  filters: {
    'mstatus' (v) {
      return StatusCode.machine[v][0]
    },
    'mclass' (v) {
      return StatusCode.machine[v][1]
    }
  },
  methods: {
    delMachine (id) {
      let delids = this.selects
      if (id !== -1) delids = [id + '']
      if (delids.length === 0) {
        this.$toast('请选择要删除的主机', 'cc')
      } else {
        this.popperDelete('您确定要删除主机' + this.getAttrById(delids).join(',') + '吗？', _ => {
          this.$Global.async('server_del', true).getData({
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
      const cid = this.clusterid = 1
      this.$Global.async('cluster_detail', true).getData(null, cid).then(d => {
        this.listts = d.data.server_list
      })
    },
    getMdataByIds (ids) {
      let i = -1
      let temp = []
      while (++i < this.listts.length) {
        let v = this.listts[i]
        if (ids.indexOf(v.id + '') !== -1) temp.push(v)
      }
      return temp
    },
    deploySelect () {
      let delids = this.selects
      if (delids.length === 0) {
        this.$toast('请选择要部署的主机', 'cc')
      } else {
        let params = this.$route.params
        params.machines = this.getMdataByIds(delids)
        params.machineids = delids
        this.$router.replace({name: 'Deploy', params: params})
      }
    }
  },
  created () {
    this.getApiData()
    this.isDeploy = this.$route.params.type && this.$route.params.type === 'deploy'
    if (this.$route.params.machineids) this.selects = this.$route.params.machineids
  }
}
