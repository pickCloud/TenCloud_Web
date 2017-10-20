<template>
  <aside class="lay-aside left">
    <div class="mini-ctrl text-center" @click="$parent.isMini = !$parent.isMini">
      <i class="iconfont icon-shensuo"></i>
    </div>
    <!--<m-tree :model="navData" :sizeh="50" @change="navChange"></m-tree>-->
    <ul class="jmtree theme-dft">
      <router-link :to="item.link" class="jmtree-node" v-for="(item, key) in navData" :key="key"><div class="jmtree-label-wrap" style="height: 50px; line-height: 50px;">
        <i class="jmtree-label-icon" :class="item.icon"></i> <span class="jmtree-label">{{item.label}}</span> <!----></div> <!---->
      </router-link>
    </ul>
  </aside>
</template>

<script>
  export default {
    data: () => ({
      navData: [
        {
          label: '机器',
          link: {name: 'Machines'},
          icon: 'iconfont icon-jiqi'
        },
        {
          label: '项目',
          link: {name: 'Projects'},
          icon: 'iconfont icon-xiangmu'
        },
        {
          label: '文件',
          link: {name: 'FileHubIn', params: {id: 0}},
          icon: 'iconfont icon-wenjian'
        }
      ]
    }),
    methods: {
      navChange (item, hasChild) {
        if (!hasChild) {
          if (item.link) this.$router.push(item.link)
        }
      }
    }
  }
</script>
<style lang="scss">
.router-link-active{
  div {
    color: #fff;
    background-color: #48bbc0;
  }
 }
</style>
