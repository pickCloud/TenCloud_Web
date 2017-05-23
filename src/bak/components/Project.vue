<template>
  <div class="v-app">
    <div class="crumbs">
      <span class="crumbs-item qingse-text">项目</span>
    </div>
    <div class="panel">
      <div class="btns-group">
        <router-link class="comb-btn waves-effect lvse" :to="{name:'ProAdd'}">新增项目</router-link>
        <div class="comb-btn waves-effect fense" @click="delApp">删除项目</div>
        <search class="right"></search>
      </div>
      <table class="striped highlight">
        <thead>
        <tr>
          <th><checkbox></checkbox></th>
          <th>图标</th>
          <th>名称</th>
          <th>状态</th>
          <th>更新时间</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td><checkbox></checkbox></td>
          <td><img class="_pro-icon" src="../../static/images/user-head.jpg" alt=""></td>
          <td>项目1</td>
          <td><span class="comb-label lvse white-text">正常</span></td>
          <td>2017.04.20</td>
          <td><router-link class="lvse-text" :to="{name: 'ProInfo', params:{id:1}}">查看详情</router-link></td>
        </tr>
        <tr>
          <td><checkbox></checkbox></td>
          <td><img class="_pro-icon" src="../../static/images/user-head.jpg" alt=""></td>
          <td>项目1</td>
          <td><span class="comb-label fense-l white-text">异常</span></td>
          <td>2017.04.20</td>
          <td><router-link class="lvse-text" :to="{name: 'ProInfo', params:{id:2}}">查看详情</router-link></td>
        </tr>
        <tr>
          <td><checkbox></checkbox></td>
          <td><img class="_pro-icon" src="../../static/images/user-head.jpg" alt=""></td>
          <td>项目1</td>
          <td><span class="comb-label fense-l white-text">异常</span></td>
          <td>2017.04.20</td>
          <td><router-link class="lvse-text" :to="{name: 'ProInfo', params:{id:3}}">查看详情</router-link></td>
        </tr>
        </tbody>
      </table>
      <div class="clearfix"><pages class="right" :allpage="5" :nowpage="1" @change="pageChange"></pages></div>
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
    name: 'Project',
    data () {
      return {
        delbody: ''
      }
    },
    methods: {
      delApp () {
        this.delbody = '您确定要删除项目XX吗？'
        this.$refs.delapp.show()
      },
      pageChange () {
        return
      }
    }
  }
</script>

<style lang="scss" scoped>
  ._pro-icon {
    display: inline-block;
    width: 30px;
    height: 30px;
    vertical-align: middle;
    border-radius: 5px;
    border: 1px dashed #ccc;
  }
  table {
    margin-bottom: 24px;
  }
</style>
