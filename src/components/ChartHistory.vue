<template>
  <div class="chart-history">
    <panel>
      <div class="panel-title" slot="title">
        <span>MemData 历史记录</span>
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
          <m-btn @click.native="getPerformance(startTime.time,endTime.time)">查询</m-btn>
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
            <th>磁盘</th>
            <th>网络(入/出 KB/S)</th>
          </tr>
          </thead>
          <tbody v-for="item in serverList">
          <td>
            {{item.report_time}}
          </td>

          <!--<td>{{item.address}}</td>-->
          <!--<td>{{item.public_ip}}</td>-->

          <td>
            <div>{{JSON.parse(item.cpu_content).percent}}%</div>
            <div class="percent-box">
              <div class="percent-box-bar" :class="{warning: JSON.parse(item.cpu_content).percent > 80}" :style="{width: JSON.parse(item.cpu_content).percent + '%'}"></div>
            </div>
          </td>
          <td>
            <div>{{JSON.parse(item.memory_content).percent}}%</div>
            <div class="percent-box">
              <div class="percent-box-bar" :class="{warning: JSON.parse(item.memory_content).percent > 80}" :style="{width: JSON.parse(item.memory_content).percent + '%'}"></div>
            </div>
          </td>
          <td>
            <div>{{JSON.parse(item.disk_content).percent}}%</div>
            <div class="percent-box">
              <div class="percent-box-bar" :class="{warning: JSON.parse(item.disk_content).percent > 80}" :style="{width: JSON.parse(item.disk_content).percent + '%'}"></div>
            </div>
          </td>
          <td>{{JSON.parse(item.net_content).input + '／' + JSON.parse(item.net_content).output}}</td>

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
      performance: 'app_performance',
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
        from: '',
        to: new Date().getTime()
      }],
      serverList: [{
        address: '亚太地区（东京）',
        cpu_content: '{"percent": 1.5}',
        disk_content: '{"free": 28663349248, "total": 33240739840, "percent": 13.71}',
        id: 30,
        instance_name: '',
        machine_status: '运行中',
        memory_content: '{"free": 3870736384, "total": 8369954816, "percent": 7.32, "available": 7756763136}',
        name: '教育',
        net_content: '{"input": 0, "output": 0}',
        provider: '亚马逊晕',
        public_ip: '54.250.151.32',
        report_time: '1505296072'
      }, {
        address: '亚太地区（东京）',
        cpu_content: '{"percent": 1.5}',
        disk_content: '{"free": 28663349248, "total": 33240739840, "percent": 13.71}',
        id: 30,
        instance_name: '',
        machine_status: '运行中',
        memory_content: '{"free": 3870736384, "total": 8369954816, "percent": 7.32, "available": 7756763136}',
        name: '教育',
        net_content: '{"input": 0, "output": 0}',
        provider: '亚马逊晕',
        public_ip: '54.250.151.32',
        report_time: '1505296072'
      }, {
        address: '亚太地区（东京）',
        cpu_content: '{"percent": 1.5}',
        disk_content: '{"free": 28663349248, "total": 33240739840, "percent": 13.71}',
        id: 30,
        instance_name: '',
        machine_status: '运行中',
        memory_content: '{"free": 3870736384, "total": 8369954816, "percent": 7.32, "available": 7756763136}',
        name: '教育',
        net_content: '{"input": 0, "output": 0}',
        provider: '亚马逊晕',
        public_ip: '54.250.151.32',
        report_time: '1505296072'
      }, {
        address: '亚太地区（东京）',
        cpu_content: '{"percent": 1.5}',
        disk_content: '{"free": 28663349248, "total": 33240739840, "percent": 13.71}',
        id: 30,
        instance_name: '',
        machine_status: '运行中',
        memory_content: '{"free": 3870736384, "total": 8369954816, "percent": 7.32, "available": 7756763136}',
        name: '教育',
        net_content: '{"input": 0, "output": 0}',
        provider: '亚马逊晕',
        public_ip: '54.250.151.32',
        report_time: '1505296072'
      }, {
        address: '亚太地区（东京）',
        cpu_content: '{"percent": 1.5}',
        disk_content: '{"free": 28663349248, "total": 33240739840, "percent": 13.71}',
        id: 30,
        instance_name: '',
        machine_status: '运行中',
        memory_content: '{"free": 3870736384, "total": 8369954816, "percent": 7.32, "available": 7756763136}',
        name: '教育',
        net_content: '{"input": 0, "output": 0}',
        provider: '亚马逊晕',
        public_ip: '54.250.151.32',
        report_time: '1505296072'
      }, {
        address: '亚太地区（东京）',
        cpu_content: '{"percent": 1.5}',
        disk_content: '{"free": 28663349248, "total": 33240739840, "percent": 13.71}',
        id: 30,
        instance_name: '',
        machine_status: '运行中',
        memory_content: '{"free": 3870736384, "total": 8369954816, "percent": 7.32, "available": 7756763136}',
        name: '教育',
        net_content: '{"input": 0, "output": 0}',
        provider: '亚马逊晕',
        public_ip: '54.250.151.32',
        report_time: '1505296072'
      }, {
        address: '亚太地区（东京）',
        cpu_content: '{"percent": 1.5}',
        disk_content: '{"free": 28663349248, "total": 33240739840, "percent": 13.71}',
        id: 30,
        instance_name: '',
        machine_status: '运行中',
        memory_content: '{"free": 3870736384, "total": 8369954816, "percent": 7.32, "available": 7756763136}',
        name: '教育',
        net_content: '{"input": 0, "output": 0}',
        provider: '亚马逊晕',
        public_ip: '54.250.151.32',
        report_time: '1505296072'
      }, {
        address: '亚太地区（东京）',
        cpu_content: '{"percent": 1.5}',
        disk_content: '{"free": 28663349248, "total": 33240739840, "percent": 13.71}',
        id: 30,
        instance_name: '',
        machine_status: '运行中',
        memory_content: '{"free": 3870736384, "total": 8369954816, "percent": 7.32, "available": 7756763136}',
        name: '教育',
        net_content: '{"input": 0, "output": 0}',
        provider: '亚马逊晕',
        public_ip: '54.250.151.32',
        report_time: '1505296072'
      }, {
        address: '亚太地区（东京）',
        cpu_content: '{"percent": 1.5}',
        disk_content: '{"free": 28663349248, "total": 33240739840, "percent": 13.71}',
        id: 30,
        instance_name: '',
        machine_status: '运行中',
        memory_content: '{"free": 3870736384, "total": 8369954816, "percent": 7.32, "available": 7756763136}',
        name: '教育',
        net_content: '{"input": 0, "output": 0}',
        provider: '亚马逊晕',
        public_ip: '54.250.151.32',
        report_time: '1505296072'
      }, {
        address: '亚太地区（东京）',
        cpu_content: '{"percent": 1.5}',
        disk_content: '{"free": 28663349248, "total": 33240739840, "percent": 13.71}',
        id: 30,
        instance_name: '',
        machine_status: '运行中',
        memory_content: '{"free": 3870736384, "total": 8369954816, "percent": 7.32, "available": 7756763136}',
        name: '教育',
        net_content: '{"input": 0, "output": 0}',
        provider: '亚马逊晕',
        public_ip: '54.250.151.32',
        report_time: '1505296072'
      }, {
        address: '亚太地区（东京）',
        cpu_content: '{"percent": 1.5}',
        disk_content: '{"free": 28663349248, "total": 33240739840, "percent": 13.71}',
        id: 30,
        instance_name: '',
        machine_status: '运行中',
        memory_content: '{"free": 3870736384, "total": 8369954816, "percent": 7.32, "available": 7756763136}',
        name: '教育',
        net_content: '{"input": 0, "output": 0}',
        provider: '亚马逊晕',
        public_ip: '54.250.151.32',
        report_time: '1505296072'
      }, {
        address: '亚太地区（东京）',
        cpu_content: '{"percent": 1.5}',
        disk_content: '{"free": 28663349248, "total": 33240739840, "percent": 13.71}',
        id: 30,
        instance_name: '',
        machine_status: '运行中',
        memory_content: '{"free": 3870736384, "total": 8369954816, "percent": 7.32, "available": 7756763136}',
        name: '教育',
        net_content: '{"input": 0, "output": 0}',
        provider: '亚马逊晕',
        public_ip: '54.250.151.32',
        report_time: '1505296072'
      }, {
        address: '亚太地区（东京）',
        cpu_content: '{"percent": 1.5}',
        disk_content: '{"free": 28663349248, "total": 33240739840, "percent": 13.71}',
        id: 30,
        instance_name: '',
        machine_status: '运行中',
        memory_content: '{"free": 3870736384, "total": 8369954816, "percent": 7.32, "available": 7756763136}',
        name: '教育',
        net_content: '{"input": 0, "output": 0}',
        provider: '亚马逊晕',
        public_ip: '54.250.151.32',
        report_time: '1505296072'
      }, {
        address: '亚太地区（东京）',
        cpu_content: '{"percent": 1.5}',
        disk_content: '{"free": 28663349248, "total": 33240739840, "percent": 13.71}',
        id: 30,
        instance_name: '',
        machine_status: '运行中',
        memory_content: '{"free": 3870736384, "total": 8369954816, "percent": 7.32, "available": 7756763136}',
        name: '教育',
        net_content: '{"input": 0, "output": 0}',
        provider: '亚马逊晕',
        public_ip: '54.250.151.32',
        report_time: '1505296072'
      }, {
        address: '亚太地区（东京）',
        cpu_content: '{"percent": 1.5}',
        disk_content: '{"free": 28663349248, "total": 33240739840, "percent": 13.71}',
        id: 30,
        instance_name: '',
        machine_status: '运行中',
        memory_content: '{"free": 3870736384, "total": 8369954816, "percent": 7.32, "available": 7756763136}',
        name: '教育',
        net_content: '{"input": 0, "output": 0}',
        provider: '亚马逊晕',
        public_ip: '54.250.151.32',
        report_time: '1505296072'
      }, {
        address: '亚太地区（东京）',
        cpu_content: '{"percent": 1.5}',
        disk_content: '{"free": 28663349248, "total": 33240739840, "percent": 13.71}',
        id: 30,
        instance_name: '',
        machine_status: '运行中',
        memory_content: '{"free": 3870736384, "total": 8369954816, "percent": 7.32, "available": 7756763136}',
        name: '教育',
        net_content: '{"input": 0, "output": 0}',
        provider: '亚马逊晕',
        public_ip: '54.250.151.32',
        report_time: '1505296072'
      }, {
        address: '亚太地区（东京）',
        cpu_content: '{"percent": 1.5}',
        disk_content: '{"free": 28663349248, "total": 33240739840, "percent": 13.71}',
        id: 30,
        instance_name: '',
        machine_status: '运行中',
        memory_content: '{"free": 3870736384, "total": 8369954816, "percent": 7.32, "available": 7756763136}',
        name: '教育',
        net_content: '{"input": 0, "output": 0}',
        provider: '亚马逊晕',
        public_ip: '54.250.151.32',
        report_time: '1505296072'
      }, {
        address: '亚太地区（东京）',
        cpu_content: '{"percent": 1.5}',
        disk_content: '{"free": 28663349248, "total": 33240739840, "percent": 13.71}',
        id: 30,
        instance_name: '',
        machine_status: '运行中',
        memory_content: '{"free": 3870736384, "total": 8369954816, "percent": 7.32, "available": 7756763136}',
        name: '教育',
        net_content: '{"input": 0, "output": 0}',
        provider: '亚马逊晕',
        public_ip: '54.250.151.32',
        report_time: '1505296072'
      }, {
        address: '亚太地区（东京）',
        cpu_content: '{"percent": 1.5}',
        disk_content: '{"free": 28663349248, "total": 33240739840, "percent": 13.71}',
        id: 30,
        instance_name: '',
        machine_status: '运行中',
        memory_content: '{"free": 3870736384, "total": 8369954816, "percent": 7.32, "available": 7756763136}',
        name: '教育',
        net_content: '{"input": 0, "output": 0}',
        provider: '亚马逊晕',
        public_ip: '54.250.151.32',
        report_time: '1505296072'
      }, {
        address: '亚太地区（东京）',
        cpu_content: '{"percent": 1.5}',
        disk_content: '{"free": 28663349248, "total": 33240739840, "percent": 13.71}',
        id: 30,
        instance_name: '',
        machine_status: '运行中',
        memory_content: '{"free": 3870736384, "total": 8369954816, "percent": 7.32, "available": 7756763136}',
        name: '教育',
        net_content: '{"input": 0, "output": 0}',
        provider: '亚马逊晕',
        public_ip: '54.250.151.32',
        report_time: '1505296072'
      }],
      performanceData: {
        type: 1,
        start_time: 0,
        end_time: 0,
        id: 0,
        now_page: 1,
        page_number: 10
      },
      timeType: 1,
      now_page: 1,
      page_number: 10
    }),
    created () {
      this.$store.commit('sitepath/SPLICE', [3, 1, {cn: '历史记录'}])
    },
    methods: {
      getPerformance (startTime, endTime) {
        let that = this
        this.performanceData.start_time = Date.parse(startTime) / 1000
        this.performanceData.end_time = Date.parse(endTime) / 1000
        this.performanceData.type = this.timeType
        this.performanceData.id = this.$route.params.id
        this.performanceData.now_page = that.now_page
        this.performanceData.page_number = that.page_number
          //  this.performance api地址
        this.$Global.async(this.performance, true).getData(this.performanceData).then(d => {
          console.log(d.toString())
        })
      },
      tiemTypeChange (index) {
        this.timeType = index + 1
        this.getPerformance(this.startTime, this.endTime)
      }
    },
    watch: {
      '$store.state.scroll.IS_BOTTOM' (n, o) {
        console.log(n.mutation.payload)
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
