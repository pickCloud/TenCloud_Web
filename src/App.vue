<template>
  <div id="app">
    <nav class="app-top" :class="[miniClass]">
      <aside class="lay-aside left">
        <span class="_logo vam"><router-link :to="{name:'Main'}"><span class="show-lay-mini">CO</span><span class="hide-lay-mini">Console</span></router-link></span>
        <!--<span class="_cndesc vam right hide-mini">控制台</span>-->
      </aside>
      <div class="lay-body">
        <m-btn @click.native="back" v-if="hasBack"><i class="icon icon-return"></i></m-btn>
      </div>
    </nav>
    <div class="app-body clearfix" :class="[miniClass]">
      <aside class="lay-aside left">
        <div class="mini-ctrl text-center" @click="isMini = !isMini">
          <i class="icon icon-category"></i>
        </div>
        <m-tree :model="navData" :sizeh="50" @change="navChange"></m-tree>
      </aside>
      <div class="lay-body left">
        <!--<transition :name="transitionName" appear>-->
          <router-view class="routerViewBox"></router-view>
        <!--</transition>-->
      </div>
    </div>
  </div>
</template>

<script>
  import AppMixin from './AppMixin.js'
  export default {
    name: 'app',
    mixins: [AppMixin]
  }
</script>
