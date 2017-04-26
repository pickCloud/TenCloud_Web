<template>
  <div class="v-hub">
    <div class="hub-if">
      <h5>来源</h5>
      <div class="btns-group">
        <div class="comb-btn active">自研</div>
        <div class="comb-btn">自研</div>
      </div>
      <h5>类别</h5>
      <div class="btns-group">
        <div class="comb-btn active">工具</div>
        <div class="comb-btn">系统</div>
        <div class="comb-btn">系统</div>
        <div class="comb-btn">系统</div>
        <div class="comb-btn">系统</div>
      </div>
    </div>
    <div class="hub-box">
      <div class="crumbs">
        <span class="crumbs-item">仓库</span>
        <span class="crumbs-item qingse-text">镜像仓库</span>
      </div>
      <div class="v-content">
        <div class="btns-group">
          <div class="comb-btn waves-effect lvse">上传</div>
          <search class="right"></search>
        </div>
        <table class="striped highlight centered app-list_table">
          <thead>
            <tr>
              <th>名称</th>
              <th>说明</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>名称</td>
              <td>说明</td>
              <td>操作</td>
            </tr>
            <tr>
              <td>名称</td>
              <td>说明</td>
              <td>操作</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Hub'
  }
</script>

<style lang="scss" scoped>
  @import "../scss/hub";
</style>
