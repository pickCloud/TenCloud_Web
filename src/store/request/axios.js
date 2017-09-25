import axios from 'axios'
import api from './api'
const asynRequest = {
  setKey: function (key, isForce) {
    if (this._data[key]) {
      this._data[key] = null
      this._api[key] = api.baseURL + api[key].u
      this._method[key] = api[key].m
    }
  },
  getData: function (key, p, addUrl = '') {
    if (this._api[key]) {
      return new Promise((resolve, reject) => {
        if (this._data[key] === null) {
          if (this._method === 'get') {
            /*
            状态非200的时候，抛出异常，在调用请求时进行特殊处理
            可以在此分装统一处理
             */
            axios.get(this._api + addUrl, p).then(res => {
              if (res.status === 200) {
                this._data = res.data
                resolve(res.data)
              } else {
                reject(res)
              }
            }).catch(error => {
              reject(error)
            })
          } else {
            axios.post(this._api + addUrl, p).then(res => {
              if (res.status === 200) {
                this._data = res.data
                resolve(res.data)
              } else {
                reject(res)
              }
            }).catch(error => {
              reject(error)
            })
          }
        }
      })
    }
  }
}
const options = {
  http: function (key, p = null, urlAdd = '', isForce = false) {
    asynRequest.setKey(key)
    if (isForce) {
      return asynRequest.getData(key, p, urlAdd)
    } else {
      if (!this._data[key]) {
        return asynRequest.getData(key, p, urlAdd)
      } else {
        return new Promise((resolve, reject) => {
          resolve(this._data[key])
        })
      }
    }
  }
}

export default options

