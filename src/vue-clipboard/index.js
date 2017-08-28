import Clipboard from 'clipboard'

export default {
  bind (el, binding, vnode) {
    el.Tenclip = new Clipboard(el)
    el.Tenclip.on('success', function (e) {
      binding.value(e)
      e.clearSelection()
    })
    el.Tenclip.on('error', function (e) {
      binding.value(e)
    })
  },
  unbind (el, binding, vnode) {
    delete el.Tenclip
  }
}
