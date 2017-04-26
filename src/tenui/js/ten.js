// class TenDom {
//   constructor (p) {
//     if (p instanceof HTMLElement) {
//       this.el = p
//     } else if ((typeof p).toLowerCase() === 'string') {
//       this.el = document.querySelectorAll(p)
//     } else {
//       throw new Error('暂不支持类型' + p)
//     }
//   }
//   // class action======================
//   // add class
//   addClass (p) {
//     this._funcAction(this._addClass, p)
//   }
//   _addClass (e, p) {
//     e.className += ' ' + p
//   }
//   // removeclass
//   removeClass (p) {
//     this._funcAction(this._removeClass, p)
//   }
//   _removeClass (e, p) {
//     if (!p) {
//       e.className = ''
//     } else {
//       let temp = p.split(' ')
//       for (let key in temp) {
//         e.className = e.className.replace(' ' + temp[key], '')
//       }
//     }
//   }
//   // func action switch
//   _funcAction (ac, ...arg) {
//     let tempel = this.el
//     if (this.el.length) {
//       for (let i = 0; i < this.el.length; i++) {
//         tempel = this.el[i]
//         arg.unshift(tempel)
//         ac.apply(this, arg)
//       }
//     } else {
//       arg.unshift(tempel)
//       ac.apply(this, arg)
//     }
//   }
//   // get parent ===============================
//   parent () {
//     let temps = []
//     this._funcAction(function (e) {
//       temps.push(new TenDom(e.parentElement))
//     })
//     return temps
//   }
//   //
//   find (p) {
//     this._funcAction(function (e) {
//       e.querySelectorAll(p)
//     })
//   }
// }
//
// export default function (p) {
//   return new TenDom(p)
// }

//
//
// 添加class 多个以空格隔开
HTMLElement.prototype.addClass = function (p) {
  this.className += ' ' + p
}
// 一处class 多个以空格隔开
HTMLElement.prototype.removeClass = function (p) {
  if (!p) {
    this.className = ''
  } else {
    let temp = p.split(' ')
    for (let key in temp) {
      this.className = this.className.replace(' ' + temp[key], '')
    }
  }
}
// 判断是否拥有class
HTMLElement.prototype.hasClass = function (p) {
  return this.className.split(' ').indexOf(p) !== -1
}
// 监听事件
HTMLElement.prototype.on = function (event, func) {
  if (this.hasEvent(event)) return
  this[event + '_func_ten'] = func
  this.addEventListener(event, func)
}
// 移除事件
HTMLElement.prototype.off = function (event) {
  this.removeEventListener(event, this[event + '_func_ten'])
}
// 发射事件
HTMLElement.prototype.emit = function (event, canBubble = false, cancelable = false) {
  var evt = document.createEvent('HTMLEvents')
  evt.initEvent(event, canBubble, cancelable)
  this.dispatchEvent(evt)
}
// 判断事件是否存在
HTMLElement.prototype.hasEvent = function (event) {
  return this.hasOwnProperty(event + '_func')
}
// // 获取相邻元素
// HTMLElement.prototype.sibling = function () {
//   let nodes = []
//   let p = this.previousSibling
//   while (p) {
//     if (p.nodeType === 1) {
//       nodes.push(p)
//     }
//     p = p.previousSibling
//   }
//   nodes.reverse()
//   let n = this.nextSibling
//   while (n) {
//     if (n.nodeType === 1) {
//       nodes.push(n)
//     }
//     n = n.previousSibling
//   }
//   return nodes
// }
// console.log('HTMLElement extends')
