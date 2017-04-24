<template>
  <div class="v-app">
    <div class="crumbs">
      <span class="crumbs-item">服务器</span>
      <span class="crumbs-item qingse-text">应用</span>
    </div>
    <div class="app-list_box">
      <div class="btns-group">
        <div class="comb-btn waves-effect lvse">新增应用</div>
        <div class="comb-btn waves-effect fense" @click="delApp">删除应用</div>
        <search class="right"></search>
      </div>
      <table class="striped highlight centered app-list_table">
        <col width="40px">
        <thead>
          <tr>
            <th><input type="checkbox"></th>
            <th>名称</th>
            <th>状态</th>
            <th>发布时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox"></td>
            <td>应用1</td>
            <td>应用1</td>
            <td>应用1</td>
            <td>应用1</td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>应用1</td>
            <td>应用1</td>
            <td>应用1</td>
            <td>应用1</td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>应用1</td>
            <td>应用1</td>
            <td>应用1</td>
            <td>应用1</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 删除集群弹窗 -->
    <modal buttons="确定,取消" buttonsClass="comb-btn lvse,comb-btn qingse" ref="delapp" class="comb-dialog mini">
      <div class="comb-dialog_info center-align red-text large"><i class="ten-icon">&#xe691;</i> <span v-html="delbody"></span></div>
    </modal>
    <!-- 删除集群弹窗 end -->
  </div>
</template>

<script>
  export default {
    name: 'Apps',
    data () {
      return {
        delbody: ''
      }
    },
    methods: {
      delApp () {
        this.delbody = '您确定要删除应用XX吗？'
        this.$refs.delapp.show()
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../scss/apps";
</style>
