// const AJAX_ONE_TIME = 60 // 分钟
const AJAX_TWO_TIME = 1 // 分钟
const AJAX_LOOP_TIME = 1 // 分钟

const MAP = {
  'app_performance': ['入量', '出量', 'KB'],
  'server_performance': ['入带宽', '出带宽', 'KB/S']
}

export default {
  data: () => ({
    cpu: [],
    memory: [],
    block: [],
    disk: [],
    nets: [],
    maxChartNum: 8
  }),
  methods: {
    formatDate (p) {
      // if (p.length > this.maxnum) p = p.slice(-this.maxnum)
      return [
        p.map((v, i) => {
          return [
            (new Date(v.created_time * 1000)).Format('yyyy/MM/dd hh:mm:ss'),
            v.percent,
            this.tipinfo(v)
          ]
        })
      ]
    },
    formatNet (p) {
      // if (p.length > this.maxnum) p = p.slice(-this.maxnum)
      // console.log(parseFloat(p[0][1].input), parseFloat(p[0][1].output))
      return [
        p.map((v, i) => {
          return [
            (new Date((v.created_time + '') * 1000)).Format('yyyy/MM/dd hh:mm:ss'),
            parseFloat(v.input),
            this.netTip(v)
          ]
        }),
        p.map((v, i) => {
          return [
            (new Date(v.created_time * 1000)).Format('yyyy/MM/dd hh:mm:ss'),
            parseFloat(v.output)
          ]
        })
      ]
    },
    netTip (p) {
      let temptxt = MAP[this.performance]
      let temp = '<p class="tooltip-title">' + (new Date(p.created_time * 1000)).Format('yyyy/MM/dd hh:mm:ss') + '</p><p class="tooltip-body">'
      temp += '<i class="tooltip-dian" style="background-color: #95c099;"></i>' + temptxt[0] + '：' + p.input + temptxt[2]
      temp += '<br><i class="tooltip-dian" style="background-color: #eb6565;"></i>' + temptxt[1] + '：' + p.output + temptxt[2]
      return temp + '</p>'
    },
    tipinfo (ppp) {
      let p = ppp
      let temp = '<p class="tooltip-title">' + (new Date(p.created_time * 1000)).Format('yyyy/MM/dd hh:mm:ss') + '</p><p class="tooltip-body"><i class="tooltip-dian"></i>使用率：' + p.percent + '%'
      if (p.free) temp += '<br><i class="tooltip-dian"></i>空余：' + this.toG(p.free) + 'G'
      if (p.total) temp += '<br><i class="tooltip-dian"></i>总量：' + this.toG(p.total) + 'G'
      return temp + '</p>'
    },
    // formatDisk (p) {
    //   const free = p[0][1].free
    //   const total = p[0][1].total
    //   return [
    //     {
    //       value: this.toG(total - free),
    //       name: '使用',
    //       itemStyle: {
    //         normal: {color: '#48bbc0'}
    //       }
    //     },
    //     {
    //       value: this.toG(free),
    //       name: '空余',
    //       itemStyle: {
    //         normal: {color: '#ffe0b2'}
    //       }
    //     }
    //   ]
    // },
    toG (v) {
      return (v / 1024 / 1024 / 1024).toFixed(2)
    },
    getPerformance (n = 1, isClearData = false) {
      let nowdate = new Date().getTime()
      let olddate = nowdate - 1000 * 60 * n

      this.performanceData.start_time = Math.floor(olddate / 1000)
      this.performanceData.end_time = Math.floor(nowdate / 1000)
      this.performanceData.type = 0
      this.$axios.http(this.performance, this.performanceData, 'post').then(d => {
        if (d.status === 0) {
          // console.log(d)
          if (isClearData) {
            let that = this
            if (this.cpu[0] && this.cpu[0].data) {
              that.cpu[0].data.splice(0, that.cpu[0].data.length)
            }
            if (this.memory[0] && this.memory[0].data) {
              that.memory[0].data.splice(0, that.memory[0].data.length)
            }
            if (this.nets[0] && this.nets[0].data && this.nets[1] && this.nets[1].data) {
              that.nets[0].data.splice(0, that.nets[0].data.length)
              that.nets[1].data.splice(0, that.nets[1].data.length)
            }
            if (this.disk[0] && this.disk[0].data) {
              that.disk[0].data.splice(0, that.disk[0].data.length)
            }
          }
          let tempData = d.data
          if (tempData.cpu) this.chartData('cpu', this.formatDate(tempData.cpu))
          if (tempData.memory) this.chartData('memory', this.formatDate(tempData.memory))
          if (tempData.disk) this.chartData('disk', this.formatDate(tempData.disk))
          if (tempData.block) this.chartData('block', this.formatNet(tempData.block))
          if (tempData.net) this.chartData('nets', this.formatNet(tempData.net))
          // put
          // console.log(tempData.net)
          // 定期抓取
          if (n === 60) {
            this.temptimeout = setTimeout(_ => {
              this.getPerformance(AJAX_TWO_TIME)
              clearTimeout(this.temptimeout)
            }, AJAX_LOOP_TIME * 1000 * 60)
          }
          // console.log(AJAX_LOOP_TIME, AJAX_TWO_TIME)
        }
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
          timeNum = 60 * 24 * 30
          break
      }
      this.getPerformance(timeNum, true)
    },
    chartData (k, d) {
      console.log(k)
      d.forEach((v, i) => {
        if (!this[k][i]) this.$set(this[k], i, {data: []})
        let temp = this[k][i].data
        v.slice(-this.maxChartNum).forEach((d, j) => {
          if (!temp.slice(-1)[0] || temp.slice(-1)[0][0] !== d[0]) {
            if (temp.length > this.maxChartNum) temp.shift()
            temp.push(d)
          }
        })
      })
      // console.log(this[k])
      // console.log(this[k])
      // let len = this[k].length
      // if (len === 0) {
      //   this[k] = d.slice(d.length - n)
      // } else {
      //   d.forEach((v, i) => {
      //     if (this[k].length >= n) this[k].shift()
      //     this[k].push(v)
      //   })
      // }
    }
  },
  mounted () {
    // this.getPerformance(AJAX_ONE_TIME)
  },
  beforeDestroy () {
    if (this.temptimeout) clearTimeout(this.temptimeout)
  }
}
