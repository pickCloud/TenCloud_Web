import StatusCode from './StatusCode.js'
import InfoEditor from './InfoEditor.js'
import ChartCMD from './ChartCMD.js'
import Popper from './Poppers.js'

export default {
  mixins: [ChartCMD, InfoEditor, Popper],
  data: () => ({
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
    },
    applists: [],
    machineid: -1,
    isWaiting: false,
    waitingTip: '',
    isOpen: false,
    isDisabled: false,
    updateApi: 'server_update',
    performance: 'server_performance',
    performanceData: {},
    btnidx: 0
  }),
  methods: {
    getApiData () {
      this.performanceData.id = this.machineid = this.$route.params.id
      this.$Global.async('server_detail', true).getData(null, this.machineid).then(d => {
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
      this.$Global.async('server_containers', true).getData(null, this.machineid).then(d => {
        if (d.status === 0) {
          this.applists = d.data
        }
      })
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
      this.$Global.async(t, true).getData(null, this.machineid).then(d => {
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
        this.$Global.async('server_status', true).getData(null, this.statusApiSuf).then(d => {
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
    btnChange (type) {
      let timeNum = 0
      switch (type) {
        case 0:
          timeNum = 60
          break
        case 1:
          timeNum = 60 * 24
          break
        case 2:
          timeNum = 60 * 24 * 7
          break
        case 3:
          timeNum = 60 * 24 * 7 * 30
          break
      }
      this.getPerformance(timeNum, true)
    },
    getHistory () {
      console.log('进入')
      this.$router.push({name: 'ChartHistory', params: {id: this.$route.params.id}})
    }
  },
  computed: {
    businessStatus () {
      const temp = StatusCode.business[this.baseInfo.business_status]
      return temp || []
    },
    machineStatus () {
      const temp = StatusCode.machine[this.baseInfo.machine_status]
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
