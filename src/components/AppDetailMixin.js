import ChartCMD from './ChartCMD.js'
import Popper from './Poppers.js'

export default {
  data: () => ({
    performance: 'app_performance',
    performanceData: {}
  }),
  mixins: [ChartCMD, Popper],
  methods: {
    getApiData () {
      this.performanceData.server_id = this.$route.params.mid
      this.performanceData.container_name = this.$route.params.name
      console.log(this.$route.params)
    }
  },
  created () {
    this.getApiData()
  }
}
