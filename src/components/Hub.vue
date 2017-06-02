<template>
  <div class="v-hub">
    <div class="hub-if">
      <h5>来源</h5>
      <div class="btns-group">
        <m-btn class="comb-btn active">自研</m-btn>
        <m-btn class="comb-btn">自研</m-btn>
      </div>
      <h5>类别</h5>
      <div class="btns-group">
        <m-btn class="comb-btn active">工具</m-btn>
        <m-btn class="comb-btn">系统</m-btn>
        <m-btn class="comb-btn">系统</m-btn>
        <m-btn class="comb-btn">系统</m-btn>
        <m-btn class="comb-btn">系统</m-btn>
        <m-btn class="comb-btn">系统</m-btn>
      </div>
    </div>
    <div class="hub-box">
      <div class="crumbs">
        <span class="crumbs-item">仓库</span>
        <span class="crumbs-item qingse-text">镜像仓库</span>
      </div>
      <div class="panel">
        <div class="btns-group">
          <m-btn class="comb-btn waves-effect lvse" :href="''">上传</m-btn>
          <search class="right"></search>
        </div>
        <m-table class="striped highlight">
          <col width="20%">
          <col width="40%">
          <col width="40%">
          <thead slot="thead">
          <tr>
            <th>名称</th>
            <th>说明</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody slot="tbody">
          <tr>
            <td>名称</td>
            <td>说明</td>
            <td>
              <!--<router-link :to="{name:'HubInfo', params:{id:1}}" class="lvse-text hub-btn">详情</router-link>-->
              <!--<router-link :to="{name:'ProDeploy', params:{id:1}}" class="qingse-text hub-btn">部署</router-link>-->
            </td>
          </tr>
          <tr>
            <td>名称</td>
            <td>说明</td>
            <td>
              <!--<router-link :to="{name:'HubInfo', params:{id:1}}" class="lvse-text hub-btn">详情</router-link>-->
              <!--<router-link :to="{name:'ProDeploy', params:{id:1}}" class="qingse-text hub-btn">部署</router-link>-->
            </td>
          </tr>
          </tbody>
        </m-table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Hub'
  }
</script>

<style lang="scss" scoped src="../scss/hub.scss"></style>
