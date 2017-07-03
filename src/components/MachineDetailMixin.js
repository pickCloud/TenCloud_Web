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
const AJAX_ONE_TIME = 460 // 分钟
const AJAX_TWO_TIME = 1 // 分钟
const AJAX_LOOP_TIME = 1 // 分钟

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
      apps: {},
      config: {}
    },
    machineid: -1,
    editor: false,
    cpu: [],
    memory: [],
    disk: [],
    isWaiting: false,
    waitingTip: '',
    tempEditor: {
      title: ''
    }
  }),
  methods: {
    getApiData () {
      this.machineid = this.$route.params.id
      this.$Global.async('server_detail', true).getData(null, this.machineid).then(d => {
        if (d.status === 0) {
          // console.log(d)
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
      this.$Global.async('server_update', true).getData({
        id: this.$route.params.id,
        name: this.tempEditor.title
      }).then(d => {
        this.baseInfo.name = this.tempEditor.title
        this.$toast(d.message, 'cc')
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
          this.$toast(d.message, 'cc')
        }
      })
    },
    // sysTabChange (idx) {
    //   if (idx === 2) {
    //     this.getPerformance(AJAX_ONE_TIME)
    //   } else {
    //     this.cpu.series[0].data = []
    //     this.disk.series[0].data = []
    //     this.memory.series[0].data = []
    //     if (this.temptimeout) clearTimeout(this.temptimeout)
    //   }
    // },
    formatDate (p) {
      return p.map((v, i) => {
        if (v > 100000) {
          let t = new Date(v * 1000)
          return t.Format('yyyy/MM/dd hh:mm:ss')
        }
        return v
      })
    },
    formatDisk (p) {
      const free = p[0]
      const total = p[1]
      return [
        {
          value: this.toG(total - free),
          name: '使用',
          itemStyle: {
            normal: {color: '#48bbc0'}
          }
        },
        {
          value: this.toG(free),
          name: '空余',
          itemStyle: {
            normal: {color: '#ffe0b2'}
          }
        }
      ]
    },
    toG (v) {
      return (v / 1024 / 1024 / 1024).toFixed(2)
    },
    getPerformance (n = 1) {
      const nowdate = new Date()
      const olddate = new Date(nowdate.getTime() - 1000 * 60 * n)
      this.$Global.async('server_performance', true).getData({
        id: this.machineid,
        start_time: Date.parse(olddate) / 1000,
        end_time: Date.parse(nowdate) / 1000
      }).then(d => {
        if (d.status === 0) {
          console.log(d)
          let tempData = d.data
          for (let ck in tempData.cpu) {
            tempData.cpu[ck] = this.formatDate(tempData.cpu[ck])
          }
          // this.cpu = tempData.cpu
          this.chartData('cpu', tempData.cpu)

          for (let mk in tempData.memory) {
            tempData.memory[mk] = this.formatDate(tempData.memory[mk])
          }
          this.chartData('memory', tempData.memory)
          // console.log(this.formatDisk(tempData.disk))
          this.disk = this.formatDisk(tempData.disk)
          // this.$refs.diskchart.update(this.formatDisk(tempData.disk), true)
          // 定期抓取
          this.temptimeout = setTimeout(_ => {
            this.getPerformance(AJAX_TWO_TIME)
            clearTimeout(this.temptimeout)
          }, AJAX_LOOP_TIME * 1000 * 60)
        }
      })
    },
    chartData (k, d, n = 10) {
      let len = this[k].length
      if (len === 0) {
        this[k] = d.slice(d.length - n)
      } else {
        d.forEach((v, i) => {
          if (this[k].length >= n) this[k].shift()
          this[k].push(v)
        })
      }
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
  created () {
    this.getApiData()
    this.getPerformance(AJAX_ONE_TIME)
  },
  beforeDestroy () {
    if (this.temptimeout) clearTimeout(this.temptimeout)
  }
}
