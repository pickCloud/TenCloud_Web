<template>
  <div class="chart-history">
    <panel>
      <div class="panel-title" slot="title">
        <span>{{name}} 历史记录</span>
        <div class="right" style="margin-top: -5px">
          <m-btn-group :idx="0" class="m-r8 clearfix" @change="tiemTypeChange">
            <m-btn >正常</m-btn>
            <m-btn>按时平均</m-btn>
            <m-btn>按天平均</m-btn>
          </m-btn-group>
        </div>
      </div>
      <div class="panel-body">
        <div class="chart-history-if">
          <span class="vam m-r8">开始时间</span>
          <div class="vam input-flex m-r16">
            <!--<input type="text">-->
            <date-picker :date="startTime" :option="option" :limit="limit"></date-picker>
            <span class="input-flex-icon"></span>
          </div>
          <span class="vam m-r8">截止时间</span>
          <div class="vam input-flex m-r16">
            <date-picker :date="endTime" :option="option" :limit="limit"></date-picker>
            <span class="input-flex-icon"></span>
          </div>
          <m-btn @click.native="getPerformance(false, true)">查询</m-btn>
        </div>
        <m-table class="hover striped machines-table m-b16">
          <col width="20%">
          <col width="20%">
          <col width="20%">
          <col width="20%">
          <col width="20%">
          <thead>
          <tr>
            <th>时间</th>
            <th>CPU</th>
            <th>内存</th>
            <th>Block I/O</th>
            <th>网络(入/出 KB/S)</th>
          </tr>
          </thead>
          <tbody v-for="item in serverList">
          <td>
            {{item.created_time}}
          </td>

          <!--<td>{{item.address}}</td>-->
          <!--<td>{{item.public_ip}}</td>-->

          <td>
            <div>{{item.cpu.percent}}%</div>
            <div class="percent-box">
              <div class="percent-box-bar" :class="{warning: item.cpu.percent > 80}" :style="{width: item.cpu.percent + '%'}"></div>
            </div>
          </td>
          <td>
            <div>{{item.memory.percent}}%</div>
            <div class="percent-box">
              <div class="percent-box-bar" :class="{warning: item.memory.percent > 80}" :style="{width: item.memory.percent + '%'}"></div>
            </div>
          </td>
          <td>{{item.block.input + '／' + item.block.output}}</td>
          <td>{{item.net.input + '／' + item.net.output}}</td>

          </tbody>
        </m-table>
      </div>
    </panel>
  </div>
</template>

<script>
  import myDatepicker from 'vue-datepicker'
  import Selects from './Selects.js'
  export default {
    mixins: [Selects],
    components: {
      'date-picker': myDatepicker
    },
    data: () => ({
      performance: 'server_performance',
      performanceDocker: 'server_performance_docker',
      startTime: {
        time: ''
      },
      endTime: {
        time: ''
      },
      option: {
        type: 'min',
        week: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        format: 'YYYY-MM-DD HH:mm',
        placeholder: '选择时间',
        inputStyle: {
          'display': 'inline-block',
          'padding': '3px',
          'line-height': '22px',
          'font-size': '16px',
          'border': '1px solid #2B2F3A',
          'color': '#5F5F5F'
//          'box-sizing': 'border-box'
        },
        color: {
          header: '#ccc',
          headerText: '#f00'
        },
        buttons: {
          ok: 'Ok',
          cancel: 'Cancel'
        },
        overlayOpacity: 0.5, // 0.5 as default
        dismissible: false // as true as default
      },
      limit: [{
        type: 'day',
        available: [1, 2, 3, 4, 5]
      }, {
        type: 'fromto',
        from: new Date().getTime() - 30 * 24 * 60 * 60 * 1000,
        to: new Date().getTime()
      }],
      serverList: [],
      performanceData: {
        type: 1,
        start_time: new Date().getTime() - 7 * 24 * 60 * 60 * 1000,
        end_time: new Date().getTime(),
        now_page: 1,
        page_number: 10,
        container_name: '',
        server_id: 0
      },
      timeType: 1,
      now_page: 1,
      page_number: 20,
      isHaveData: true,
      name: ''
    }),
    created () {
      this.name = this.$route.params.container_name
      this.$store.commit('sitepath/SPLICE', [2, 1, {name: 'MachineDetail', params: {id: this.$route.params.server_id}, cn: this.$route.params.container_name}, {cn: '历史记录'}])
      let dateStart = new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000)
      this.startTime.time = this.timeFormat(dateStart)
      let dateEnd = new Date(new Date().getTime())
      this.endTime.time = this.timeFormat(dateEnd)
    },
    methods: {
      getPerformance (isContinue = false, isSetHaveDate = false) {
        if (isSetHaveDate) {
          this.isHaveData = isSetHaveDate
        }
        if (!isContinue) {
          this.now_page = 1
          this.serverList.splice(0, this.serverList.length)
        }
        if (this.startTime.time && this.endTime.time) {
          this.performanceData.start_time = Date.parse(this.startTime.time) / 1000
          this.performanceData.end_time = Date.parse(this.endTime.time) / 1000
        }
        this.performanceData.type = this.timeType
        this.performanceData.id = this.$route.params.id
        if (isContinue) {
          this.now_page++
        }
        this.performanceData.now_page = this.now_page
        this.performanceData.page_number = this.page_number
        //  this.performance api地址
        // 添加是否是容器历史
        this.performanceData.server_id = this.$route.params.id
        this.performanceData.container_name = this.$route.params.container_name
        this.$Global.async(this.$route.params.container_name ? this.performanceDocker : this.performance, true).getData(this.performanceData).then(d => {
          for (let i = 0; i < d.data.length; i++) {
            let date = new Date(d.data[i].created_time * 1000)
            let restr = this.timeFormat(date)
            d.data[i].created_time = restr
            this.serverList.push(d.data[i])
          }
          if (d.data.length < 20) {
            this.isHaveData = false
            return false
          }
        })
      },
      tiemTypeChange (index) {
        this.timeType = index + 1
        this.isHaveData = true
        this.getPerformance(false, true)
      },
      timeFormat (date) {
        let Y = date.getFullYear() + '-'
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
        let D = date.getDate() + ' '
        let h = date.getHours() + ':'
        let m = date.getMinutes() + ':'
        let s = date.getSeconds()
        if (h.length === 2) {
          h = '0' + h
        }
        if (m.length === 2) {
          m = '0' + m
        }
        s = s + ''
        if (s.length === 1) {
          s = '0' + s
        }
        return `${Y}${M}${D} ${h}${m}${s}`
      }
    },
    watch: {
      '$store.state.scroll.isBottom' (n, o) {
        if (n) {
          // pass
          if (this.isHaveData) {
            this.getPerformance(true)
          } else {
            console.log('暂无数据')
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  .chart-history-if {
    height: 40px;
    line-height: 40px;
    margin: 16px 0;
  }
  .input-flex {
    width: 270px;
    word-spacing: -4px;
    > input {
      display: inline-block;
      background: none;
      width: 240px;
      height: 30px;
      line-height: 30px;
      border: 1px solid #2B2F3A;
      padding: 0 16px;
      color: #7f8da4;
      vertical-align: middle;
    }
  }
  .input-flex-icon {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #2B2F3A;
    vertical-align: middle;
    background: url('../assets/date.png') 50% 50% no-repeat;
  }
</style>
