<template>
  <div id="app" class="page-login">
    <navtop></navtop>
    <div class="login-box">
      <div class="login-form m-b32">
        <!--<div class="login-form_title m-b32">登录</div>-->
        <div class="login-select_content m-b32">
          <m-btn class="btn theme-dft" @click.native="selectType(0)" :class="type==0?'select-active':''">密码登录</m-btn>
          <m-btn class="btn theme-dft" @click.native="selectType(1)" :class="type==1?'select-active':''">验证码登录</m-btn>
        </div>
        <div class="login-tip m-b16" :class="tip.type" v-if="tip.info">
          <i class="iconfont icon-xinxi-yin vam"></i> <span class="vam">{{tip.info}}</span>
        </div>
        <!--<div class="login-form_inp m-b16">-->
          <!--<div>{{tip.}}</div>-->
        <!--</div>-->
        <div class="login-form_inp m-b16">
          <input type="text" placeholder="请输入电话号码" v-model="loginData.mobile">
          <i class="iconfont icon-touxiang1"></i>
        </div>
        <div class="login-form_inp m-b16" v-if="type==0">
          <input type="password" placeholder="请输入密码" v-model="loginData.password" >
          <i class="iconfont icon-touxiang1"></i>
        </div>
        <div v-else>
          <div class="login-form_inp m-b16" >
            <input type="text" placeholder="请输入验证码" v-model="loginData.auth_code">
            <m-btn :sizeh="-1" @click.native="getVerifyCode" :disabled="btndis">{{btntip}}</m-btn>
          </div>
          <div id="captcha" class="m-b16">
            <div id="wait">载入中……</div>
          </div>
        </div>
        <m-btn class="login-form_sure m-b16" :sizeh="50" @click.native="login">登录</m-btn>
        <div class="flex-space-between">
         <span class="">还没有账号？<m-btn class="primary_txt" @click.native="resign">免费注册</m-btn></span>
          <span class=""><m-btn class="primary_txt" @click.native="lostPassword">忘记密码</m-btn></span>
        </div>

        <!--<div class="login-form_sure">登录</div>-->
      </div>
      <div class="text-center">厦门十全十美网络科技有限公司</div>
    </div>
  </div>
</template>

<script>
  import Navtop from './NavTop.vue'
  import axios from '../../store/request/axios'
  import LoginmoduleMixin from '../../components/LoginModuleMixin.js'
  export default {
    mixins: [LoginmoduleMixin],
    data: () => ({
      TD: true,
      type: 0
    }),
    methods: {
      selectType (value) {
        this.type = value
      },
      login () {
        let loginData = this.loginData
        if (this.type === 1) {
          if (this.checkMobile()) return false
          if (this.checkCode()) return false
          if (!(this.loginData.geetest_challenge && this.loginData.geetest_seccode && this.loginData.geetest_validate)) {
            this.tip.type = 'error'
            this.tip.info = '点击上方按钮进行验证'
            return false
          }
          axios.http('user_login', loginData, 'post').then(d => {
            if (window.nextUrl) {
              this.$router.replace({name: 'Main'})
              window.location.href = window.location.origin + window.nextUrl
              delete window.nextUrl
            } else {
              this.$router.replace({name: 'Main'})
            }
          }).catch(e => {
            this.tip.type = 'error'
            this.tip.info = e.response.data.message
          })
        } else {
          axios.http('user_login_password', loginData, 'post').then(d => {
            if (window.nextUrl) {
              this.$router.replace({name: 'Main'})
              window.location.href = window.location.origin + window.nextUrl
              delete window.nextUrl
            } else {
              this.$router.replace({name: 'Main'})
            }
          }).catch(e => {
            this.tip.type = 'error'
            this.tip.info = e.response.data.message
          })
        }
      }
    },
    created () {
    },
    watch: {
      type: function () {
        if (this.type !== 1) return
        this.initGeet()
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
    width: 437px;
    /*height:677px;*/
    left: 50%;top: 50%;
    -webkit-transform: translate(-50%,-50%);
  }
  .login-form {
    padding: 46px 32px;
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
  //1030
  .login-select_content {
    /*line-height:60px;*/
    border-bottom: #464E5C 1px solid;
    box-sizing: border-box;
    vertical-align: middle;
    li{
      display: inline-block;
    }
  }
  .select-active{
    color:#48bbc0 ;
    box-sizing: border-box;
    border-bottom: #48bbc0 1px solid;
  }
  .flex-space-between{
    display: flex;
    justify-content: space-between;
  }
  @media not (max-width: 414px) {
    .login-box {
      width: 300px;
    }
    .login-form {
      padding: 16px 15px;
    }
  }
</style>
