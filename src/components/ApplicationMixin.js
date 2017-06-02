export default {
  data: () => ({
    selectids: [],
    apps: []
  }),
  methods: {
    getNameById (ids) {
      return this.apps.map((v, i) => {
        if (ids.indexOf(v.id + '') !== -1) return v.name
      })
    },
    delHandle () {
      const h = this.$createElement
      let delids = this.selectids
      if (delids.length === 0) {
        this.$toast('请选择要删除的应用', 'cc')
      } else {
        this.$message({
          theme: 'comb-msg comb-msg-del mini',
          hasClose: false,
          content: h('m-icon', {attrs: {icon: 'icon-zhuyi-yin'}}, '您确定删除应用' + this.getNameById(delids).join(',') + '吗？'),
          buttons: [
            {label: '确定', theme: 'comb-btn lvse hover'},
            {label: '取消', theme: 'comb-btn qingse hover'}
          ],
          callback: (msg, ...arg) => {
            if (arg[0] === 0) {
              console.log('ok 您已经删除了')
            }
            msg.actionPopper(false)
          }
        })
      }
    }
  }
}
