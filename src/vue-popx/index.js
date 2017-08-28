import PopParse from './PopParse'
import Static from './Static'

const DEFAULT = {
  reference: {
    getBoundingClientRect: () => ({
      left: 0, top: 0, width: 0, height: 0
    }),
    clientWidth: 0,
    clientHeight: 0,
    isFixed: true
  },
  popper: null,
  options: {
    placement: 'top'
  },
  data: {}
}
let rvm = null
const func = function (opts) {
  opts = Object.assign({}, DEFAULT, opts)
  if (!opts.popper) throw new Error('popper not define')
  if (!rvm) rvm = this.$root
  if (opts.reference.isFixed) {
    opts.options.modifiers = {
      applyStyle: { enabled: false }
    }
  }
  return {
    uid: PopParse(opts, this),
    func: func
  }
}

func.close = function (uid) {
  rvm.popx.close(uid)
}

// func.fire = function (uid, type, payload) {
//   console.log(rvm.popx.popins(uid))
// }

export default {
  install (Vue) {
    Static.Vue = Vue
    Vue.prototype.$Popx = func
  }
}
