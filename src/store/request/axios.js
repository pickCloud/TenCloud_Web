import axios from 'axios'
import api from './api'
import Vue from 'vue'
import router from '../../router'
const options = {
  URL: '',
  isLogin: null,
  http: function (url = '', params = null, method = 'get', urlAdd = '', canTip = true, isForce = false) {
    return new Promise((resolve, reject) => {
      this.URL = api.baseURL + api[url].u + urlAdd
      // if (api[url].m && method === 'get') {
      //   method = api[url].m
      // }
      console.log(method)
      axios[method](this.URL, params).then(response => {
        if (response.status === 200) {
          resolve(response.data)
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
        // case 'post':
        //   return axios.post(this.URL, params).then(response => {
        //     if (response.status === 200) {
        //       resolve(response.data)
        //     } else {
        //       reject(response.data)
        //     }
        //   }).catch(error => {
        //     if (canTip && error.response.status !== 403) Vue.prototype.$toast(error.response.data.message, 'cc')
        //     if (error.response.status === 403) {
        //       router.replace({name: 'Login'})
        //     }
        //     reject(error)
        //   })
        // case 'delete':
        //   return axios.delete(this.URL, params).then(response => {
        //     if (response.status === 200) {
        //       resolve(response.data)
        //     } else {
        //       reject(response.data)
        //     }
        //   }).catch(error => {
        //     if (canTip && error.response.status !== 403) Vue.prototype.$toast(error.response.data.message, 'cc')
        //     if (error.response.status === 403) {
        //       router.replace({name: 'Login'})
        //     }
        //     reject(error)
        //   })
    })
  }
}

export default options

