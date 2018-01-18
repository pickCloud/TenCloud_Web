alert(1)
var isWeixin = function () {
  // 判断是否是微信
  var ua = navigator.userAgent.toLowerCase()
  return ua.toLowerCase().indexOf('micromessenger') > -1
}
alert(2)
let flag = navigator.userAgent.match(/\(i[^]+( U)? CPU.+Mac OS X/)
if (flag) {
  $('.btn2').hide()
} else {
  $('.btn1').hide()
}
alert(3)
$('.btn.btn1').click(function (e) {
  if (isWeixin()) {
		return $('.tip-wx').show()
	}
	window.location.href='https://itunes.apple.com/cn/app/id336141475'
})
alert(4)
$('.btn.btn2').click(function (e) {
	if (isWeixin()) {
		return $('.tip-wx').show()
	}
	window.location.href = 'http://3g.163.com/links/4636'
})
alert(5)
let isCode = /code/.test(window.location.search)
if (isCode) {
  window.location.href = 'tencloud://invite' + window.location.search
}
alert(6)
