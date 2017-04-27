<template>
  <div class="v-hubup">
    <div class="crumbs">
      <span class="crumbs-item">仓库</span>
      <router-link :to="{name:'Hub'}" class="crumbs-item">镜像仓库</router-link>
      <span class="crumbs-item qingse-text">上传</span>
    </div>
    <div class="v-content">
      <div class="margin-b-16">镜像名称</div>
      <input type="text" class="form-control margin-b-24">
      <div class="margin-b-16">来源</div>
      <div class="panel-tab only-mrg-b">
        <tabs :labels="['本地','云地址']" theme="block">
          <div><fileinput></fileinput></div>
          <div><input type="text" class="form-control"></div>
        </tabs>
      </div>
      <div class="margin-b-16">说明</div>
      <textarea name="" class="form-control margin-b-24"></textarea>
      <div class="margin-b-16 center-align">
        <span class="comb-btn waves-effect lvse">保存</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Hubup'
  }
</script>

<style lang="scss" scoped>
  textarea.form-control {
    min-height: 190px;
  }
</style>
