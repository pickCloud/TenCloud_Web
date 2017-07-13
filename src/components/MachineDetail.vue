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
              <panel title="CPU(%)" class="p-b16">
                <div class="panel-body">
                  <e-line :series="cpu"></e-line>
                </div>
              </panel>
            </m-col>
            <m-col class="xs-12 lg-6">
              <panel title="内存(%)" class="p-b16">
                <div class="panel-body">
                  <e-line :series="memory" :colors="[['#eb6565', 'rgba(235,101,101,1)','rgba(235,101,101,0)']]"></e-line>
                </div>
              </panel>
            </m-col>
            <m-col class="xs-12 lg-6">
              <panel title="硬盘使用情况(%)" class="p-b16">
                <div class="panel-body">
                  <e-line :series="disk" :colors="[['#95c099', 'rgba(93,117,103,1)','rgba(93,117,103,0)']]"></e-line>
                </div>
                <!--<e-pie :data="disk" :label="[{name: '使用', icon: 'circle'}, {name: '空余', icon: 'circle'}]" :radius="['60%', '50%']"></e-pie>-->
                <!--<m-chart :option="disk" ref="diskchart" :nodes="2"></m-chart>-->
              </panel>
            </m-col>
            <m-col class="xs-12 lg-6">
              <panel title="网络" class="p-b16">
                <div class="panel-body">
                  <e-line :series="nets" :colors="[['#95c099', 'rgba(93,117,103,1)','rgba(93,117,103,0)'],['#eb6565', 'rgba(235,101,101,1)','rgba(235,101,101,0)']]"></e-line>
                </div>
              </panel>
            </m-col>
          </m-row>
        </panel>
      </m-col>
      <m-col class="xs-12 lg-4">
        <!-- 基本信息-->
        <panel class="m-b16">
          <div class="panel-title clearfix" slot="title">
            <span class="bold">基本信息</span>
            <span class="right editor-btn-group">
              <span v-if="!isInfoEditor" @click="editorBegin"><m-btn :sizeh="-1"><span class="vam">修改</span> <i class="icon icon-editor vam"></i></m-btn></span>
              <span v-if="isInfoEditor" @click="editorSure"><m-btn :sizeh="-1">确定</m-btn></span>
              <span v-if="isInfoEditor" @click="editorCancel"><m-btn :sizeh="-1">取消</m-btn></span>
            </span>
          </div>
          <div class="panel-list mcd-ctrl-group">
            <div class="mcd-ctrl-item">
              <span v-if="!isWaiting">开机/关机 <m-switch class="switchMachine" v-model="isOpen" @change="machineChange" :disabled="isDisabled"></m-switch></span>
            </div>
            <div class="mcd-ctrl-item">
              <m-btn v-if="machineStatus[2]==='run' && !isWaiting" @click.native="machineCtrPop('server_reboot')"><span class="vam">重启</span> <i class="icon icon-zhongzhi vam"></i></m-btn>
            </div>
            <!--<div class="mcd-ctrl-item">-->
              <!--<m-btn>迁移 <i class="icon-quan"></i></m-btn>-->
            <!--</div>-->
            <div class="mcd-ctrl-item">
              <m-btn @click.native="deleteMachine"><span class="vam">删除</span> <i class="icon icon-delete vam"></i></m-btn>
            </div>
            <span class="justify_fix"></span>
          </div>
          <m-row class="panel-list" v-if="isWaiting">
            <m-col class="xs-12"><img src="../assets/spin.gif" class="vam" alt=""> <span class="vam">{{waitingTip}}</span></m-col>
          </m-row>
          <m-row class="panel-list">
            <m-col class="xs-4">名称</m-col>
            <m-col class="xs-8">
              <input class="edirot-input" type="text" data-key="baseInfo.name" data-name="name" v-model="baseInfo.name" readonly>
            </m-col>
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
            <m-col class="xs-8"><span class="plate" :class="machineStatus[1]">{{machineStatus[0]}}</span></m-col>
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
        <panel class="p-b16 m-b16">
          <div class="panel-title" slot="title">
            <span class="m-r8">容器列表</span>
            <small>(容器: 独立运行的一个或一组应用，以及它们的运行生态环境)	</small>
          </div>
          <div class="panel-body">
            <m-table class="hover striped block-table centered">
              <col width="15%">
              <col width="20%">
              <col width="20%">
              <col width="25%">
              <col width="15%">
              <thead>
              <tr>
                <th>containerID</th>
                <th>名称</th>
                <th>状态</th>
                <th>更新时间</th>
                <th>操作</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in applists">
                <td>{{item[0]}}</td>
                <td>{{item[1]}}</td>
                <td>{{item[2]}}</td>
                <td>{{item[3]}}</td>
                <td><m-btn class="primary_txt" :href="{name:'AppDetail',params:{mid:$route.params.id,name:item[1],cid:item[0]}}">详情</m-btn></td>
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
