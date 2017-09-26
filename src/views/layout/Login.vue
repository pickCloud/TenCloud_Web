<template>
  <div id="app" class="page-login">
    <navtop></navtop>
    <div class="login-box">
      <div class="login-form m-b32">
        <div class="login-form_title m-b32">登录</div>
        <div class="login-tip m-b16" :class="tip.type" v-if="tip.info">
          <i class="iconfont icon-xinxi-yin vam"></i> <span class="vam">{{tip.info}}</span>
        </div>
        <div class="login-form_inp m-b16">
          <input type="text" placeholder="请输入电话号码" v-model="loginData.mobile">
          <i class="iconfont icon-touxiang1"></i>
        </div>
        <div class="login-form_inp m-b32">
          <input type="text" placeholder="请输入验证码" v-model="loginData.auth_code">
          <m-btn :sizeh="-1" @click.native="getVerifyCode" :disabled="btndis">{{btntip}}</m-btn>
        </div>
        <m-btn class="login-form_sure m-b16" :sizeh="50" @click.native="login">登录</m-btn>
        <div class="text-right"><m-btn>注册</m-btn></div>
        <!--<div class="login-form_sure">登录</div>-->
      </div>
      <div class="text-center">厦门十全十美网络科技有限公司</div>
    </div>
  </div>
</template>

<script>
  import Navtop from './NavTop.vue'
  import Global from '../../global.js'
  export default {
    data: () => ({
      TD: true,
      tip: {
        type: 'error',
        info: ''
      },
      loginData: {
        mobile: '',
        auth_code: ''
      },
      btntip: '获取验证码',
      btndis: false
    }),
    methods: {
      login () {
        let {loginData} = this
        if (this.checkMobile()) return false
        if (this.checkCode()) return false
        Global.login(loginData, (d) => {
//          console.log(d)
          if (window.nextUrl) {
//            this.$router.replace({name: 'Main'})
            window.location.href = window.location.origin + '/' + window.nextUrl
            delete window.nextUrl
          } else {
            this.$router.replace({name: 'Main'})
          }
        }, e => {
          this.tip.type = 'error'
          this.tip.info = e.response.data.message
        })
      },
      checkMobile () {
        let temp = this.loginData.mobile === '' || !(/^1[34578]\d{9}$/.test(this.loginData.mobile))
        if (temp) this.$toast('手机格式有误', 'cc')
        return temp
      },
      checkCode () {
        let temp = this.loginData.auth_code === ''
        if (temp) this.$toast('验证码不能为空', 'cc')
        return temp
      },
      getVerifyCode () {
        if (this.checkMobile()) return false
        this.waittip()
        this.btndis = true
        this.$Global.async('user_verify', true).getData({}, this.loginData.mobile).then(d => {
          //
        }, e => {
          this.overwati()
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
      }
    },
    destroyed () {
      clearInterval(this.sit)
    },
    components: {Navtop}
  }
</script>

<style lang="scss">
  .page-login {
    position: fixed;
    left: 0;top: 0;
    width: 100%;height: 100%;
    background: url("../../../static/img/login_bg.jpg") no-repeat;
    background-size: cover;
  }
  .login-box {
    position: absolute;
    width: 600px;
    left: 50%;top: 50%;
    margin-left: -300px;
    margin-top: -280px;

  }
  .login-form {
    padding: 50px;
    background-color: #2f3543;
  }
  .login-form_title {
    color: #91a3c0;
    font-size: 1rem;
    font-weight: bold;
  }
  .login-form_inp {
    position: relative;
    input {
      background-color: transparent;
      border:1px solid #464e5c;
      color: #6a778d;
      display: block;
      height: 50px;
      width: 100%;
      line-height: 50px;
      padding: 0 16px;
    }
    .btn {
      position: absolute;
      right: 16px;
      top: 10px;
      background-color: #262a35;
      padding: 4px 8px;
    }
    .iconfont {
      font-size: 1rem;
      position: absolute;
      right: 16px;
      top: 14px;
    }
  }
  .login-form_sure {
    display: block;
    width: 100%;
    background-color: #48bbc0;
    text-align: center;
    color: #05484b;
    font-weight: bold;
    &:hover {
      color: #fff!important;
    }
  }
  .login-tip {
    padding: 0 16px;
    height: 50px;
    line-height: 50px;
    border: 1px solid transparent;
    .iconfont {
      font-size: 1rem;
    }
    &.error {
      color: #f15532;
      background-color: #feeeeb;
      border-color: currentColor;
    }
  }
</style>
