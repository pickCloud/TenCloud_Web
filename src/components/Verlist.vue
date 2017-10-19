<template>
  <div class="page-pad page-verlist">
    <panel>
      <div slot="title" class="panel-title">【{{itemName}}】版本列表</div>
      <div class="panel-body p-b16">
        <m-table class="hover striped machines-table m-b16">
          <col width="20%">
          <col width="20%">
          <col width="20%">
          <col width="20%">
          <!--<col width="20%">-->
          <thead>
          <tr>
            <th>版本号</th>
            <th>镜像来源</th>
            <!--<th>项目名称</th>-->
            <th>更新时间</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item, index) in lists">
            <!--<td>{{item.image_name}}</td>-->
            <td>{{item.version}}</td>
            <td>{{selectSource(item.image_source)}}</td>
            <td>{{item.update_time}}</td>
            <td>
              <m-btn :href="{name:'VerNotes', params: {v:item.version, pname: baseName}}" class="primary_txt">日志</m-btn>
              <m-btn @click.native="deleteItem(baseName,item.version,index)" class="pink_txt">删除</m-btn>
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
  import axios from '../store/request/axios'
  export default {
    data: () => ({
      lists: [],
      itemName: '',
      baseName: ''
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
        this.itemName = this.$route.params.image_name
        this.baseName = this.$route.params.name
      }
    },
    methods: {
      selectSource (source) {
        switch (source) {
          case 0:
            return '项目构建'
          case 1:
            return '本地上传'
          case 2:
            return '云端下载'
        }
      },
      deleteItem (prjName, version, index) {
        axios.http('project_vers', '', 'delete', prjName + '/image' + '/' + version + '/log').then(d => {
          if (d.status === 0) {
            this.lists.splice(index, 1)
          }
        })
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
