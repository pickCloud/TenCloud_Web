<template>
  <ul class="site-path clearfix">
    <li v-for="item in paths">
      <span v-if="!item.name">{{item.cn}}</span>
      <router-link :to="item" v-else>{{item.cn}}</router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    computed: {
      paths () {
        return this.$store.state.sitepath.paths || []
      }
    }
  }
</script>

<style lang="scss">
  .site-path {
    height: 40px;
    line-height: 40px;
    background-color: #232730;
    padding-left: 16px !important;
    li {
      float: left;
      &:not(:first-child) {
        &:before {
          content: '/';
          padding: 0 8px;
        }
      }
      a {
        color: #4dd1de;
        transition: all 0.2s;
        &:hover {
          color: #fff;
        }
      }
    }
  }
</style>
