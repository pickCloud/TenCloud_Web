<template>
  <panel title="用户文件">
    <div class="path-box clearfix">
          <span class="path-span">
            a/b/c
          </span>
      <div class="btn-group right">
        <m-btn class="primary_bg no-radius grey-dark_txt">上传文件</m-btn>
        <m-btn class="primary_bg no-radius grey-dark_txt m-r8">新建文件夹</m-btn>
        <m-btn class="primary_bg no-radius grey-dark_txt">下载</m-btn>
        <m-btn class="pink_bg no-radius grey-dark_txt">删除</m-btn>
      </div>
    </div>
    <div class="p-lr-16">
      <m-table class="hover striped machines-table">
        <col width="55px">
        <col width="15%">
        <col width="15%">
        <col width="20%">
        <col width="20%">
        <thead>
        <tr>
          <th><m-checkbox class="list-check" :data="{label: '全选'}" v-model="isSelectAll" hideLabel></m-checkbox></th>
          <th>名称</th>
          <th>尺寸</th>
          <th>更新时间</th>
          <th>所有者</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td><m-checkbox class="list-check" v-model="selects" :data="{label:'11'}" hide-label></m-checkbox></td>
          <td>111</td>
          <td>222</td>
          <td>333</td>
          <td>444</td>
          <td>
            555
            <!--<m-btn :href="{name:'ProjectDetail', params:{id:item.id}}" class="primary_txt">详情</m-btn>-->
            <!--<m-btn class="pink_txt" @click.native="delProject(item.id)">删除</m-btn>-->
          </td>
        </tr>
        </tbody>
      </m-table>
    </div>
  </panel>
</template>

<script>
  import HubOutMixin from './FileHubOutMixins'
  export default {
    mixins: [HubOutMixin]
  }
</script>
