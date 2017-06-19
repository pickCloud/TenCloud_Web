<template>
  <div class="v-proadd">
    <div class="crumbs">
      <router-link class="crumbs-item" :to="{ name: 'Project'}">项目</router-link>
      <span class="crumbs-item qingse-text">新增项目</span>
    </div>
    <div class="v-content">
      <div class="proadd-title">项目名称</div>
      <m-input :sizeh="48"></m-input>
      <div class="proadd-title">代码源</div>
      <m-input :sizeh="48"></m-input>
      <div class="proadd-title">图标</div>
      <m-file></m-file>
      <div class="proadd-title">描述</div>
      <m-textarea :sizeh="48"></m-textarea>

      <m-btn class="comb-btn waves-effect lvse hover" @click.native="addHost">保存</m-btn>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProAdd'
  }
</script>

<style lang="scss">
  .proadd-title,.input-group,.textarea-group,.formbylabel {
    font-weight: 400;
    margin-bottom: 16px;
  }
  .v-proadd {
    input,textarea {
      border-radius: 10px;
    }
  }
</style>
