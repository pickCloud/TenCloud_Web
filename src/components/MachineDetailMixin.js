const STAUTS = {
  business: {
    '0': ['运行中', 'lvse-text', 'run'],
    '1': ['已停止', 'hongse-text', 'stop'],
    '2': ['启动中', 'lvse-text', 'run'],
    '3': ['停止中', 'hongse-text', 'stop'],
    '4': ['满负载', 'hongse-text', 'run']
  },
  machine: {
    '0': ['适用', 'lvse-text'],
    '1': ['正常', 'lvse-text'],
    '2': ['锁定', 'hongse-text'],
    '3': ['过期', 'hongse-text'],
    '4': ['即将过期', 'hongse-text']
  }
}
export default {
  data: () => ({
    baseInfo: {},
    businessInfo: {},
    sysInfo: {},
    apps: {},
    machineid: -1,
    editor: false,
    cpu: {},
    memory: {},
    disk: {}
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
    getPerformance () {
      this.$Global.async('')
    },
    editorHandle () {
      this.editor = true
      this.tempEditor.title = this.title
      this.tempEditor.description = this.description
    },
    submitAlter () {
      this.editor = false
      if (this.tempEditor.title === this.title && this.tempEditor.description === this.description) return
      this.$Global.async('cluster_update').getData({
        id: this.$route.params.id,
        name: this.tempEditor.title,
        description: this.tempEditor.description
      }).then(d => {
        this.cluster.name = this.tempEditor.title
        this.cluster.description = this.tempEditor.description
        this.$toast(d.message)
      })
    },
    cancelAlter () {
      this.editor = false
      this.title = this.cluster.name + ' '
      this.description = this.cluster.description + ' '
    },
    machineCtr (t) {
      this.$Global.async(t, true).getData(null, this.machineid).then(d => {
        console.log(d)
      })
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
