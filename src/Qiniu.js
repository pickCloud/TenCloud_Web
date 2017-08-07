export function upload (f, token, key, ing = null) {
  return new Promise((resolve, reject) => {
    const QiniuUploadUrl = 'http://up-z2.qiniu.com'
    let xhr = new XMLHttpRequest()
    xhr.open('POST', QiniuUploadUrl, true)
    let formData = new FormData()
    if (key) formData.append('key', key)
    formData.append('token', token)
    formData.append('file', f)
    xhr.upload.addEventListener('progress', evt => {
      if (evt.lengthComputable) {
        let percentComplete = Math.round(evt.loaded * 100 / evt.total)
        if (ing) ing.call(percentComplete)
        // console.log(percentComplete)
        // console && console.log(percentComplete, ",", formatSpeed);
      }
    }, false)
    xhr.onreadystatechange = function (response) {
      if (xhr.readyState === 4 && xhr.status === 200 && xhr.responseText !== '') {
        let blkRet = JSON.parse(xhr.responseText)
        // console && console.log(blkRet)
        resolve(blkRet)
      } else if (xhr.status !== 200 && xhr.responseText) {
        reject()
      }
    }
    xhr.send(formData)
  })
}
