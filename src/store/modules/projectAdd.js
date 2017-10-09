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
    'setFormdata' (state, obj) {
      if (obj.name === false) {
        state.formdata = obj.value
      } else {
        state.formdata[obj.name] = obj.value
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
