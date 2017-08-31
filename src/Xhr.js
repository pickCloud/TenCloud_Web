export default function ({method, url, data, progress = null, overrideMimeType = null, withCredentials = false, isJson = true}) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open(method, url)
    // console.log(overrideMimeType)
    // xhr.setRequestHeader('Content-type', 'application/octet-stream')
    // if (overrideMimeType) xhr.overrideMimeType(overrideMimeType)
    xhr.upload.addEventListener('progress', evt => {
      if (evt.lengthComputable) {
        if (progress) progress(evt)
        // console.log(progress)
        // console.log(evt.loaded / 1024 / 1024 + 'MB')
      }
    }, false)
    xhr.onreadystatechange = function (response) {
      if (xhr.readyState === 4 && xhr.status === 200 && xhr.responseText !== '') {
        let blkRet = isJson ? JSON.parse(xhr.responseText) : xhr.responseText
        resolve(blkRet)
      } else if (xhr.status !== 200 && xhr.responseText) {
        reject()
      }
    }
    if (withCredentials) xhr.withCredentials = true
    xhr.send(data)
  })
}
