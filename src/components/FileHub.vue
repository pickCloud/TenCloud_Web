<template>
  <div class="page-filehub">
    <div class="page-filehub-left">
      <div class="page-filehub-left-title">文件储存</div>
      <router-link class="page-filehub-menu-item" :to="{name:'FileHubIn'}">文件列表</router-link>
      <!--<router-link class="page-filehub-menu-item" :to="{name:'FileHubOut'}">用户文件</router-link>-->
    </div>
    <div class="page-filehub-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
//  import FileHubMixin from './FileHubMixins'
  export default {
//    mixins: [FileHubMixin]
  }
</script>

<style lang="scss">
  .page-filehub-left {
    position: absolute;
    left: 0;
    top: 0;
    width: 180px;
    height: 100%;
    padding: 0 16px;
    border-right: 8px solid #171a21;
    background-color: #1d212a;
  }
  .page-filehub-right {
    position: absolute;
    right: 0;
    top: 0;
    width: calc(100% - 180px);
    height: 100%;
    overflow-y: auto;
    padding: 16px;
  }
  .page-filehub-left-title {
    font-size: 1rem;
    margin-top: 40px;
    margin-bottom: 8px;
  }
  .page-filehub-menu-item {
    display: block;
    height: 50px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    margin: 0 -16px;
    &:hover,&.router-link-active {
      background-color: #181b22;
    }
  }
</style>
