<template>
  <div class="v-addhost">
    <div class="crumbs">
      <span class="crumbs-item">服务器</span>
      <router-link class="crumbs-item" :to="{ name: 'Cluster'}">集群</router-link>
      <span class="crumbs-item qingse-text">新增主机</span>
    </div>
    <div class="v-content">
      <tabs></tabs>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AddHost'
  }
</script>
