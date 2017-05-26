<template>
  <div class="v-addhost">
    <div class="crumbs">
      <span class="crumbs-item">服务器</span>
      <router-link class="crumbs-item" :to="{ name: 'Cluster'}">集群</router-link>
      <span class="crumbs-item qingse-text">新增主机</span>
    </div>
    <div class="v-content">
      <tabs :labels="['已有新主机','去购买一台']" :tabkey="0">
        <div class="tab-cont_item">
          <!--<div class="margin-b-16 margin-t-16">操作系统</div>-->
          <!--<ul class="switch-box">-->
            <!--<li class="switch-item active">ubuntu</li>-->
            <!--<li class="switch-item">ubuntu</li>-->
            <!--<li class="switch-item">ubuntu</li>-->
            <!--<li class="switch-item">ubuntu</li>-->
          <!--</ul>-->
          <div class="margin-b-16">主机信息</div>
          <div class="row no-gutter add-host_info">
            <div class="col s4 m2 l1 center-align add-host_label">主机名称</div>
            <div class="col s8 m10 l11"><input type="text" class="form-control" v-model="formdata.name"></div>

            <div class="col s4 m2 l1 center-align add-host_label">IP</div>
            <div class="col s8 m10 l11"><input type="text" class="form-control" v-model="formdata.ip"></div>

            <div class="col s4 m2 l1 center-align add-host_label">用户名</div>
            <div class="col s8 m10 l11"><input type="text" class="form-control" v-model="formdata.username"></div>

            <div class="col s4 m2 l1 center-align add-host_label">密码</div>
            <div class="col s8 m10 l11"><input type="text" class="form-control" v-model="formdata.passwd"></div>
          </div>

          <div class="margin-b-16" v-if="clusters.length > 0">选择集群</div>
          <ul class="switch-box" v-if="clusters.length > 0">
            <li class="switch-item" :class="{'active': item.id === selectid}" v-for="item in clusters" @click="selectCluster(item.id)">{{item.name}}</li>
          </ul>
          <div class="margin-b-16">安装主机监控程序</div>
          <div class="tcm-listener">curl -sSL http://192.168.1.116/supermonitor/master.sh | sh -s {{token}}</div>

          <div class="save-box" v-if="isok">
            <div class="comb-btn waves-effect lvse" @click="addHost">保存</div>
          </div>
          <div class="waiting-link" v-else="">
            <img src="../assets/spin.gif" class="vam" alt=""> <span class="vam">等待连接</span>
          </div>
        </div>
        <div class="tab-cont_item">
          <div class="margin-b-16">合作服务商</div>
          <ul class="switch-box">
            <li class="switch-item switch-item_img"><a href="#"><img src="../assets/aliyun.jpg" alt=""></a></li>
            <li class="switch-item switch-item_img"><a href="#"><img src="../assets/txyun.jpg" alt=""></a></li>
            <li class="switch-item switch-item_img"><a href="#"><img src="../assets/qingyun.jpg" alt=""></a></li>
            <li class="switch-item switch-item_img"><a href="#"><img src="../assets/qingyun.jpg" alt=""></a></li>
            <li class="switch-item switch-item_img"><a href="#"><img src="../assets/qingyun.jpg" alt=""></a></li>
            <li class="switch-item switch-item_img"><a href="#"><img src="../assets/qingyun.jpg" alt=""></a></li>
            <li class="switch-item switch-item_img"><a href="#"><img src="../assets/qingyun.jpg" alt=""></a></li>
            <li class="switch-item switch-item_img"><a href="#"><img src="../assets/qingyun.jpg" alt=""></a></li>
            <li class="switch-item switch-item_img"><a href="#"><img src="../assets/qingyun.jpg" alt=""></a></li>
            <li class="switch-item switch-item_img"><a href="#"><img src="../assets/qingyun.jpg" alt=""></a></li>
            <li class="switch-item switch-item_img"><a href="#"><img src="../assets/qingyun.jpg" alt=""></a></li>
            <li class="switch-item switch-item_img"><a href="#"><img src="../assets/qingyun.jpg" alt=""></a></li>
          </ul>
        </div>
      </tabs>
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

<style lang="scss" scoped>
  @import "../scss/addhost";
</style>
