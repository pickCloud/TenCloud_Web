<template>
  <div class="v-appinfo">
    <div class="crumbs">
      <span class="crumbs-item">服务器</span>
      <router-link class="crumbs-item" :to="{name:'Apps'}">应用</router-link>
      <span class="crumbs-item qingse-text">应用详情</span>
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

</style>
