import Base from './PopBase'

class PopCom extends Base {
  init () {
    let TempC = this._static.Vue.extend(this._opts.popper)
    // 赋值popper vm实例
    this._pvm = new TempC()
    this._pvm.$mount()
    if (this._pvm.popxdata) this._pvm.popxdata = this._opts.data
    this._pvm.$el.setAttribute('data-uid', this.uuid)
    this.initComplete()
  }
  initComplete () {
    this._pvm['$root'] = this._vm.$root
    document.body.appendChild(this._pvm.$el)
    super.initComplete()
  }
  get popper () {
    return this._pvm.$el
  }
}

export default PopCom
