<template>
  <div class="page-pad page-project-add">
    <panel :title="isEditor?'项目修改':'添加项目'">
      <table class="add-table">
        <col width="20%">
        <col width="80%">
        <tbody>
          <tr>
            <td class="text-center">名称</td>
            <td><input type="text" v-model="formdata.name"></td>
          </tr>
          <tr>
            <td class="text-center">镜像名称</td>
            <td style="position: relative;">
              <input type="text" v-model="formdata.image_name" placeholder="请输入小写字母">
              <p class="deploy-name_tip">项目部署后以容器的形式运行：容器名称仅允许英文小写字母</p>
            </td>
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
              <div class="btn-group">
                <m-btn class="no-radius btn-github" :class="[gitLoadStyle, btnIdx === 0 ? btnActive : '']" @click.native="bindGitHub" v-html="git_tip"></m-btn>
                <m-btn class="no-radius btn-github" :class="[btnIdx === 1 ? btnActive : '']" @click.native="upImage" v-if="formdata.mode!=0">从本地上传镜像</m-btn>
                <m-btn class="no-radius btn-github" :class="[btnIdx === 2 ? btnActive : '']" @click.native="downImage" v-if="formdata.mode!=0">从云端下载镜像</m-btn>
              </div>
              <div class="git-list" v-if="githubs.length > 0 && btnIdx === 0">
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
              <div class="up-image m-b16 p-16" v-if="btnIdx === 1">
                <div class="lay-lcr clearfix m-b16">
                  <div class="lay-left text-center">
                    <div class="formbylabel file theme-dft">
                      <input type="file" id="a5wpj6gl9za" name="file" @change="fileChange" accept=".tar">
                      <label for="a5wpj6gl9za" class="file-label">选择文件</label>
                    </div>
                  </div>
                  <div class="lay-center">
                    <div class="lay-striped-bg p-lr-16">{{upfile.value}} </div>
                  </div>
                  <div class="lay-right">
                    <m-btn class="primary_bg grey-dark_txt" :sizeh="-1" @click.native="startUpImage">开始上传</m-btn>
                  </div>
                </div>
                <div class="lay-lcr clearfix">
                  <div class="lay-left text-center lay-border">版本号</div>
                  <div class="lay-center2">
                    <input type="text">
                  </div>
                </div>
              </div>
              <div class="down-image m-b16 p-16" v-if="btnIdx === 2">
                <div class="lay-lcr clearfix m-b16">
                  <div class="lay-left text-center lay-border">镜像地址</div>
                  <div class="lay-center">
                    <input type="text">
                  </div>
                  <div class="lay-right">
                    <m-btn class="primary_bg grey-dark_txt" :sizeh="-1">开始下载</m-btn>
                  </div>
                </div>
                <div class="lay-lcr clearfix">
                  <div class="lay-left text-center lay-border">版本号</div>
                  <div class="lay-center2">
                    <input type="text">
                  </div>
                </div>
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

<style lang="scss">
  .page-project-add {
    .btn-group {
      .btn {
        border:1px solid rgba(255,255,255,0.1);
      }
    }
  }
  .up-image, .down-image {
    background-color: #262a35;
  }
  .lay-lcr {
    > div {
      float: left;
      height: 50px;
      line-height: 50px;
    }
    .file-label {
      display: block;
      border: none;
      padding: 0;
      background-color: #48bbc0 !important;
      color: #282828;
      &:hover {
        color: #fff !important;
      }
    }
  }
  .lay-left {
    width: 100px;
  }
  .lay-right {
    width: 200px;
    .btn {
      height: 100%;
      width: 100%;
      margin-top: -1px;
    }
  }
  .lay-center {
    width: calc(100% - 300px);
    padding: 0 16px;
  }
  .lay-center2 {
    width: calc(100% - 100px);
    padding-left: 16px;
  }
  .lay-primary-bg {
    background-color: #48bbc0;
    color: #282828;
  }
  .lay-border {
    border: 1px solid rgba(255,255,255,0.1);
  }
  .lay-striped-bg {
    background-color: #1d212a;
    height: 100%;
  }
</style>
