<template>
  <div class="v-appinfo">
    <div class="crumbs">
      <span class="crumbs-item">服务器</span>
      <router-link class="crumbs-item" :to="{name:'Apps'}">应用</router-link>
      <span class="crumbs-item qingse-text">应用详情</span>
    </div>
    <div class="v-content">
      <div class="head margin-b-24">
        <div class="avatar">
          <img src="../assets/cluster-avatar.png">
        </div>
        <div class="article">
    			<h4 class="qingse-text editable">应用1</h4>
          <p>
            <span>运行状态：</span>
            <span class="lvse-text">正常</span>
          </p>
          <p>
            <span>发布时间：</span>
            <span>2017年5月4日</span>
          </p>
    		</div>
    	</div>
    </div>
    <div class="panel-tab margin-b-24">
      <tabs :labels="['监控','部署策略','部署日志', '运行日志']" theme="block" :tabkey="1">
        <div>监控</div>
        <div>部署策略</div>
        <div>部署日志</div>
        <div>运行日志</div>
      </tabs>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppsInfo',
    data () {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
.head {
  .avatar img {
    width: 144px;
    height: 144px;
  }
  .article {
    h4 {
      padding-bottom: 8px;
    }
    p {
      padding-top: 8px;
    }
  }
}
</style>
