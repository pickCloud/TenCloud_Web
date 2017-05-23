class NoDropDown {
  constructor (vm, cb) {
    this.vm = vm
    this.cb = cb
  }
  addDomEvent () {
    let ts = this
    let action = function (e) {
      ts.domClickAc(e)
    }
    this.tempaction = action
    document.addEventListener('click', action)
  }
  delDomEvent () {
    document.removeEventListener('click', this.tempaction)
  }
  domClickAc (e) {
    if (!this.vm.$el.contains(e.target)) {
      this.delDomEvent()
      this.cb.apply(this.vm)
    }
  }
}

export default function (vm, cb) {
  return new NoDropDown(vm, cb)
}
