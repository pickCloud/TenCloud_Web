<template>
  <aside class="lay-aside left">
    <div class="mini-ctrl text-center" @click="$parent.isMini = !$parent.isMini">
      <i class="iconfont icon-shensuo"></i>
    </div>
    <m-tree :model="navData" :sizeh="50" @change="navChange"></m-tree>
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
