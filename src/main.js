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
import axios from './store/request/axios'
import store from './store'
// 引入自定义指令
import Clipboard from './vue-clipboard'
// 引入样式
import Piece from './components/piece'
import 'jimu/dist/jimu.base.min.css'
import './scss/app.scss'
// import TabFirst from './components/vue-permission/TabFirst'
// import TabSecond from './components/vue-permission/TabSecond'
import TabLabel from './components/vue-permission/TabLabel'

import Tabs from './components/vue-permission'
import TabTree from './components/vue-permission/TabTree'
import TabTr from './components/vue-permission/TabTr'
var browser = {
  versions: (function () {
    let u = navigator.userAgent
    return {
      trident: u.indexOf('Trident') > -1,
      presto: u.indexOf('Presto') > -1,
      webKit: u.indexOf('AppleWebKit') > -1,
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1,
      mobile: !!u.match(/AppleWebKit.*Mobile.*/),
      ios: !!u.match(/\(i[^]+( U)? CPU.+Mac OS X/),
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
      iPhone: u.indexOf('iPhone') > -1,
      iPad: u.indexOf('iPad') > -1,
      webApp: u.indexOf('Safari') === -1,
      souyue: u.indexOf('souyue') > -1,
      superapp: u.indexOf('superapp') > -1,
      weixin: u.toLowerCase().indexOf('micromessenger') > -1,
      Safari: u.indexOf('Safari') > -1
    }
  }()),
  language: (navigator.browserLanguage || navigator.language).toLowerCase()
}
let appurl = 'tencloud://invite?code=b73d340'
if (browser.versions.ios) {
  window.location.href = appurl
} else if (browser.versions.android) {
  window.location.href = appurl
}
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(Vuepopx)
Vue.use(Vuetask)
Vue.use(Vuepages)
Vue.use(VueQiniu)
Vue.use(Jimu)
Vue.use(Piece)
Vue.use(Vueswiper)

// Vue.use(TabFirst)
// Vue.use(TabSecond)
Vue.use(TabLabel)
Vue.use(Tabs)
Vue.use(TabTree)
Vue.use(TabTr)

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
