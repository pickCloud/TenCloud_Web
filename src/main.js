// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Jimu from 'jimu'
import Vuepopx from './vue-popx'
import Vueswiper from './vue-swiper'
import Vuetask from './vue-tasks'
import Vuepages from './vue-pages'
import VueQiniu from './vue-qiniu'
import App from './App'
import router from './router'
import Global from './global'
import store from './store'
// 引入自定义指令
import Clipboard from './vue-clipboard'
// 引入样式
import Piece from './components/piece'
import 'jimu/dist/jimu.base.min.css'
import './scss/app.scss'
import TabFirst from './components/vue-permission/TabFirst'
import TabSecond from './components/vue-permission/TabSecond'
import TabLabel from './components/vue-permission/TabLabel'

import Tabs from './components/vue-permission'

Vue.config.productionTip = false
Vue.prototype.$Global = Global
Vue.use(Vuepopx)
Vue.use(Vuetask)
Vue.use(Vuepages)
Vue.use(VueQiniu)
Vue.use(Jimu)
Vue.use(Piece)
Vue.use(Vueswiper)

Vue.use(TabFirst)
Vue.use(TabSecond)
Vue.use(TabLabel)
Vue.use(Tabs)

Vue.directive('clipboard', Clipboard)

window.Date.prototype.Format = function (fmt) {
  let o = {
    'M+': this.getMonth() + 1,
    'd+': this.getDate(), // 日
    'h+': this.getHours(), // 小时
    'm+': this.getMinutes(), // 分
    's+': this.getSeconds(), // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
    'S': this.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  }
  return fmt
}

window.ROOT_DATA = {
  userinfo: {}
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  data: window.ROOT_DATA,
  template: '<App/>',
  components: { App }
})
