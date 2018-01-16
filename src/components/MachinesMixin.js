import Poppers from './Poppers.js'
import Selects from './Selects.js'
// import StatusCode from './StatusCode.js'
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
import PermisionCommonModule from './PermisionCommonModule.js'
export default {
  mixins: [Poppers, Selects, PermisionCommonModule],
  data: () => ({
    isDeploy: false
  }),
  computed: {
    ...mapGetters('machines', [
      'listts'
    ]),
    ...mapState('user', ['currentUser'])
  },
  methods: {
    ...mapMutations('machines', ['setListts']),
    ...mapActions('machines', ['getApiData', 'deleteAsyn']),
    delMachine (id) {
      let delids = this.selects
      if (id !== -1) delids = [id + '']
      if (delids.length === 0) {
        this.$toast('请选择要删除的主机', 'cc')
      } else {
        this.popperDelete('您确定要删除主机' + this.getAttrById(delids).join(',') + '吗？', _ => {
          this.deleteAsyn(delids).then(d => {
            if (d.status === 0) {
              this.getApiData()
            }
            this.$toast(d.message, 'cc')
          })
          // this.$Global.async('server_del', true).getData({
          //   id: delids
          // }).then(d => {
          //   if (d.status === 0) {
          //     this.getApiData()
          //   }
          //   this.$toast(d.message, 'cc')
          // })
        })
      }
    },
    // getApiData () {
    //   if (this.listts.length > 0) return false
    //   const cid = this.clusterid = 1
    //   this.$Global.async('cluster_detail', true).getData(null, cid).then(d => {
    //     this.setListts(d.data.server_list)
    //   })
    // },
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
    loopGetData () {
      this.sitv = setInterval(_ => {
        clearTimeout(this.sitv)
        this.getApiData()
      }, 1000 * 60 * 30)
    },
    refresh () {
      this.getApiData()
    },
    choose (str) {
      if (str === '运行中') {
        return ''
      } else if (str === '重启') {
        return 'restart'
      } else if (str === '停止') {
        return 'stop'
      }
    },
    getBusiness (str) {
      if (str === '阿里云') {
        return 'icon-aliyun'
      } else if (str === '亚马逊云') {
        return 'icon-yamaxun'
      } else if (str === '腾讯云') {
        return 'icon-tengxunyun'
      } else if (str === '微软云') {
        return 'icon-azure'
      }
    }
  },
  beforeDestroy () {
    clearInterval(this.sitv)
  },
  created () {
    this.getApiData()
    this.loopGetData()
    this.isDeploy = this.$route.params.type && this.$route.params.type === 'deploy'
    if (this.$route.params.machineids) this.selects = this.$route.params.machineids
    this.$store.commit('sitepath/SET_PATH', [
      {name: 'Main', cn: '主页'},
      {cn: '机器列表'}
    ])
  },
  watch: {
    'currentUser' () {
      this.getApiData()
    }
  }
}
