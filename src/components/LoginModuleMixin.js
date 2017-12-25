import axios from '../store/request/axios'
import initGeetest from '../gt'
export default {
  data: () => ({
    tip: {
      type: 'error',
      info: ''
    },
    loginData: {
      mobile: '',
      auth_code: '',
      geetest_challenge: '',
      geetest_validate: '',
      geetest_seccode: '',
      password: '',
      new_password: '',
      old_password: ''
    },
    btntip: '获取验证码',
    btndis: false,
    sure_password: '',
    sms_count: 0,
    isRegisn: true
  }),
  methods: {
    getCount () {
      axios.http('user_sms_count', '', 'get', this.loginData.mobile + '/count', false).then(d => {
        this.sms_count = d.data.sms_count
        if (this.sms_count > 2) {
          this.btndis = true
          this.initGeet()
        }
      }).catch(e => {
      })
    },
    resetInfoTip () {
      this.tip.type = ''
      this.tip.info = ''
    },
    lostPassword () {
      this.$router.push({name: 'LostPassword'})
    },
    resign () {
      this.$router.push({name: 'Resign'})
    },
    checkMobile () {
      let temp = this.loginData.mobile === '' || !(/^1[34578]\d{9}$/.test(this.loginData.mobile))
      if (this.loginData.mobile === '') {
        this.tip.type = 'error'
        this.tip.info = '手机号不能为空'
        return temp
      }
      if (temp) {
        this.tip.type = 'error'
        this.tip.info = '手机格式有误'
      }
      return temp
    },
    checkCode () {
      let temp = this.loginData.auth_code === ''
      if (temp) {
        this.tip.type = 'error'
        this.tip.info = '验证码不能为空'
      }
      return temp
    },
    checkHasPassword () {
      let temp = this.loginData.password === ''
      if (temp) {
        this.tip.type = 'error'
        this.tip.info = '密码不能为空'
        return true
      }
      if (this.loginData.password.length < 6) {
        this.tip.type = 'error'
        this.tip.info = '密码不能小于6位'
        return true
      }
      return temp
    },
    checkPasswordAndMobile () {
      if (this.checkMobile()) return true
      if (this.checkHasPassword()) return true
    },
    checkCodeAndMobile () {
      if (this.checkMobile()) return true
      if (this.checkCode()) return true
      if (this.sms_count > 2 && this.sms_count < 10 && !(this.loginData.geetest_challenge && this.loginData.geetest_seccode && this.loginData.geetest_validate)) {
        this.tip.type = 'error'
        this.tip.info = '点击上方按钮进行验证'
        return true
      }
    },
    getVerifyCode () {
      if (this.checkMobile()) return false
      this.waittip()
      this.btndis = true
      this.requestCode()
    },
    requestCode () {
      axios.http('user_verify', this.loginData).then(d => {
      }, e => {
        this.overwati()
        if (e.status === 10404) {
          this.isRegisn = false
          return false
        } else if (e.status === 10405) {
          // this.sms_count = e.data.sms_count || 0
          // if (this.sms_count > 2) {
          //   this.initGeet()
          // }
        }
        this.tip.type = 'error'
        this.tip.info = e.message
      })
    },
    waittip () {
      let alltime = 60
      this.btntip = '重新获取(' + alltime + 's)'
      this.sit = setInterval(_ => {
        this.btntip = '重新获取(' + (alltime--) + 's)'
        if (alltime === -1) this.overwati()
      }, 1000)
    },
    overwati () {
      this.btntip = '重新获取'
      this.btndis = false
      clearInterval(this.sit)
    },
    checkPassword () {
      let temp = this.loginData.password === ''
      if (temp) {
        this.tip.type = 'error'
        this.tip.info = '请输入密码'
        temp = true
      } else if (this.loginData.password.length < 6) {
        this.tip.type = 'error'
        this.tip.info = '密码最小长度为6位'
        temp = true
      } else if (this.loginData.password !== this.sure_password) {
        this.tip.type = 'error'
        this.tip.info = '两次输入密码不一致'
        temp = true
      }
      return temp
    },
    checkNewPassword () {
      let temp = this.loginData.new_password === ''
      if (temp) {
        this.tip.type = 'error'
        this.tip.info = '请输入新密码'
        temp = true
      } else if (this.loginData.new_password.length < 6) {
        this.tip.type = 'error'
        this.tip.info = '密码最小长度为6位'
        temp = true
      } else if (this.loginData.new_password !== this.sure_password) {
        this.tip.type = 'error'
        this.tip.info = '两次输入密码不一致'
        temp = true
      }
      return temp
    },
    checkOldNewPassword () {
      let temp = this.loginData.old_password === ''
      if (temp) {
        this.tip.type = 'error'
        this.tip.info = '请输入原始密码'
        temp = true
      } else if (this.loginData.new_password.length < 6) {
        this.tip.type = 'error'
        this.tip.info = '密码最小长度为6位'
        temp = true
      } else if (this.loginData.new_password !== this.sure_password) {
        this.tip.type = 'error'
        this.tip.info = '两次输入密码不一致'
        temp = true
      }
      return temp
    },
    getCallBack (captchaObj) {
      if (!document.getElementById('captcha')) {
        return false
      }
      captchaObj.onSuccess(() => {
        let result = captchaObj.getValidate()
        this.loginData['geetest_challenge'] = result.geetest_challenge
        this.loginData['geetest_validate'] = result.geetest_validate
        this.loginData['geetest_seccode'] = result.geetest_seccode
        // this.requestCode()
        this.btndis = false
      })
      captchaObj.onReady(function () {
        document.getElementById('wait').style.display = 'none'
      })
      if (document.getElementById('wait').style.display === 'none') {
        captchaObj.reset()
        return false
      } else {
        captchaObj.appendTo('#captcha')
      }

      // 更多接口说明请参见：http://docs.geetest.com/install/client/web-front/
    },
    initGeet () {
      axios.http('user_get_captcha').then(data => {
        let that = this
        if (data.status === 0) {
          initGeetest({
            // 以下 4 个配置参数为必须，不能缺少
            gt: data.data.gt,
            challenge: data.data.challenge,
            offline: !data.data.success, // 表示用户后台检测极验服务器是否宕机
            new_captcha: data.data.new_captcha, // 用于宕机时表示是新验证码的宕机
            product: 'float', // 产品形式，包括：float，popup
            width: '100%',
            bg_color: '#262a35'
            // 更多配置参数说明请参见：http://docs.geetest.com/install/client/web-front/
          }, that.getCallBack)
        }
      })
    }
  },
  created () {
  },
  watch: {
  }
}
