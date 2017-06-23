<template>
  <div id="app">
    <nav class="top-nav">
      <div class="top-nav_logo text-center"><router-link :to="{name:'Main'}">COMB</router-link></div>
    </nav>
    <nav class="left-nav">
      <m-tree :data="navdata" collapse></m-tree>
    </nav>
    <div class="view-box">
      <transition :name="transitionName" appear>
        <router-view class="routerViewBox"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    transitionName: 'fade',
    navdata: [
//      {
//        label: '服务器',
//        icon: 'icon icon-msnui-server',
//        children: [
//          {
//            label: '集群',
//            icon: 'icon icon-jiqun',
//            link: {name: 'Cluster'}
//          }
//          {
//            label: '应用',
//            icon: 'icon icon-yingyong',
//            link: {name: 'Application'}
//          }
//        ]
//      },
      {
        label: '集群',
        icon: 'icon icon-jiqun',
        link: {name: 'Cluster'}
      },
      {
        label: '项目',
        icon: 'icon icon-xiangmu',
        link: {name: 'Project'}
      }
//      {
//        label: '仓库',
//        icon: 'icon icon-cangku',
//        children: [
//          {
//            label: '镜像仓库',
//            icon: 'icon icon-jingxiang',
//            link: {name: 'Hub'}
//          },
//          {
//            label: '文件仓库',
//            icon: 'icon icon-552cd47fba2cc',
//            link: {name: 'FileHub'}
//          }
//        ]
//      }
    ]
  }),
  watch: {
    '$route' (to, from) {
      const toDepth = to.meta.level
      const fromDepth = from.meta.level
      if (fromDepth === undefined) this.transitionName = 'fade'
      else this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>
