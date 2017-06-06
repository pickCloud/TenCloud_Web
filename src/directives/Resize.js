import Tool from '../utils/Tool'

const key = 'JIMU_COS_' + Tool.unid()
const nodes = []

window.onresize = function () {
  nodes.forEach(el => el[key].handle())
}

export default {
  bind (el, binding, vnode) {
    const id = nodes.push(el) - 1

    const handle = function () {
      let cb = vnode.context[binding.expression]
      if (binding.expression && cb) {
        cb()
      } else {
        binding.value && binding.value()
      }
    }
    el[key] = {
      id,
      handle,
      methodName: binding.expression,
      bindingFn: binding.value
    }
  },
  update (el, binding) {
    el[key].methodName = binding.expression
    el[key].bindingFn = binding.value
  },
  unbind (el) {
    let len = nodes.length
    for (let i = 0; i < len; i++) {
      if (nodes[i][key].id === el[key].id) {
        nodes.splice(i, 1)
        break
      }
    }
  }
}
