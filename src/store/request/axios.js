import axios from 'axios'
import api from './api'

const options = {
  http: function (url = '', params = null, method = 'get', urlAdd = '', isForce = false) {
    return new Promise((resolve, reject) => {
      if (api[url].m) {
        method = api[url].m
      }
      switch (method) {
        case 'get':
          return axios.get(api[url] + urlAdd, params).then(response => {
            if (response.status === 200) {
              resolve(response)
            } else {
              reject(response)
            }
          }).catch(error => {
            reject(error)
          })
        case 'post':
          return axios.post(api[url] + urlAdd, params).then(response => {
            if (response.status === 200) {
              resolve(response)
            } else {
              reject(response)
            }
          }).catch(error => {
            reject(error)
          })
      }
    })
  }
}

export default options

