<template>
  <div class="page-pad page-machine-detail">
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
                <e-line :data="cpu" label="CPU使用量"></e-line>
              </panel>
            </m-col>
            <m-col class="xs-12 lg-6">
              <panel title="内存" class="p-b16">
                <e-line :data="memory" label="内存使用量" border-color="#eb6565" :linearg="['rgba(235,101,101,1)','rgba(235,101,101,0)']"></e-line>
              </panel>
            </m-col>
            <m-col class="xs-12 lg-6">
              <panel class="p-b16">
                <div class="panel-title m-b16" slot="title">硬盘使用情况</div>
                <e-pie :data="disk" :label="[{name: '使用', icon: 'circle'}, {name: '空余', icon: 'circle'}]" :radius="['60%', '50%']"></e-pie>
                <!--<m-chart :option="disk" ref="diskchart" :nodes="2"></m-chart>-->
              </panel>
            </m-col>
            <m-col class="xs-12 lg-6">
              <panel title="网络" class="p-b16"></panel>
            </m-col>
          </m-row>
        </panel>
      </m-col>
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
            <m-col class="xs-8">{{baseInfo.name}}</m-col>
          </m-row>
          <m-row class="panel-list">
            <m-col class="xs-4">服务商</m-col>
            <m-col class="xs-8">{{baseInfo.cluster_name}}</m-col>
          </m-row>
          <m-row class="panel-list">
            <m-col class="xs-4">地址</m-col>
            <m-col class="xs-8">{{baseInfo.address}}</m-col>
          </m-row>
          <m-row class="panel-list">
            <m-col class="xs-4">IP</m-col>
            <m-col class="xs-8">{{baseInfo.public_ip}}</m-col>
          </m-row>
          <m-row class="panel-list">
            <m-col class="xs-4">状态</m-col>
            <m-col class="xs-8"><span :class="machineStatus[1]">{{machineStatus[0]}}</span></m-col>
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
            <m-col class="xs-8">{{sysInfo.config.os_name}}</m-col>
          </m-row>
          <m-row class="panel-list">
            <m-col class="xs-4">系统类型</m-col>
            <m-col class="xs-8">{{sysInfo.config.os_type}}</m-col>
          </m-row>
          <m-row class="panel-list">
            <m-col class="xs-4">CPU</m-col>
            <m-col class="xs-8">{{sysInfo.config.cpu}}</m-col>
          </m-row>
          <m-row class="panel-list">
            <m-col class="xs-4">内存</m-col>
            <m-col class="xs-8">{{parseInt(sysInfo.config.memory) / 1024}}G</m-col>
          </m-row>
          <m-row class="panel-list">
            <m-col class="xs-4"></m-col>
            <m-col class="xs-8"></m-col>
          </m-row>
          <!--<m-row class="panel-list">-->
          <!--<m-col class="xs-4">网络</m-col>-->
          <!--<m-col class="xs-8">2M</m-col>-->
          <!--</m-row>-->
        </panel>
        <!-- 配置信息 END -->
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
                <td><m-btn :href="{name:'AppDetail', params: {id: 1}}">详情</m-btn></td>
              </tr>
              <tr>
                <td>NAME</td>
                <td>78</td>
                <td>15</td>
                <td>2017.1.2</td>
                <td>运行中</td>
                <td><m-btn :href="{name:'AppDetail', params: {id: 2}}">详情</m-btn></td>
              </tr>
              <tr>
                <td>NAME</td>
                <td>78</td>
                <td>15</td>
                <td>2017.1.2</td>
                <td>运行中</td>
                <td><m-btn :href="{name:'AppDetail', params: {id: 3}}">详情</m-btn></td>
              </tr>
              <tr>
                <td>NAME</td>
                <td>78</td>
                <td>15</td>
                <td>2017.1.2</td>
                <td>运行中</td>
                <td><m-btn :href="{name:'AppDetail', params: {id: 1}}">详情</m-btn></td>
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
  import MachineDetailMixin from './MachineDetailMixin.js'
  export default {
    mixins: [MachineDetailMixin]
  }
</script>
