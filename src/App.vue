<template>
  <div id="app">
    <nav class="top-nav">
      <div class="top-nav_logo text-center"><router-link :to="{name:'Main'}">COMB</router-link></div>
    </nav>
    <nav class="left-nav">
      <m-tree :data="navdata" collapse></m-tree>
    </nav>
    <div class="view-box"><router-view></router-view></div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    navdata: [
      {
        label: '服务器',
        icon: 'icon icon-msnui-server',
        children: [
          {
            label: '集群',
            icon: 'icon icon-jiqun',
            link: '/#/cluster'
          },
          {
            label: '应用',
            icon: 'icon icon-yingyong',
            link: '/#/apps'
          }
        ]
      },
      {
        label: '项目',
        link: '/#/project',
        icon: 'icon icon-xiangmu'
      },
      {
        label: '仓库',
        icon: 'icon icon-cangku',
        children: [
          {
            label: '镜像仓库',
            icon: 'icon icon-jingxiang',
            link: '/#/hub'
          },
          {
            label: '文件仓库',
            icon: 'icon icon-552cd47fba2cc',
            link: '/#/filehub'
          }
        ]
      }
    ]
  })
}
</script>

<style lang="scss" src="./scss/app.scss"></style>
