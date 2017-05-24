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
Vue.prototype.$API = {
  ws: 'ws://192.168.1.116:8010',
  api: 'http://192.168.1.116'
}
Vue.prototype.$COMMON = {}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
