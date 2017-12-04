import StatusCode from './StatusCode.js'
import InfoEditor from './InfoEditor.js'
import ChartCMD from './ChartCMD.js'
import Popper from './Poppers.js'
import {mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  mixins: [ChartCMD, InfoEditor, Popper],
  data: () => ({
    machineid: -1,
    isWaiting: false,
    waitingTip: '',
    isOpen: false,
    isDisabled: false,
    updateApi: 'server_update',
    performance: 'server_performance',
    btnidx: 0,
    performanceData: {},
    baseInfo: {
      cluster_id: -1,
      cluster_name: ''
    },
    businessInfo: {
      contract: {},
      provider: ''
    },
    sysInfo: {
      config: {}
    }
  }),
  methods: {
    ...mapMutations('mechineDetail', ['setApplists', 'setOperations']),
    ...mapActions('mechineDetail', ['getServerDetail', 'getServerContainers', 'getServerOperation']),
    getApiData () {
      this.performanceData.id = this.machineid = this.$route.params.id
      this.getServerDetail(this.machineid).then(d => {
        if (d.status === 0) {
          this.baseInfo = d.data.basic_info
          this.businessInfo = d.data.business_info
          this.sysInfo = d.data.system_info
          if (this.machineStatus[2] === 'run') this.isOpen = true
          if (this.machineStatus[2] === 'stop') this.isOpen = false
          this.statusApiSuf = this.baseInfo.instance_id + '/status'
          // console.log(d.data)
          // console.log(this.baseInfo.machine_status)
          if (this.baseInfo.machine_status === 'Starting' || this.baseInfo.machine_status === 'Stopping') this.loopGetStatus(this.machineStatus[3])

          this.$store.commit('sitepath/SET_PATH', [
            {name: 'Main', cn: '主页'},
            {name: 'Machines', cn: '机器列表'},
            {cn: this.baseInfo.name}
          ])
        }
      })
      // this.$Global.async('server_containers', true).getData(null, this.machineid).then(d => {
      //   if (d.status === 0) {
      //     this.applists = d.data
      //   }
      // })
      // this.$Global.async('server_operation', true).getData(null, this.machineid + '/operation').then(d => {
      //   if (d.status === 0) {
      //     console.log(d.data)
      //     this.operations = d.data
      //   }
      // })
      this.getServerContainers(this.machineid)
      this.getServerOperation({object_type: 0, object_id: this.machineid})
    },
    machineChange () {
      this.isDisabled = true
      if (!this.isOpen) this.machineCtrPop('server_stop')
      else this.machineCtr('server_start')
    },
    machineCtrPop (t) {
      let temp = StatusCode.server[t]
      this.popperInfo('您确定要 ' + temp[4] + ' 吗?', _ => {
        this.machineCtr(t)
      }, _ => {
        this.isOpen = !this.isOpen
        this.isDisabled = false
      })
    },
    machineCtr (t) {
      this.$axios.http(t, '', 'get', this.machineid).then(d => {
        if (d.status === 0) {
          this.loopGetStatus(t)
        } else {
          this.$toast(d.message, 'cc')
        }
      }, e => {
        console.log(typeof e)
      })
    },
    loopGetStatus (t) {
      let temp = StatusCode.server[t]
      this.waitingTip = temp[3]
      this.isWaiting = true
      this.baseInfo.machine_status = temp[1]
      this.yqvalue = temp[2]
      this.loopIV = setInterval(_ => {
        this.$axios.http('server_status', '', 'get', this.statusApiSuf).then(d => {
          if (d.status === 0) {
            this.baseInfo.machine_status = d.data
            if (d.data === this.yqvalue) {
              this.isWaiting = false
              this.isDisabled = false
              clearInterval(this.loopIV)
            }
          }
        })
      }, temp[0] * 1000)
    },
    deleteMachine () {
      this.popperDelete(this.baseInfo.name, _ => {
        if (this.isOpen) {
          this.popperInfo('请关机后再删除')
          return false
        }
        this.$Global.async('server_del', true).getData({
          id: [this.$route.params.id]
        }).then(d => {
          if (d.status === 0) {
            this.$router.push({name: 'Machines'})
          }
          this.$toast(d.message, 'cc')
        })
      })
    },
    getHistory () {
      this.$router.push({name: 'ChartHistory', params: {id: this.$route.params.id, name: this.baseInfo.name}})
    }
  },
  computed: {
    ...mapGetters('mechineDetail', ['applists', 'operations']),
    businessStatus () {
      const temp = StatusCode.business[this.baseInfo.business_status]
      return temp || []
    },
    machineStatus () {
      let temp = ''
      if (this.baseInfo.machine_status) {
        switch (this.baseInfo.machine_status) {
          case '准备中':
            temp = ['Pending', 'primary_bg alpha-black_txt', 'run']
            break
          case '已停止':
            temp = ['Stopped', 'pink_bg alpha-black_txt', 'stop']
            break
          case '启动中':
            temp = ['Starting', 'primary_bg alpha-black_txt', 'run', 'server_start']
            break
          case '运行中':
            temp = ['Running', 'primary_bg alpha-black_txt', 'run']
            break
          case '停止中':
            temp = ['Stopping', 'pink_bg alpha-black_txt', 'stop', 'server_stop']
            break
          case '已释放':
            temp = ['Deleted', 'pink_bg alpha-black_txt', 'stop']
            break
        }
      }
      // const temp = StatusCode.machine[this.baseInfo.machine_status]

      return temp || []
    }
  },
  created () {
    this.getApiData()
  },
  beforeDestroy () {
    if (this.loopIV) clearInterval(this.loopIV)
  }
}
