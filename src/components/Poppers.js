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
          h('span', {attrs: {class: 'vam'}}, '您确定删除主机' + s + '吗？')
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
    }
  }
}
