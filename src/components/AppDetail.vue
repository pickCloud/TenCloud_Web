<template>
  <div class="page-pad page-app-detail">
    <m-row :gutter="16">
      <m-col class="xs-12 lg-8">
        <panel class="m-b16">
          <div class="panel-title" slot="title">
            <span class="bold m-r8">监控</span>
            <!--<small>2017-06-26</small>-->
          </div>
          <m-row :gutter="16" class="mdc-chart">
            <m-col class="xs-12 lg-6">
              <panel title="CPU" class="p-b16">
                <d3-line class="panel-body cpu-line" :sizeh="250" :data="linedata"></d3-line>
              </panel>
            </m-col>
            <m-col class="xs-12 lg-6">
              <panel title="内存" class="p-b16">
                <d3-line class="panel-body mem-line" :sizeh="250" :data="linedata"></d3-line>
              </panel>
            </m-col>
            <m-col class="xs-12 lg-6">
              <panel class="p-b16">
                <div class="panel-title m-b16" slot="title">硬盘使用情况</div>
                <d3-pies class="panel-body" :sizeh="177" :data="piedata"></d3-pies>
              </panel>
            </m-col>
            <m-col class="xs-12 lg-6">
              <panel title="网络" class="p-b16"></panel>
            </m-col>
          </m-row>
        </panel>
        <panel title="日志" class="m-b16">
          <div class="panel-body">this is node</div>
        </panel>
      </m-col>
      <m-col class="xs-12 lg-4">
        <!-- 基本信息-->
        <panel class="m-b16">
          <div class="panel-title clearfix" slot="title">
            <span class="bold">MemData</span>
            <span class="right"><span class="inline-block m-r8">修改</span> <i class="icon-quan"></i></span>
          </div>
          <div class="panel-list mcd-ctrl-group">
            <div class="mcd-ctrl-item">关/开 <m-switch></m-switch></div>
            <div class="mcd-ctrl-item">重启 <i class="icon-quan"></i></div>
            <div class="mcd-ctrl-item">迁移 <i class="icon-quan"></i></div>
            <div class="mcd-ctrl-item">删除 <i class="icon-quan"></i></div>
            <span class="justify_fix"></span>
          </div>
          <m-row class="panel-list">
            <m-col class="xs-4">状态</m-col>
            <m-col class="xs-8">正常</m-col>
          </m-row>
          <m-row class="panel-list">
            <m-col class="xs-4">更新时间</m-col>
            <m-col class="xs-8">2017-6-30</m-col>
          </m-row>
        </panel>
        <!-- 基本信息END -->
        <!-- 运行信息 -->
        <panel class="m-b16">
          <div class="panel-title clearfix" slot="title">
            <span class="bold">运行信息</span>
          </div>
          <m-row class="panel-list">
            <m-col class="xs-4">运行环境</m-col>
            <m-col class="xs-8">机器的名称或集群的名称</m-col>
          </m-row>
          <m-row class="panel-list">
            <m-col class="xs-4">IP</m-col>
            <m-col class="xs-8">120.24.86.72</m-col>
          </m-row>
          <m-row class="panel-list">
            <m-col class="xs-4">容器端口</m-col>
            <m-col class="xs-8">8080</m-col>
          </m-row>
          <m-row class="panel-list">
            <m-col class="xs-4">访问地址</m-col>
            <m-col class="xs-8">http://www.10.com:8080</m-col>
          </m-row>
        </panel>
        <!-- 运行信息 END -->
      </m-col>
    </m-row>
  </div>
</template>

<script>
  export default {
    data: () => ({
      piedata: [
        {color: '#48bbc0', value: 250, vr: 1.1, name: '使用'},
        {color: '#ffe0b2', value: 150, vr: 1, name: '空余'}
      ],
      linedata: [
        {date: new Date(2017, 3, 8), value: 50},
        {date: new Date(2017, 3, 9), value: 40},
        {date: new Date(2017, 3, 10), value: 70},
        {date: new Date(2017, 3, 11), value: 50},
        {date: new Date(2017, 3, 12), value: 90}
      ]
    }),
    mounted () {
      let tio = setTimeout(_ => {
        clearTimeout(tio)
        this.linedata.push({date: new Date(2017, 3, 13), value: 70})
      }, 1000)
    }
  }
</script>
