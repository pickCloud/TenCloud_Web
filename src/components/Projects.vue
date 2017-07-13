<template>
  <div class="page-pad page-machines">
    <panel>
      <div class="panel-title" slot="title">
        <m-btn :href="{name:'ProjectAdd'}" class="primary_bg no-radius grey-dark_txt">添加项目</m-btn>
        <m-btn class="pink_bg no-radius grey-dark_txt" @click.native="delProject(-1)">删除</m-btn>
      </div>
      <div class="panel-body p-b16">
        <m-table class="hover striped machines-table">
          <col width="55px">
          <col width="10%">
          <col width="10%">
          <col width="15%">
          <col width="30%">
          <col width="15%">
          <thead>
          <tr>
            <th><m-checkbox class="list-check" :data="{label: '全选'}" v-model="isSelectAll" hideLabel></m-checkbox></th>
            <th>名称</th>
            <th>类别</th>
            <th>仓库名</th>
            <th>仓库地址</th>
            <th>更新时间</th>
            <td>操作</td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in listts">
            <td><m-checkbox class="list-check" v-model="selects" :data="{label:(item.id+'')}" hide-label></m-checkbox></td>
            <td>{{item.name}}</td>
            <td>普通项目</td>
            <td>{{item.repos_name}}</td>
            <td>{{item.repos_url}}</td>
            <td>{{item.update_time}}</td>
            <td>
              <m-btn :href="{name:'MachineDetail', params:{id:item.id}}" class="primary_txt">详情</m-btn>
              <m-btn class="pink_txt" @click.native="delProject(item.id)">删除</m-btn>
            </td>
          </tr>
          </tbody>
        </m-table>
      </div>
    </panel>
    <!--<m-page :allpage="10" :nowpage="1" :sizeh="48" :sizew="48"></m-page>-->
  </div>
</template>

<script>
  import ProjectsMixin from './ProjectsMixin.js'
  export default {
    mixins: [ProjectsMixin]
  }
</script>
