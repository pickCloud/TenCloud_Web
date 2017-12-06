import axios from 'axios'
import api from './api'
import Vue from 'vue'
import router from '../../router'
const options = {
  URL: '',
  isLogin: null,
  token: null,
  http: function (url = '', params = null, method = 'get', urlAdd = '', canTip = true, isForce = false) {
    return new Promise((resolve, reject) => {
      this.URL = api.baseURL + api[url].u + urlAdd
      if (api[url].m && method === 'get') {
        method = api[url].m
      }
      if (this.token === null && this.getToekn()) {
        this.token = this.getToekn()
        // console.log(this.token.token)
        // axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type, Access-Control-Allow-Headers, Authorization'
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
        // axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'POST, GET'
        axios.defaults.headers.common['Authorization'] = this.token.token
        // axios.defaults.auth = {'Authorization': this.token.token}
      }
      axios[method](this.URL, params).then(response => {
        if (response.status === 200) {
          resolve(response.data)
          if (url === 'user_login_password' || url === 'user_login') {
            this.setToken(response.data.data)
          }
        } else {
          reject(response.data)
        }
      }).catch(error => {
        if (canTip && error.response && error.response.status !== 403) Vue.prototype.$toast(error.response.data.message, 'cc')
        if (error.response && error.response.status === 403) {
          options.isLogin = false
          router.replace({name: 'Login'})
        }
        reject(error.response.data)
      })
    })
  },
  setToken (data) {
    window.localStorage.setItem('loginToken', JSON.stringify(data))
  },
  getToekn (data) {
    let loginToken = window.localStorage.getItem('loginToken')
    return JSON.parse(loginToken) || ''
  }
}

export default options

