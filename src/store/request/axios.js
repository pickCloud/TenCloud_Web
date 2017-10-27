import axios from 'axios'
import api from './api'
import Vue from 'vue'
import router from '../../router'
const options = {
  URL: '',
  http: function (url = '', params = null, method = 'get', urlAdd = '', canTip = false, isForce = false) {
    return new Promise((resolve, reject) => {
      if (api[url].m && method === 'get') {
        method = api[url].m
      }
      this.URL = api.baseURL + api[url].u + urlAdd
      axios[method](this.URL, params).then(response => {
        if (response.status === 200) {
          resolve(response.data)
        } else {
          reject(response.data)
        }
      }).catch(error => {
        if (canTip && error.response.status !== 403) Vue.prototype.$toast(error.response.data.message, 'cc')
        if (error.response.status === 403) {
          router.replace({name: 'Login'})
        }
        reject(error)
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

