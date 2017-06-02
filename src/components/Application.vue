<template>
  <div class="v-application">
    <div class="crumbs">
      <span class="crumbs-item">服务器</span>
      <span class="crumbs-item qingse-text">应用</span>
    </div>
    <div class="panel">
      <div class="btns-group">
        <m-btn :href="{name: 'Hub'}" class="comb-btn waves-effect lvse">新增应用</m-btn>
        <m-btn class="comb-btn waves-effect fense" @click.native="delHandle">删除应用</m-btn>
        <search class="right"></search>
      </div>
      <m-table class="striped highlight">
        <col width="60px">
        <thead slot="thead">
          <tr>
            <th><m-checkbox class="text-center" label="全选" :showlabel="false"></m-checkbox></th>
            <th>名称</th>
            <th>状态</th>
            <th>发布时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody slot="tbody">
          <tr>
            <td><m-checkbox class="text-center" label="1" :showlabel="false" v-model="selectids"></m-checkbox></td>
            <td>应用1</td>
            <td><span class="comb-label lvse white-text">正常</span></td>
            <td>2017.04.20</td>
            <td><m-btn :href="{name: 'ApplicationDetail', params:{id:1}}" class="lvse-text">查看详情</m-btn></td>
          </tr>
        </tbody>
      </m-table>
    </div>
  </div>
</template>

<script>
  import ApplicationMixin from './ApplicationMixin'
  export default {
    name: 'Application',
    mixins: [ApplicationMixin]
  }
</script>
