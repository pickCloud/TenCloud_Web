<template>
  <div class="v-addhost">
    <div class="crumbs">
      <span class="crumbs-item">服务器</span>
      <router-link class="crumbs-item" :to="{ name: 'Cluster'}">集群</router-link>
      <span class="crumbs-item qingse-text">新增主机</span>
    </div>
    <div class="v-content">
      <m-tab :labels="['已有新主机','去购买一台']" :tabkey="0">
        <div class="tab-cont_item">
          <!--<div class="margin-b-16 margin-t-16">操作系统</div>-->
          <!--<ul class="switch-box">-->
          <!--<li class="switch-item active">ubuntu</li>-->
          <!--<li class="switch-item">ubuntu</li>-->
          <!--<li class="switch-item">ubuntu</li>-->
          <!--<li class="switch-item">ubuntu</li>-->
          <!--</ul>-->
          <div class="addhost-title">主机信息</div>
          <div class="addhost-form">
            <m-input label-pos="left" :height="48" v-model="formdata.name">主机名称</m-input>
            <m-input label-pos="left" :height="48" v-model="formdata.public_ip">IP</m-input>
            <m-input label-pos="left" :height="48" v-model="formdata.username">用户名</m-input>
            <m-input label-pos="left" :height="48" v-model="formdata.passwd">密码</m-input>
          </div>

          <div class="addhost-title" v-if="clusters.length > 0">选择集群</div>
          <ul class="switch-box" v-if="clusters.length > 0">
            <li class="switch-item" :class="{'active': item.id === formdata.cluster_id}" v-for="item in clusters" @click="selectCluster(item.id)">{{item.name}}</li>
          </ul>

          <div class="save-box" v-if="status === 'save'">
            <m-btn class="comb-btn waves-effect lvse hover" @click.native="addHost">保存</m-btn>
          </div>

          <div class="waiting-link" v-if="status === 'waiting'">
            <img src="../assets/spin.gif" class="vam" alt=""> <span class="vam">等待连接</span>
          </div>
        </div>
        <div class="tab-cont_item">
          <div class="addhost-title">合作服务商</div>
          <ul class="switch-box">
            <li class="switch-item switch-item_img"><a href="https://www.aliyun.com" target="_blank"><img src="../assets/aliyun.jpg" alt=""></a></li>
            <li class="switch-item switch-item_img"><a href="https://www.qcloud.com" target="_blank"><img src="../assets/txyun.jpg" alt=""></a></li>
          </ul>
        </div>
      </m-tab>
    </div>
  </div>
</template>

<script>
  import AddHostMixin from './AddHostMixin.js'
  export default {
    name: 'AddHost',
    mixins: [AddHostMixin]
  }
</script>

<style lang="scss" src="../scss/addhost.scss"></style>
