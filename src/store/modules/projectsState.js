export default {
  namespaced: true,
  state: {
    listts: []
  },
  mutations: {
    'getData' (state, data) {
      state.num = data
    },
    'setListts' (state, list) {
      list.forEach(function (item) {
        state.listts.push(item)
      })
    }
  },
  getters: {
    'getNum': (state, a, c, d) => {
      if (state.num === 1) {
        return 2
        // this.action.getData()
      }
      return 3
    },
    listts: state => state.listts
  },
  actions: {
    getActionsNum (state) {
      console.log(1)
    }
  }
}
