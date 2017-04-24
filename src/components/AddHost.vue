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
          <h5>操作系统</h5>
          <ul class="switch-box">
            <li class="switch-item active">ubuntu</li>
            <li class="switch-item">ubuntu</li>
            <li class="switch-item">ubuntu</li>
            <li class="switch-item">ubuntu</li>
          </ul>
          <h5>选择集群</h5>
          <ul class="switch-box">
            <li class="switch-item active">默认</li>
            <li class="switch-item">集群1</li>
            <li class="switch-item">集群2</li>
          </ul>
          <h5>主机名称</h5>
          <input type="text" class="form-control" placeholder="TCM_00124">
          <div class="save-box">
            <div class="comb-btn waves-effect lvse">保存</div>
          </div>
        </div>
        <div class="tab-cont_item">
          <h5>合作服务商</h5>
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
  export default {
    name: 'AddHost',
    mounted () {
      console.log(this.$http)
    }
  }
</script>

<style lang="scss" scoped>
  @import "../scss/addhost";
</style>
