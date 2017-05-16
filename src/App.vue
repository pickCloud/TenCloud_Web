<template>
  <div id="app">
    <nav class="top-nav">
      <div class="top-nav_logo center-align"><router-link :to="{name:'Main'}">COMB</router-link></div>
      <dropdown class="top-nav_user right" title="标题啊" img="/static/images/user-head.jpg">
        <div>列表1</div>
        <div>列表2</div>
        <div>列表3</div>
        <div>列表4</div>
      </dropdown>
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
          icon: '&#xe698;',
          children: [
            {
              label: '集群',
              icon: '&#xe763;',
              link: '/#/cluster'
            },
            {
              label: '应用',
              icon: '&#xe6f0;',
              link: '/#/apps'
            }
          ]
        },
        {
          label: '项目',
          link: '/#/project',
          icon: '&#xe62c;'
        },
        {
          label: '仓库',
          icon: '&#xe6ea;',
          children: [
            {
              label: '镜像仓库',
              icon: '&#xe696;',
              link: '/#/hub'
            },
            {
              label: '文件仓库',
              icon: '&#xe610;',
              link: '/#/filehub'
            }
          ]
        }
      ]
    }
  },
  created () {
    this.$http.get('/api/clusters').then((res) => {
      console.log(res)
    })
  }
}
</script>

<style lang="scss">
  @import "tenui/tenui.scss";
  @import "scss/common.scss";
</style>
