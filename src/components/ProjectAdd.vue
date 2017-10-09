<template>
  <div class="page-pad page-project-add">
    <panel :title="isEditor?'项目修改':'添加项目'">
      <table class="add-table">
        <col width="20%">
        <col width="80%">
        <tbody>
          <tr>
            <td class="text-center">名称</td>
            <td><input type="text" @input="updataName" :value="formdata.name"></td>
          </tr>
          <tr>
            <td class="text-center">镜像名称</td>
            <td style="position: relative;">
              <input type="text"  @input="updataImage_name" :value="formdata.image_name" placeholder="请输入小写字母">
              <p class="deploy-name_tip">项目部署后以容器的形式运行：容器名称仅允许英文小写字母</p>
            </td>
          </tr>
          <tr>
            <td class="text-center">项目描述</td>
            <td><input type="text" @input="updataDescription" :value="formdata.description"></td>
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
              <bgroup v-model="imageMode" @input="updataMode" :value="formdata.mode"></bgroup>
              <keep-alive>
                <component :is="imageMode" ref="proSource" :data="propData"></component>
              </keep-alive>
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
  .lay-l {
    width: 100px;
  }
  .lay-r {
    width: 200px;
    .btn {
      height: 100%;
      width: 100%;
      margin-top: -1px;
    }
  }
  .lay-c {
    width: calc(100% - 300px);
    padding: 0 16px;
  }
  .lay-c2 {
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
  .ing-box {
    border: 1px solid rgba(255,255,255,0.1);
    position: relative;
    overflow: hidden;
  }
  .ing-box-bar {
    position: absolute;
    width: 100%;
    height: 100%;
    left: -100%;
    top: 0;
    z-index: 0;
    overflow: hidden;
    &:before {
      content: ' ';
      position: absolute;
      left: -100%;
      top: 0;
      width: 200%;
      height: 100%;
      background: url("../assets/progress.png") repeat-x;
      animation: progressLoop 2s infinite linear;
    }
  }
  .ing-box-txt {
    position: relative;
    z-index: 1;
  }
  @keyframes progressLoop {
    from {left: -100%;}
    to {left: 0;}
  }
</style>
