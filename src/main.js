// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import Tenui from './comb-ten'
// import Global from './global'

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(Tenui)
// Vue.prototype.$G = Global
const islocal = /.+localhost.+/.test(window.location.href)
Vue.prototype.$API = {
  ws: islocal ? 'ws://192.168.1.116:8010' : 'ws://47.94.18.22',
  api: islocal ? 'http://192.168.1.116' : 'http://47.94.18.22'
}
Vue.prototype.$COMMON = {}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
