<template>
  <div class="v-machinedetail">
    <div class="crumbs">
      <span class="crumbs-item">服务器</span>
      <router-link class="crumbs-item" :to="{name:'Cluster'}">集群</router-link>
      <router-link class="crumbs-item" :to="{name:'ClusterDetail', params:{id:baseInfo.cluster_id}}">{{baseInfo.cluster_name}}</router-link>
      <span class="qingse-text">{{ baseInfo.name }}</span>
    </div>
    <div class="panel info-panel">
      <div class="btns-group alter-button">
        <m-btn class="comb-btn waves-effect lvse" v-if="!editor" @click.native="editorHandle">修改</m-btn>
        <m-btn class="comb-btn waves-effect lvse" v-if="editor" @click.native="submitAlter">确认</m-btn>
        <m-btn class="comb-btn waves-effect lvse" v-if="editor" @click.native="cancelAlter">取消</m-btn>
      </div>
      <div class="info-left">
        <div class="info-icon">
          <img class="vam" src="../assets/cover.png" alt="">
        </div>
      </div>
      <div class="info-right article">
        <h5 class="qingse-text el-editor detail-title" :contenteditable="editor" @input="inpChange($event,'title')">{{baseInfo.name}}</h5>
        <p>机器状态： <span :class="machineStatus[1]">{{machineStatus[0]}}</span></p>
        <p>商务状态： <span :class="businessStatus[1]">{{businessStatus[0]}}</span></p>
        <p class="machine-ctrl_icon" v-if="!isWaiting">
          <i class="icon icon-qidong" v-if="machineStatus[2]==='stop'" @mouseover="$tip('开机', $event.target, 'top')" @click="machineCtr($event.target, 'server_start')"></i>
          <i class="icon icon-icon" v-if="machineStatus[2]==='run'" @mouseover="$tip('关机', $event.target, 'top')" @click="machineCtr($event.target, 'server_stop')"></i>
          <i class="icon icon-zhongzhi" v-if="machineStatus[2]==='run'" @mouseover="$tip('重启', $event.target, 'top')" @click="machineCtr($event.target, 'server_reboot')"></i>
        </p>
        <p v-else>
          <img src="../assets/spin.gif" class="vam" alt=""> <span class="vam">{{waitingTip}}</span>
        </p>
        <m-row class="machine-info_panel">
          <m-col class="xs-6">IP ： {{baseInfo.public_ip}}</m-col>
          <m-col class="xs-6">地址 ： {{baseInfo.address}}</m-col>
        </m-row>
      </div>
    </div>
    <div class="machine-title">
      系统信息
    </div>
    <div class="panel-tab">
      <m-tab :labels="['配置','应用列表','性能']" theme="block" :tabkey="0" @change="sysTabChange">
        <div>
          <m-table  class="striped">
            <tbody slot="tbody">
              <tr>
                <th>CPU</th>
                <td>{{sysInfo.config.cpu}}个</td>
              </tr>
              <tr>
                <th>内存</th>
                <td>{{parseInt(sysInfo.config.memory) / 1024}}G</td>
              </tr>
              <tr>
                <th>系统名称</th>
                <td>{{sysInfo.config.os_name}}</td>
              </tr>
              <tr>
                <th>系统类型</th>
                <td>{{sysInfo.config.os_type}}</td>
              </tr>
            </tbody>
          </m-table>
        </div>
        <div>
          <table class="striped highlight">
            <col width="15%">
            <col width="15%">
            <col width="50%">
            <col width="20%">
            <thead>
            <tr>
              <th>版本号</th>
              <th>创建时间</th>
              <th>文件</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="app in apps">
              <td>{{ app.version }}</td>
              <td>{{ app.create_time }}</td>
              <td>{{ app.path }}</td>
              <td>
                <span class="lvse-text table-details_btn">详情</span>
                <span class="qingse-text table-details_btn" @click="moveMachine">迁移</span>
                <span class="hongse-text table-details_btn" @click="delMachine">删除</span>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div>
          <m-row>
            <m-col class="xs-6"><m-echart :opation="cpu"></m-echart></m-col>
            <m-col class="xs-6"><m-echart :opation="memory"></m-echart></m-col>
            <m-col class="xs-6"><m-echart :opation="disk"></m-echart></m-col>
          </m-row>
        </div>
      </m-tab>
    </div>
    <div class="machine-title">
      商务信息
    </div>
    <div class="panel-tab">
      <m-tab :labels="['服务商','合同','日志']" theme="block" :tabkey="0">
        <div>{{businessInfo.provider}}</div>
        <div>
          <m-table  class="striped">
            <tbody>
              <tr>
                <th>创建日期</th>
                <td>{{businessInfo.contract.create_time}}</td>
              </tr>
              <tr>
                <th>截止日期</th>
                <td>{{businessInfo.contract.expired_time}}</td>
              </tr>
              <tr>
                <th>支付方式</th>
                <td>{{businessInfo.contract.charge_type}}</td>
              </tr>
            </tbody>
          </m-table>
        </div>
        <div>neirong3</div>
      </m-tab>
    </div>
  </div>
</template>

<script>
  import MachineDetailMixin from './MachineDetailMixin'
  export default {
    name: 'MachineDetail',
    mixins: [MachineDetailMixin]
  }
</script>

<style scoped lang="scss">
  .machine-ctrl_icon {
    padding-top: 4px;
    margin-bottom: 12px;
    .icon {
      font-size: 1.5rem;
      margin-right: 8px;
      cursor: pointer;
    }
  }
  .machine-info_panel {
    background-color: #f8f8f8;
    .col {
      padding: 12px 16px;
    }
  }
  .machine-title {
    padding: 0 24px;
    margin-bottom: 16px;
  }
</style>
