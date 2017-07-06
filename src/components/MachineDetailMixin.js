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
    updateApi: 'server_update'
  }),
  methods: {
    getApiData () {
      this.machineid = this.$route.params.id
      this.$Global.async('server_detail', true).getData(null, this.machineid).then(d => {
        if (d.status === 0) {
          this.baseInfo = d.data.basic_info
          this.businessInfo = d.data.business_info
          this.sysInfo = d.data.system_info
          if (this.machineStatus[2] === 'run') this.isOpen = true
          if (this.machineStatus[2] === 'stop') this.isOpen = false
        }
      })
      this.$Global.async('server_applist', true).getData(null, this.machineid).then(d => {
        if (d.status === 0) {
          this.applists = d.data
          console.log(this.applists)
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
      let temp = StatusCode.server[t]
      this.waitingTip = temp[3] + temp[0] + '秒'
      this.$Global.async(t, true).getData(null, this.machineid).then(d => {
        if (d.status === 0) {
          this.isWaiting = true
          this.baseInfo.machine_status = temp[1]
          const timeout = setTimeout(_ => {
            this.baseInfo.machine_status = temp[2]
            this.isWaiting = false
            this.isDisabled = false
            clearTimeout(timeout)
          }, temp[0] * 1000)
        } else {
          this.$toast(d.message, 'cc')
        }
      }, e => {
        console.log(typeof e)
      })
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
  }
}
