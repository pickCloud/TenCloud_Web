import Vue from 'vue'
import ToastMain from './main.vue'

const ToastFunc = Vue.extend(ToastMain)

let instance
let instances = []
let seed = 1
let Toast = function (options) {
  if (Vue.prototype.$isServer) return
  options = options || {}
  if (typeof options === 'string') {
    options = {
      content: options
    }
  }
  let id = 'toast_' + seed++

  instance = new ToastFunc({
    data: options
  })
  instance.id = id
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true
  instance.dom = instance.vm.$el
  instances.push(instance)
  return instance.vm
}

export default Toast
