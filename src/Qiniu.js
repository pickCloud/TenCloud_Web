import XHR from './Xhr.js'

export function upload (f, token, key, ing = null) {
  let formData = new FormData()
  if (key) formData.append('key', key)
  formData.append('token', token)
  formData.append('file', f)
  return XHR({
    method: 'POST',
    url: 'https://up-z2.qiniu.com',
    data: formData,
    progress: ing
  })
}
export function upStream ({file, url, method, ing = null}) {
  let data = file
  return XHR({
    method: method,
    url: url,
    data: data,
    progress: ing,
    overrideMimeType: 'application/octet-stream'
  })
}
