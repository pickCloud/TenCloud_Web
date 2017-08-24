<template>
  <aside class="lay-aside left">
    <div class="mini-ctrl text-center" @click="$parent.isMini = !$parent.isMini">
      <i class="icon icon-category"></i>
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
          icon: 'icon icon-jiqun'
        },
        {
          label: '项目',
          link: {name: 'Projects'},
          icon: 'icon icon-xiangmu1'
        },
        {
          label: '文件',
          link: {name: 'FileHubIn'},
          icon: 'icon icon-wenjiancunchu'
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
