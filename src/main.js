// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Jimu from 'jimu'
import Global from './global'

Vue.config.productionTip = false
Vue.use(Jimu)
Vue.prototype.$Global = Global

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: () => ({
    come: 'comoa'
  }),
  template: '<App/>',
  components: { App }
})
