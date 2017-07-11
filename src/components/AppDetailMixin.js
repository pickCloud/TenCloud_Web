import ChartCMD from './ChartCMD.js'
import Popper from './Poppers.js'

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
    performanceData: {}
  }),
  mixins: [ChartCMD, Popper],
  methods: {
    getApiData () {
      this.performanceData.server_id = this.$route.params.mid
      this.performanceData.container_name = this.$route.params.name
      // console.log(this.$route.params)
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
      this.$Global.async(t, true).getData({
        server_id: this.$route.params.mid,
        container_id: this.$route.params.cid
      }).then(d => {
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
      const h = this.$createElement
      this.popperInfo('您确定要删除 ' + '你妹' + ' 吗?', _ => {
        let deltip = this.$confirm({
          theme: 'comb-msg',
          hasClose: false,
          maskClose: false,
          content: h('span', null, [h('img', {attrs: {src: '../static/img/spin.gif', class: 'vam m-r8'}}), h('span', {attrs: {class: 'vam'}}, '删除中')]),
          buttons: []
        })
        // let ttt = setTimeout(_ => {
        //   deltip.actionPopper()
        //   clearTimeout(ttt)
        // }, 1000)
        this.$Global.async('container_del', true).getData({
          server_id: this.$route.params.mid,
          container_id: this.$route.params.cid
        }).then(d => {
          if (d.status === 0) {
            deltip.actionPopper()
            this.$router.back()
          }
          this.$toast(d.message, 'cc')
        }, e => {
          console.log(typeof e)
        })
      })
    }
  },
  created () {
    this.getApiData()
  }
}
