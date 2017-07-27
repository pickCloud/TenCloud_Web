import Merge from './Merge.js'

const config = {
  theme: 'comb-msg',
  hasClose: false,
  buttons: [
    {label: '确定', theme: ''},
    {label: '取消', theme: ''}
  ]
}

export default {
  methods: {
    popperDelete (s, cb) {
      const h = this.$createElement
      this.$confirm(Merge({}, config, {
        content: h('div', [
          h('img', {attrs: {src: './static/img/error_icon.png', class: 'vam m-r16'}}),
          h('span', {attrs: {class: 'vam'}}, s)
        ])
      }), (msg, ...arg) => {
        if (arg[0] === 0) {
          if (cb) cb.call()
        }
        msg.actionPopper(false)
      })
    },
    popperInfo (s, cb, cb2) {
      this.$confirm(Merge({}, config, {
        content: s
      }), (msg, ...arg) => {
        if (arg[0] === 0) {
          if (cb) cb.call()
        } else {
          if (cb2) cb2.call()
        }
        msg.actionPopper(false)
      })
    },
    popperWaiting (s) {
      const h = this.$createElement
      return this.$confirm({
        theme: 'comb-msg',
        hasClose: false,
        maskClose: false,
        content: h('span', null, [h('img', {attrs: {src: './static/img/spin.gif', class: 'vam m-r8'}}), h('span', {attrs: {class: 'vam'}}, s)]),
        buttons: []
      })
    }
  }
}