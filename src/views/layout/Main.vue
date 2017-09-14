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
        if (e.target.clientHeight + e.target.scrollTop === e.target.scrollHeight) {
          console.log('到底部')
          this.$store.commit('scroll/IS_BOTTOM', true)
        }
      }
    },
    components: {Navtop, Navleft, SitePath}
  }
</script>
