<template>
  <div class="page-pad page-project-add">
    <panel title="添加项目">
      <m-row class="panel-form-list panel-body" :gutter="8">
        <m-col class="xs-12 sm-3">
          <div class="__content text-center">名称</div>
        </m-col>
        <m-col class="xs-12 sm-9">
          <div class="__content"><input type="text" v-model="formdata.name"></div>
        </m-col>
        <m-col class="xs-12 sm-3">
          <div class="__content text-center">项目描述</div>
        </m-col>
        <m-col class="xs-12 sm-9">
          <div class="__content"><input type="text" v-model="formdata.description"></div>
        </m-col>
        <m-col class="xs-12 sm-3">
          <div class="__content text-center">项目来源</div>
        </m-col>
        <m-col class="xs-12 sm-9" style="height: auto;">
          <div class="__content __table-content">
            <m-table class="hover striped machines-table">
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
            </m-table>
          </div>
        </m-col>
        <m-col class="xs-12 text-center">
          <m-btn class="primary_bg no-radius grey-dark_txt" @click.native="addProject">确定添加</m-btn>
        </m-col>
      </m-row>
    </panel>
  </div>
</template>

<script>
  import ProjectAddMixin from './ProjectAddMixin.js'
  export default {
    mixins: [ProjectAddMixin]
  }
</script>
