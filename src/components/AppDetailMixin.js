import ChartCMD from './ChartCMD.js'
import Popper from './Poppers.js'
import {mapState, mapActions} from 'vuex'
const STATUS_MAP = {
  container_stop: ['停止容器'],
  container_start: ['启动容器']
}
export default {
  data: () => ({
    isOpen: true,
    isDisabled: false,
    isWaiting: false,
    waitingTip: '',
    performance: 'app_performance',
    runtime: {},
    network: {},
    container: {},
    timedata: '',
    name: '',
    status: '',
    performanceData: {}
  }),
  mixins: [ChartCMD, Popper],
  methods: {
    ...mapActions('mechineDetail', ['getServerOperation']),
    getApiData () {
      // this.performanceData.server_id = this.$route.params.mid
      this.performanceData.id = this.$route.params.mid
      this.performanceData.container_name = this.$route.params.name
      this.$axios.http('container_detail', '', 'get', this.$route.params.mid + '/container/' + this.$route.params.cid).then(d => {
        if (d.status === 0) {
          this.runtime = d.data.runtime
          this.network = d.data.network
          this.container = d.data.container
          this.status = d.data.status
          this.name = d.data.name.substr(1)
          this.timedata = (new Date(d.data.created)).Format('yyyy/MM/dd hh:mm:ss')
          this.isOpen = this.status.toLowerCase() === 'running'

          this.$store.commit('sitepath/SET_PATH', [
            {name: 'Main', cn: '主页'},
            {name: 'Machines', cn: '机器列表'},
            {name: 'MachineDetail', cn: this.runtime.hostname, params: {id: this.$route.params.mid}},
            {cn: this.name}
          ])
        }
      }, e => {
        console.log(e)
      })
      this.getServerOperation({object_type: 1, object_id: this.$route.params.mid})
    },
    containerChange () {
      this.isDisabled = true
      if (!this.isOpen) this.operationTip('container_stop')
      else this.operationTip('container_start')
    },
    operationTip (p) {
      // let temp = StatusCode.server[t]
      this.popperInfo('您确定要 ' + STATUS_MAP[p][0] + ' 吗?', _ => {
        this.containerCtr(p)
      }, _ => {
        this.isOpen = !this.isOpen
        this.isDisabled = false
      })
    },
    containerCtr (t) {
      this.isWaiting = true
      this.waitingTip = STATUS_MAP[t][0] + '中, 请稍后'
      this.$axios.http(t, {
        // server_id: this.$route.params.mid,
        id: this.$route.params.mid,
        container_id: this.$route.params.cid
      }, 'post').then(d => {
        if (d.status === 0) {
          this.isWaiting = false
          // this.loopGetStatus(t)
        } else {
          this.$toast(d.message, 'cc')
        }
      }, e => {
        console.log(typeof e)
      })
    },
    delContainer () {
      // const h = this.$createElement
      this.popperInfo('您确定要删除 ' + this.name + ' 吗?', _ => {
        let deltip = this.popperWaiting('删除中')
        // let ttt = setTimeout(_ => {
        //   deltip.actionPopper()
        //   clearTimeout(ttt)
        // }, 1000)
        this.$axios.http('container_del', {
          // server_id: this.$route.params.mid,
          id: this.$route.params.mid,
          container_id: this.$route.params.cid
        }, 'post').then(d => {
          if (d.status === 0) {
            deltip.actionPopper()
            this.$router.back()
          }
          this.$toast(d.message, 'cc')
        }, e => {
          console.log(typeof e)
        })
      })
    },
    lookHistory () {
      this.$router.push({name: 'ChartContainerHistory', params: {id: this.$route.params.mid, container_name: this.$route.params.name}})
    }
  },
  computed: {
    volumes () {
      let res = []
      for (let key in this.container.volumes) {
        res.push({
          label: key,
          value: this.container.volumes[key]
        })
      }
      return res
    },
    volumesfrom () {
      return this.container.volumesfrom ? this.container.volumesfrom.join() : ''
    },
    ...mapState('mechineDetail', ['operations'])
  },
  created () {
    this.getApiData()
  }
}
