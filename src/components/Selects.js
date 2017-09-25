export default {
  data: () => ({
    // listts: [], 当前页面选择数组
    selects: [],
    isSelectAll: false
  }),
  watch: {
    isSelectAll (n, o) {
      if (n) {
        this.listts.forEach((v, i) => {
          let key = v.id + ''
          if (this.selects.indexOf(key) === -1) this.selects.push(key)
        })
      } else {
        this.selects = []
      }
    }
  },
  methods: {
    getAttrById (ids, key = 'name') {
      let i = -1
      let temp = []
      while (++i < this.listts.length) {
        let v = this.listts[i]
        if (ids.indexOf(v.id + '') !== -1 || ids.indexOf(v.id) !== -1) temp.push(v[key])
      }
      return temp
    }
  }
}
