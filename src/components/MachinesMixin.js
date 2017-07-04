import Poppers from './Poppers.js'
import Selects from './Selects.js'
import StatusCode from './StatusCode.js'
export default {
  mixins: [Poppers, Selects],
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
        this.popperDelete(this.getAttrById(delids).join(','), _ => {
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
    }
  },
  created () {
    this.getApiData()
  }
}
