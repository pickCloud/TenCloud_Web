<template>
  <div class="file-details">
    <div class="crumbs">
      <span class="crumbs-item">仓库</span>
      <router-link :to="{ name:'FileHub' }" class="crumbs-item">文件仓库</router-link>
      <span class="crumbs-item qingse-text">jQuery</span>
    </div>
    <div class="panel">
      <div class="btns-group alter-button">
        <button class="comb-btn waves-effect qingse right">官网</button>
        <h5 class="qingse-text">jQuery</h5>
      </div>
    </div>
    <div class="panel file-content">
      123
    </div>
    <div class="panel file-content">
      456
    </div>
  </div>
</template>

<script>
export default {
  name: 'file-details'
}
</script>

<style scoped lang="scss">
  .panel {
    border: 0;
    margin-bottom: 3px;
    .btns-group {
      margin-top: -8px;
      padding-top: 8px;
      margin-bottom: -8px;
      h5 {
        font-size: 20px;
        margin-top: 8px;
      }
    }
  }
  .file-content {
    padding-left: 48px;
  }
</style>
