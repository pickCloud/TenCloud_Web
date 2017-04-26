<template>
  <div class="v-proadd">
    <div class="crumbs">
      <router-link class="crumbs-item" :to="{name:'Project'}">项目</router-link>
      <span class="crumbs-item qingse-text">新增项目</span>
    </div>
    <div class="v-content">
      <h5>项目名称</h5>
      <input type="text" class="form-control">
      <h5>代码源</h5>
      <input type="text" class="form-control">
      <h5>图标</h5>
      <fileinput></fileinput>
      <h5>描述</h5>
      <textarea name="" class="form-control"></textarea>
      <div class="save-box">
        <div class="comb-btn waves-effect lvse">保存</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProAdd'
  }
</script>

<style lang="scss" scoped>
  @import "../scss/variables";
  h5 {
    font-size: 1rem;
    margin-top: 32px;
    margin-bottom: 16px;
  }
  .form-control {
    border-color: $border-color-darken;
  }
  textarea.form-control {
    min-height: 190px;
  }
  .save-box {
    margin-top: 32px;
    text-align: center;
  }
</style>
