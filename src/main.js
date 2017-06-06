// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Jimu from 'jimu'
import 'jimu/dist/jimu.css'
import Global from './global'
import Piece from './components/piece'

Vue.config.productionTip = false
Vue.prototype.$Global = Global
Vue.use(Jimu)
Vue.use(Piece)

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
