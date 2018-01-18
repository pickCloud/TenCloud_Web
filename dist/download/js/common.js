var isWeixin = function () {
  // 判断是否是微信
  var ua = navigator.userAgent.toLowerCase()
  return ua.match(/MicroMessenger/i) == "micromessenger"
}
$('.btn.btn1').click(function (e) {
  if (isWeixin()) {
		return $('.tip-wx').show()
	}
	window.location.href='https://itunes.apple.com/cn/app/id892359007'
})
$('.btn.btn2').click(function (e) {
	if (isWeixin()) {
		return $('.tip-wx').show()
	}
	window.location.href = 'http://3g.163.com/links/4636'
})
