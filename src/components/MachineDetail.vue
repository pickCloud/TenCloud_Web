<template>
  <div class="page-machine-detail">
    <m-row :gutter="16">
      <m-col class="xs-12 lg-4">
        <!-- 基本信息-->
        <panel class="m-b16">
          <div class="panel-title clearfix" slot="title">
            <span class="bold">基本信息</span>
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
            <m-col class="xs-4">名称</m-col>
            <m-col class="xs-8">MemData</m-col>
          </m-row>
          <m-row class="panel-list">
            <m-col class="xs-4">服务商</m-col>
            <m-col class="xs-8">阿里云</m-col>
          </m-row>
          <m-row class="panel-list">
            <m-col class="xs-4">地址</m-col>
            <m-col class="xs-8"> 华南 1 （深圳）</m-col>
          </m-row>
          <m-row class="panel-list">
            <m-col class="xs-4">IP</m-col>
            <m-col class="xs-8">127.0.0.1</m-col>
          </m-row>
          <m-row class="panel-list">
            <m-col class="xs-4">状态</m-col>
            <m-col class="xs-8">运行中</m-col>
          </m-row>
        </panel>
        <!-- 基本信息END -->
        <!-- 配置信息 -->
        <panel class="m-b16">
          <div class="panel-title clearfix" slot="title">
            <span class="bold">配置信息</span>
          </div>
          <m-row class="panel-list">
            <m-col class="xs-4">操作系统</m-col>
            <m-col class="xs-8">CentOS 7.3 64位</m-col>
          </m-row>
          <m-row class="panel-list">
            <m-col class="xs-4">CPU</m-col>
            <m-col class="xs-8">2个</m-col>
          </m-row>
          <m-row class="panel-list">
            <m-col class="xs-4">内存</m-col>
            <m-col class="xs-8">2G</m-col>
          </m-row>
          <m-row class="panel-list">
            <m-col class="xs-4">磁盘</m-col>
            <m-col class="xs-8">2G</m-col>
          </m-row>
          <m-row class="panel-list">
            <m-col class="xs-4">网络</m-col>
            <m-col class="xs-8">2M</m-col>
          </m-row>
        </panel>
        <!-- 配置信息 END -->
      </m-col>
      <m-col class="xs-12 lg-8">
        <panel>
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
      </m-col>
      <m-col class="xs-12">
        <panel title="应用">
          <div class="panel-body">
            <m-table class="hover striped block-table centered">
              <col width="10%">
              <col width="20%">
              <col width="15%">
              <col width="15%">
              <col width="20%">
              <col width="20%">
              <thead>
              <tr>
                <th>名称</th>
                <th>containerID</th>
                <th>pid</th>
                <th>更新时间</th>
                <th>状态</th>
                <th>操作</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>NAME</td>
                <td>78</td>
                <td>15</td>
                <td>2017.1.2</td>
                <td>运行中</td>
                <td><m-btn>详情</m-btn></td>
              </tr>
              <tr>
                <td>NAME</td>
                <td>78</td>
                <td>15</td>
                <td>2017.1.2</td>
                <td>运行中</td>
                <td><m-btn>详情</m-btn></td>
              </tr>
              <tr>
                <td>NAME</td>
                <td>78</td>
                <td>15</td>
                <td>2017.1.2</td>
                <td>运行中</td>
                <td><m-btn>详情</m-btn></td>
              </tr>
              <tr>
                <td>NAME</td>
                <td>78</td>
                <td>15</td>
                <td>2017.1.2</td>
                <td>运行中</td>
                <td><m-btn>详情</m-btn></td>
              </tr>
              </tbody>
            </m-table>
          </div>
        </panel>
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
