export default {
  namespaced: true,
  state: {
    currentUser: {
    }
  },
  mutations: {
    'UPDATE' (state, data) {
      // 用户数据更新
      state.currentUser = data
    },
    'GET_USER' () {
      // 获取用户数据
    }
  }
}
