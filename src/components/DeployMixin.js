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
    version: {}
  }),
  methods: {
    getVerList () {
      this.$Global.async('project_image', true).getData(null, this.$route.params.name + '/versions').then(d => {
        if (d.status === 0) {
          this.verdata = d.data.map((v, i) => {
            return {
              label: v.version,
              value: v.version
            }
          })
          this.version = this.verdata[0]
        }
      })
    },
    gomlist () {
      this.$router.replace({name: 'Machines', params: this.$route.params})
    },
    startDeploy () {
      let pdata = {
        image_name: this.version.value,
        public_ip: this.$route.params.machineids.join(',')
      }
      if (!pdata.public_ip) {
        this.$toast('请选择机器', 'cc')
        return
      }
      this.$Global.async('project_deployment', true).getData(pdata).then(d => {
        console.log(d)
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
      this.$router.push({name: 'ProjectDetail', params: {id: this.$route.params.id}})
    } else {
      this.getVerList()
    }
  }
}
