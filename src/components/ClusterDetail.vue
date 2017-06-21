<template>
  <div class="v-clusterdetail">
    <div class="crumbs">
      <span class="crumbs-item">服务器</span>
      <router-link class="crumbs-item" :to="{name:'Cluster'}">集群</router-link>
      <span class="crumbs-item qingse-text">{{ cluster.name }}详情</span>
    </div>
    <div class="panel info-panel">
      <div class="btns-group alter-button">
        <m-btn class="comb-btn waves-effect lvse" v-if="!editor" @click.native="editorHandle">修改</m-btn>
        <m-btn class="comb-btn waves-effect lvse" v-if="editor" @click.native="submitAlter">确认</m-btn>
        <m-btn class="comb-btn waves-effect lvse" v-if="editor" @click.native="cancelAlter">取消</m-btn>
      </div>
      <div class="info-left">
        <div class="info-icon"><img class="vam" src="../assets/cover.png" alt=""></div>
      </div>
      <div class="info-right article">
        <h5 class="qingse-text el-editor detail-title" :contenteditable="editor" @input="inpChange($event,'title')">{{ cluster.name }}</h5>
        <p class="time">更新时间：{{ cluster.update_time }}</p>
        <p class="el-editor" :contenteditable="editor" @input="inpChange($event,'description')">{{ cluster.description }}</p>
      </div>
    </div>
    <div class="panel">
      <div class="btns-group">
        <m-btn :href="{ name:'AddHost', params: {id: clusterid} }" class="comb-btn waves-effect lvse">添加主机</m-btn>
        <m-btn class="comb-btn waves-effect qingse" @click.native="moveMachine(-1)">迁移主机</m-btn>
        <m-btn class="comb-btn waves-effect hongse" @click.native="delMachine(-1)">删除主机</m-btn>
        <search class="right"></search>
      </div>
      <m-table class="striped highlight">
        <col width="60px">
        <thead>
        <tr>
          <th><m-checkbox class="text-center" :data="{label: '全选'}" v-model="selectAll" hide-label></m-checkbox></th>
          <th>名称</th>
          <th>IP</th>
          <th>状态</th>
          <th>地址</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="host in hosts">
          <td><m-checkbox class="text-center" :data="{label: host.id+''}" v-model="hostids" hide-label></m-checkbox></td>
          <td><m-btn class="qingse-text" :href="{name:'MachineDetail', params:{id: host.id}}">{{ host.name }}</m-btn></td>
          <td>{{ host.public_ip }}</td>
          <td>{{ host.machine_status | mstatus }}</td>
          <td>{{ host.address }}</td>
          <td>
            <m-btn class="lvse-text" :href="{name:'MachineDetail', params:{id: host.id}}">详情</m-btn>
            <m-btn class="hongse-text" @click.native="delMachine(host.id)">删除</m-btn>
            <m-btn class="qingse-text" @click.native="moveMachine(host.id)">迁移</m-btn>
          </td>
        </tr>
        </tbody>
      </m-table>
    </div>
  </div>
</template>

<script>
  import ClusterDetailMixin from './ClusterDetailMixin'
  export default {
    name: 'ClusterDetail',
    mixins: [ClusterDetailMixin]
  }
</script>

<style lang="scss" scoped>
  .v-clusterdetail {
    .detail-title {
      margin-bottom: 8px;
    }
  }
</style>
