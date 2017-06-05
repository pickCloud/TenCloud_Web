const STAUTS = {
  business: {
    '0': ['运行中', 'lvse-text'],
    '1': ['已停止', 'hongse-text'],
    '2': ['启动中', 'lvse-text'],
    '3': ['停止中', 'hongse-text'],
    '4': ['满负载', 'hongse-text']
  },
  machine: {
    'Pending': ['准备中', 'lvse-text', 'run'],
    'Stopped': ['已停止', 'hongse-text', 'stop'],
    'Starting': ['启动中', 'lvse-text', 'run'],
    'Running': ['运行中', 'lvse-text', 'run'],
    'Stopping': ['停止中', 'hongse-text', 'stop'],
    'Deleted': ['已释放', 'hongse-text', 'stop']
  },
  server: {
    'server_start': [3, 'Starting', 'Running', '机器启动中，这个过程需要大约'],
    'server_stop': [20, 'Stopping', 'Stopped', '机器关机中，这个过程需要大约'],
    'server_reboot': [30, 'Stopping', 'Running', '机器重启中，这个过程需要大约']
  }
}

export default {
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
    apps: {},
    machineid: -1,
    editor: false,
    cpu: {},
    memory: {},
    disk: {},
    isWaiting: false,
    waitingTip: '',
    tempEditor: {
      title: ''
    }
  }),
  methods: {
    getApiData () {
      this.machineid = this.$route.params.id
      this.$Global.async('server_detail').getData(null, this.machineid).then(d => {
        if (d.status === 0) {
          this.baseInfo = d.data.basic_info
          this.businessInfo = d.data.business_info
          this.sysInfo = d.data.system_info
        }
      })
    },
    inpChange (e, key) {
      this.tempEditor[key] = e.target.innerHTML
    },
    editorHandle () {
      this.editor = true
      this.tempEditor.title = this.baseInfo.name
    },
    submitAlter () {
      this.editor = false
      if (this.tempEditor.title === this.baseInfo.name) return
      this.$Global.async('server_update').getData({
        id: this.$route.params.id,
        name: this.tempEditor.title
      }).then(d => {
        this.baseInfo.name = this.tempEditor.title
        this.$toast(d.message)
      })
    },
    cancelAlter () {
      this.editor = false
      this.baseInfo.name = this.baseInfo.name + ' '
    },
    machineCtr (el, t) {
      if (el.$TipInstance) el.$TipInstance.actionPopper(false)
      let temp = STAUTS.server[t]
      this.waitingTip = temp[3] + temp[0] + '秒'
      this.$Global.async(t, true).getData(null, this.machineid).then(d => {
        if (d.status === 0) {
          this.isWaiting = true
          this.baseInfo.machine_status = temp[1]
          const timeout = setTimeout(_ => {
            this.baseInfo.machine_status = temp[2]
            this.isWaiting = false
            clearTimeout(timeout)
          }, temp[0] * 1000)
        } else {
          this.$toast(d.message)
        }
      })
    },
    sysTabChange (idx) {
      if (idx === 2) {
        this.getPerformance()
      }
    },
    getPerformance () {
      // this.$Global.async('')
      console.log(Date.parse(new Date()) / 1000)
    }
  },
  computed: {
    businessStatus () {
      const temp = STAUTS.business[this.baseInfo.business_status]
      return temp || []
    },
    machineStatus () {
      const temp = STAUTS.machine[this.baseInfo.machine_status]
      return temp || []
    }
  },
  mounted () {
    this.getApiData()
  }
}
