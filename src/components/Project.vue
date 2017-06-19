<template>
  <div class="v-project">
    <div class="crumbs">
      <span class="crumbs-item qingse-text">项目</span>
    </div>
    <div class="panel">
      <div class="btns-group">
        <m-btn :href="{name: 'ProAdd'}" class="comb-btn waves-effect lvse">新增项目</m-btn>
        <m-btn class="comb-btn waves-effect fense" @click.native="delHandle">删除项目</m-btn>
        <search class="right"></search>
      </div>
      <m-table class="striped highlight">
        <col width="60px">
        <thead slot="thead">
        <tr>
          <th><m-checkbox class="text-center" :data="{label: '全选'}" hide-label></m-checkbox></th>
          <th>图标</th>
          <th>名称</th>
          <th>状态</th>
          <th>更新时间</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody slot="tbody">
        <tr>
          <td><m-checkbox class="text-center" :data="{label: 1}" hide-label v-model="selectids"></m-checkbox></td>
          <td><div class="pro-cover"><img src="../assets/cover.png" alt=""></div></td>
          <td>项目1</td>
          <td><span class="comb-label lvse white-text">正常</span></td>
          <td>2017.04.20</td>
          <td>
            <m-btn :href="{name: 'ProDetail', params:{id:1}}" class="lvse-text">查看详情</m-btn>
            <m-btn @click.native="delHandle" class="hongse-text">删除</m-btn>
          </td>
        </tr>
        </tbody>
      </m-table>
    </div>
  </div>
</template>

<script>
  import ProjectMixin from './ProjectMixin.js'
  export default {
    name: 'Project',
    mixins: [ProjectMixin]
  }
</script>

<style lang="scss">
  .pro-cover {
    width: 40px;
    height: 40px;
    border: 2px dashed #ccc;
    border-radius: 4px;
  }
</style>
