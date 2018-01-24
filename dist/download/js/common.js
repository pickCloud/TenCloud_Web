var ua = navigator.userAgent.toLowerCase()
var isWeixin = function () {
  // 判断是否是微信
  return ua.toLowerCase().indexOf('micromessenger') > -1
}
var isQQ = function () {
  return ua.toLowerCase().indexOf('qq') > -1
}
var flag = navigator.userAgent.indexOf('iPhone') > -1
if (flag) {
  $('.btn2').hide()
} else {
  $('.btn1').hide()
}
$('.btn.btn1').click(function (e) {
  if (isWeixin()||isQQ()) {
    return $('.tip-wx').show()
  }
  window.location.href='https://itunes.apple.com/cn/app/id336141475'
})
$('.btn.btn2').click(function (e) {
  if (isWeixin()||isQQ()) {
    return $('.tip-wx').show()
  }
  window.location.href = window.location.origin + '/download/TenCloud-release_180118.apk'
})
var isCode = /code/.test(window.location.search)
if (isCode) {
  window.location.href = 'tencloud://invite' + window.location.search
}
