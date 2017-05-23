<template>
  <div class="v-probuild">
    <div class="crumbs">
      <span class="crumbs-item">项目</span>
      <router-link class="crumbs-item" :to="{ name: 'ProInfo', params:{id:1}}">项目详情</router-link>
      <span class="crumbs-item qingse-text">构建</span>
    </div>
    <div class="v-content">

    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProBuild'
  }
</script>
