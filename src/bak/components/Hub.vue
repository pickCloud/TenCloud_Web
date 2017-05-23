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
      <div class="panel">
        <div class="btns-group">
          <router-link :to="{name:'Hubup'}" class="comb-btn waves-effect lvse">上传</router-link>
          <search class="right"></search>
        </div>
        <table class="striped highlight">
          <col width="20%">
          <col width="40%">
          <col width="40%">
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
              <td>
                <router-link :to="{name:'HubInfo', params:{id:1}}" class="lvse-text hub-btn">详情</router-link>
                <router-link :to="{name:'ProDeploy', params:{id:1}}" class="qingse-text hub-btn">部署</router-link>
              </td>
            </tr>
            <tr>
              <td>名称</td>
              <td>说明</td>
              <td>
                <router-link :to="{name:'HubInfo', params:{id:1}}" class="lvse-text hub-btn">详情</router-link>
                <router-link :to="{name:'ProDeploy', params:{id:1}}" class="qingse-text hub-btn">部署</router-link>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="clearfix"><pages class="right" :allpage="5" :nowpage="1" @change="pageChange"></pages></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Hub',
    methods: {
      pageChange () {
        return
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../scss/hub";
  table {
    margin-bottom: 24px;
  }
</style>
