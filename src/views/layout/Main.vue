<template>
  <div id="app">
    <navtop></navtop>
    <div class="app-body clearfix" :class="[miniClass]">
      <navleft></navleft>
      <div class="lay-body left">
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
  export default {
    data: () => ({
      isMini: false
    }),
    computed: {
      miniClass () {
        return this.isMini ? 'lay-mini' : ''
      }
    },
    components: {Navtop, Navleft},
    mounted () {
      this.$store.dispatch('LOAD_DATA', {
        a: 'b'
      })
    }
  }
</script>
