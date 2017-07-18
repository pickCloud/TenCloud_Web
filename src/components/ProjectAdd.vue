<template>
  <div class="page-pad page-project-add">
    <panel :title="isEditor?'项目修改':'添加项目'">
      <table class="add-table">
        <col width="20%">
        <col width="80%">
        <tbody>
          <tr>
            <td class="text-center">名称</td>
            <td><input type="text" v-model="formdata.name" placeholder="请输入小写字母"></td>
          </tr>
          <tr>
            <td class="text-center">项目描述</td>
            <td><input type="text" v-model="formdata.description"></td>
          </tr>
          <tr>
            <td class="text-center">选择类别</td>
            <td class="p-lr-16">
              <m-radio v-model="formdata.mode" :data="{label: '普通项目', value: '0'}" class="m-r8"></m-radio>
              <m-radio v-model="formdata.mode" :data="{label: '基础服务', value: '1'}" class="m-r8"></m-radio>
              <m-radio v-model="formdata.mode" :data="{label: '应用组件', value: '2'}"></m-radio>
            </td>
          </tr>
          <tr>
            <td class="text-center">项目来源</td>
            <td class="p-lr-16">
              <div class="btn-group"><m-btn class="primary_bg no-radius grey-dark_txt btn-github" :class="gitLoadStyle" @click.native="bindGitHub" v-html="git_tip"></m-btn></div>
              <div class="git-list" v-if="githubs.length > 0">
                <table class="table hover striped machines-table theme-dft">
                  <thead>
                  <tr>
                    <th>仓库名称</th>
                    <th>仓库路径</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(item, i) in githubs">
                    <td><m-radio v-model="repos_idx" :data="{label:item.repos_name, value:i+''}"></m-radio></td>
                    <td>{{item.repos_url}}</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="p-16 text-center"><m-btn class="primary_bg no-radius grey-dark_txt" @click.native="addProject">{{isEditor?'确定修改':'确定添加'}}</m-btn></div>
    </panel>
  </div>
</template>

<script>
  import ProjectAddMixin from './ProjectAddMixin.js'
  export default {
    mixins: [ProjectAddMixin]
  }
</script>
