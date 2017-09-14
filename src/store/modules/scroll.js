export default {
  namespaced: true,
  state: {
    isBottom: false
  },
  mutations: {
    'IS_BOTTOM' (state, boolean) {
      // 用户数据更新
      state.isBottom = boolean
    }
  }
}
