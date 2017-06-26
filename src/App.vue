<template>
  <div id="app">
    <nav class="app-top">
      <aside class="lay-aside left">
        <span class="_logo vam">LOGO</span>
        <span class="_cndesc vam right">控制台</span>
      </aside>
      <div class="lay-body"></div>
    </nav>
    <div class="app-body clearfix">
      <aside class="lay-aside left">
        <div class="mini-ctrl text-center white_txt">MINI</div>
        <m-tree :model="navData" :sizeh="40" @change="navChange"></m-tree>
      </aside>
      <div class="lay-body left">
        <transition :name="transitionName" appear>
          <router-view class="routerViewBox"></router-view>
        </transition>
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
