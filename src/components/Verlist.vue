<template>
  <div class="page-pad page-verlist">
    <panel title="版本列表">
      <div class="panel-body p-b16">
        <m-table class="hover striped machines-table m-b16">
          <col width="25%">
          <col width="25%">
          <col width="25%">
          <col width="25%">
          <thead>
          <tr>
            <th>镜像名称</th>
            <th>版本号</th>
            <th>更新时间</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in lists">
            <td>{{item.image_name}}</td>
            <td>{{item.version}}</td>
            <td>{{item.update_time}}</td>
            <td>
              <m-btn class="primary_txt">日志</m-btn>
              <m-btn class="pink_txt">删除</m-btn>
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
  export default {
    data: () => ({
      lists: []
    }),
    created () {
      if (!this.$route.params.verlist) {
        this.$router.replace({name: 'Main'})
      } else {
        this.lists = this.$route.params.verlist
        this.$store.commit('sitepath/SET_PATH', [
          {name: 'Main', cn: '主页'},
          {name: 'Projects', cn: '项目列表'},
          {name: 'ProjectDetail', cn: this.$route.params.name, params: {id: this.$route.params.id}},
          {cn: '版本列表'}
        ])
      }
    }
  }
</script>

<style lang="scss">
  .page-verlist {
    th,td {
      padding-left: 8px !important;
    }
  }
</style>
