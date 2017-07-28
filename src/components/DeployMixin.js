import StatusCode from './StatusCode.js'
export default {
  filters: {
    'mstatus' (v) {
      return StatusCode.machine[v][0]
    },
    'mclass' (v) {
      return StatusCode.machine[v][1]
    }
  },
  data: () => ({
    verdata: [],
    version: {},
    image_name: '',
    isDoing: false
  }),
  methods: {
    getVerList () {
      const reload = this.$route.params.machines === undefined
      this.$Global.async('project_image', reload).getData(null, this.$route.params.name + '/versions').then(d => {
        if (d.status === 0) {
          this.verdata = d.data.map((v, i) => {
            return {
              label: v.version,
              value: v.version
            }
          })
          this.version = reload ? this.verdata[0] : this.$route.params.version
        }
      })
    },
    gomlist () {
      let temp = this.$route.params
      temp.version = this.version
      this.$router.replace({name: 'Machines', params: temp})
    },
    getMachineIps () {
      let temp = []
      if (this.$route.params.machines) temp = this.$route.params.machines
      return temp.map((v, i) => {
        return {
          public_ip: v.public_ip
        }
      })
    },
    startDeploy () {
      let pdata = {
        image_name: this.image_name + ':' + this.version.value,
        ips: this.getMachineIps()
      }
      if (this.image_name === '') {
        this.$toast('容器名称不能为空', 'cc')
        return
      }
      if (!pdata.ips.length === 0) {
        this.$toast('请选择机器', 'cc')
        return
      }
      this.isDoing = true
      this.$Global.async('project_deployment', true).getData(pdata).then(d => {
        if (d.status === 0) {
          this.$router.replace({name: 'ProjectDetail', params: {id: this.$route.params.id}})
        }
        this.$toast(d.message, 'cc')
        this.isDoing = false
      })
    }
  },
  computed: {
    machines () {
      return this.$route.params.machines || []
    }
  },
  created () {
    if (!this.$route.params.name) {
      this.$router.replace({name: 'ProjectDetail', params: {id: this.$route.params.id}})
    } else {
      this.image_name = this.$route.params.image_name || ''
      this.getVerList()
    }
  }
}
