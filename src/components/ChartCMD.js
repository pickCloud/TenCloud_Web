const AJAX_ONE_TIME = 60 // 分钟
const AJAX_TWO_TIME = 1 // 分钟
const AJAX_LOOP_TIME = 1 // 分钟

export default {
  data: () => ({
    cpu: [],
    memory: [],
    disk: [],
    performance: 'server_performance'
  }),
  methods: {
    formatDate (p) {
      return [
        (new Date(p[0] * 1000)).Format('yyyy/MM/dd hh:mm:ss'),
        p[1].percent,
        this.tipinfo(p)
      ]
    },
    tipinfo (ppp) {
      let p = ppp[1]
      let temp = '<p class="tooltip-title">' + (new Date(ppp[0] * 1000)).Format('yyyy/MM/dd hh:mm:ss') + '</p><p class="tooltip-body"><i class="tooltip-dian"></i>使用率：' + p.percent + '%'
      if (p.free) temp += '<br><i class="tooltip-dian"></i>空余：' + this.toG(p.free) + 'G'
      if (p.total) temp += '<br><i class="tooltip-dian"></i>总量：' + this.toG(p.total) + 'G'
      return temp + '</p>'
    },
    formatDisk (p) {
      const free = p[0][1].free
      const total = p[0][1].total
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
      this.$Global.async(this.performance, true).getData({
        id: this.machineid,
        start_time: Date.parse(olddate) / 1000,
        end_time: Date.parse(nowdate) / 1000
      }).then(d => {
        if (d.status === 0) {
          // console.log(d)
          let tempData = d.data
          if (tempData.cpu.length > 20) tempData.cpu = tempData.cpu.slice(-20)
          for (let ck in tempData.cpu) {
            tempData.cpu[ck] = this.formatDate(tempData.cpu[ck])
          }
          // this.cpu = tempData.cpu
          this.chartData('cpu', tempData.cpu)

          if (tempData.memory.length > 20) tempData.memory = tempData.memory.slice(-20)
          for (let mk in tempData.memory) {
            tempData.memory[mk] = this.formatDate(tempData.memory[mk])
          }
          this.chartData('memory', tempData.memory)
          // console.log(this.formatDisk(tempData.disk))
          if (tempData.disk.length > 20) tempData.disk = tempData.disk.slice(-20)
          for (let dk in tempData.disk) {
            tempData.disk[dk] = this.formatDate(tempData.disk[dk])
          }
          this.chartData('disk', tempData.disk)
          // if (tempData.disk.length > 0) this.disk = this.formatDisk(tempData.disk.slice(-1))
          // this.$refs.diskchart.update(this.formatDisk(tempData.disk), true)
          // console.log(tempData)
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
  mounted () {
    this.getPerformance(AJAX_ONE_TIME)
  },
  beforeDestroy () {
    if (this.temptimeout) clearTimeout(this.temptimeout)
  }
}
