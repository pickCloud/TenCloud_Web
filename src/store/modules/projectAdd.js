// import axios from '../request/axios'
export default {
  namespaced: true,
  state: {
    formdata: {
      name: '',
      // repos_name: '',
      // repos_url: '',
      image_name: '',
      description: '',
      mode: '0'
    }
  },
  mutations: {
    'setFormdata' (state, key, value) {
      if (key === false) {
        state.formdata = value
      } else {
        state.formdata[key] = value
      }
    }
  },
  getters: {
    'formdata': (state) => {
      return state.formdata
    }
  },
  actions: {
    getActionsNum (ctx) {
      console.log(1)
    }
  }
}
