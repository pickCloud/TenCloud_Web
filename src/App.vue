<template>
  <div id="app">
    <nav class="top-nav">
      <div class="top-nav_logo center-align">COMB</div>
      <div class="top-nav_user right center-align">
        <img src="./assets/user-head.jpg" class="circle top-nav_user-img" alt="">
        Beauty
        <i class="material-icons vam">keyboard_arrow_down</i>
      </div>
    </nav>
    <nav class="left-nav">
      <tree :data="navdata" collapse></tree>
    </nav>
    <div class="view-box"><router-view></router-view></div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      navdata: [
        {
          label: '服务器',
          icon: 'dashboard',
          children: [
            {
              label: '集群',
              link: '/#/cluster'
            },
            {
              label: '应用',
              link: '/#/apps'
            }
          ]
        },
        {
          label: '项目',
          link: '/#/project',
          icon: 'dashboard'
        },
        {
          label: '仓库',
          icon: 'dashboard',
          children: [
            {
              label: '镜像仓库',
              link: '/#/hub'
            },
            {
              label: '文件仓库',
              link: '/#/hub'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "tenui/tenui.scss";
  @import "scss/common.scss";
</style>
