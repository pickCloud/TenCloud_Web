import Popper from 'popper.js'
import Static from './Static'

export default class {
  constructor (opts, vm) {
    this._opts = opts
    this._static = Static
    this._vm = vm
    this._pvm = null
    this.type = null
    this.event = {}
    this.uuid = Math.random().toString(16).substr(-4) + '-' + Math.random().toString(16).substr(-4) + '-' + Math.random().toString(16).substr(-4) + '-' + Math.random().toString(16).substr(-4)
    this.init()
  }

  /**
   * 初始化
   */
  init () {}

  /**
   * 初始化完成
   */
  initComplete () {
    this.popins = new Popper(this.ref, this.popper, this._opts.options)
    this.initEvent()
  }

  /**
   * 初始化事件
   */
  initEvent () {
    this._pvm.$on('close', d => {
      if (this._opts.callback) {
        this._opts.callback('close', d, this._destroy.bind(this))
      } else {
        this._destroy()
      }
    })
  }

  /**
   * 销毁
   * @private
   */
  _destroy () {
    this.popins.destroy()
    this._pvm.$el.remove()
  }

  /**
   * 关闭弹窗
   */
  close () {
    this._pvm.$emit('close')
  }

  /**
   * 更新弹窗
   */
  update () {
    this.popins.update()
  }

  /**
   * 获取参照
   * @returns {Object}
   */
  get ref () {
    return this._opts.reference
  }

  /**
   * 获取弹窗HTMLELEMENT
   */
  get popper () {}
}
