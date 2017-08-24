import Poppers from '../Poppers.js'
import Selects from '../Selects.js'

export default {
  mixins: [Poppers, Selects],
  data: () => ({
    now_page: 1,
    page_number: 2,
    total_page: 20,
    listts: []
  }),
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
      this.$Global.async('file_list', true).getData({
        now_page: this.now_page,
        page_number: this.page_number
      }).then(d => {
        this.listts = d.data.files
        // console.log(d.data.files)
      })
    },
    getPagesNumber () {
      this.$Global.async('file_pages').getData(null).then(d => {
        // console.log(d)
        this.total_page = Math.ceil(d.data / this.page_number)
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
    },
    numChange (n) {
      this.now_page = n
      this.getApiData()
    }
  },
  created () {
    this.getPagesNumber()
    this.getApiData()
    this.isDeploy = this.$route.params.type && this.$route.params.type === 'deploy'
    if (this.$route.params.machineids) this.selects = this.$route.params.machineids
  }
}
