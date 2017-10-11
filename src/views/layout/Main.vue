<template>
  <div id="app">
    <navtop></navtop>
    <div class="app-body clearfix" :class="[miniClass]">
      <navleft></navleft>
      <div class="lay-body left" @scroll="scroll">
        <site-path></site-path>
        <!--<transition :name="transitionName" appear>-->
        <router-view class="routerViewBox"></router-view>
        <!--</transition>-->
      </div>
    </div>
  </div>
</template>

<script>
  import Navtop from './NavTop.vue'
  import Navleft from './NavLeft.vue'
  import SitePath from './SitePath.vue'

  export default {
    data: () => ({
      isMini: false
    }),
    computed: {
      miniClass () {
        return this.isMini ? 'lay-mini' : ''
      }
    },
    methods: {
      scroll (e) {
        this.$store.commit('scroll/IS_BOTTOM', e.target.clientHeight + e.target.scrollTop === e.target.scrollHeight)
      }
    },
    components: {Navtop, Navleft, SitePath}
  }
</script>
<style lang="scss">
  // 2017.9.19修改input checkbox大小
  .theme-dft.label-inp-group .__icon{
    width: 12px;
    height:12px;
  }
</style>
