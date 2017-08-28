import Panel from './Panel.vue'

class Tasks {
  constructor (vm) {
    this._vm = vm
    this.tasks = []
  }
  addTask (data) {
    if (Array.isArray(data)) {
      data.forEach((v, i) => {
        this.addTask(v)
      })
    } else {
      this._vm.addTask(data)
      // let uid = Math.random().toString(16).substr(-4) + '-' + Math.random().toString(16).substr(-4) + '-' + Math.random().toString(16).substr(-4) + '-' + Math.random().toString(16).substr(-4)
      // data.uuid = uid
      // this.tasks.push(uid)
      // this._vm.tasks.push(data)
    }
  }
  removeTask (uid) {
    let idx = this.tasks.indexOf(uid)
    this._vm.tasks.slice(idx, 1)
    this.tasks.slice(idx, 1)
  }
}

export default {
  install (Vue) {
    let Constr = Vue.extend(Panel)
    let ins = new Constr()
    ins.$mount()
    document.body.appendChild(ins.$el)
    Vue.prototype.$Task = new Tasks(ins)
  }
}
