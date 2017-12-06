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
        axios.default.headers.common['Authorization'] = this.getToekn().token
      }
      axios[method](this.URL, params).then(response => {
        if (response.status === 200) {
          resolve(response.data)
          if (this.URL === 'user_login_password' || this.URL === 'user_login') {
            this.setToken(response.data.data)
          }
        } else {
          reject(response.data)
        }
      }).catch(error => {
        if (canTip && error.response.status !== 403) Vue.prototype.$toast(error.response.data.message, 'cc')
        if (error.response.status === 403) {
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

