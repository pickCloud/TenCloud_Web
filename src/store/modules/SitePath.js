export default {
  namespaced: true,
  state: {
    paths: []
  },
  mutations: {
    'SET_PATH' (state, payload) {
      state.paths = payload
    }
  }
}
