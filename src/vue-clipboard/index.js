function select (element) {
  let selectedText
  if (element.nodeName === 'SELECT') {
    element.focus()
    selectedText = element.value
  } else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
    let isReadOnly = element.hasAttribute('readonly')

    if (!isReadOnly) {
      element.setAttribute('readonly', '')
    }

    element.select()
    element.setSelectionRange(0, element.value.length)

    if (!isReadOnly) {
      element.removeAttribute('readonly')
    }

    selectedText = element.value
  } else {
    if (element.hasAttribute('contenteditable')) {
      element.focus()
    }

    let selection = window.getSelection()
    let range = document.createRange()

    range.selectNodeContents(element)
    selection.removeAllRanges()
    selection.addRange(range)

    selectedText = selection.toString()
  }

  return selectedText
}

class Clipboard {
  constructor (el, binding, vnode) {
    this._el = el
    this._binding = binding
    this._vnode = vnode
    this.funcs = {
      click: () => {
        // let async = this._el.dataset.async
        // let params = this._el.dataset.params
        let txt = this._el.dataset.text
        if (txt) {
          this._copytxt = txt
          this.copy()
        } else {
          throw new Error('data-text')
        }
        // if (async) {
        //   if (this._vnode.context[async]) {
        //     this._vnode.context[async](params).then(d => {
        //       this._copytxt = d
        //       this.copy()
        //     })
        //   }
        // }
      }
    }
    this.addEvent()
  }
  copy () {
    this._txtarea = this._el.appendChild(document.createElement('textarea'))
    this._txtarea.style.position = 'absolute'
    this._txtarea.style.right = '-9999px'
    this._txtarea.value = this._copytxt
    select(this._txtarea)
    try {
      document.execCommand('copy')
    } catch (e) {
      this._binding.value({
        action: 'error',
        text: e
      })
    } finally {
      this._binding.value({
        action: 'copy',
        text: this._copytxt
      })
    }
  }
  removeTextArea () {
    if (this._txtarea) this._el.removeChild(this._txtarea)
  }
  addEvent () {
    this._el.addEventListener('click', this.funcs.click)
  }
  destroy () {
    this._el.removeEventListener('click', this.funcs.click)
  }
}

export default {
  bind (el, binding, vnode) {
    el.Clipboard = new Clipboard(el, binding, vnode)
    // el.Clipboard.destroy()
  },
  unbind (el, binding, vnode) {
    el.Clipboard.destroy()
  }
}
