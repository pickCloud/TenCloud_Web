<template>
  <div id="app" class="page-login">
    <!--<navtop></navtop>-->
    <div class="login-1200">
      <LoginWord></LoginWord>
      <div class="login-box">
        <div class="login-form m-b32" v-if="isRegisn">
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
            <i class="iconfont icon-shouji"></i>
          </div>
          <div class="login-form_inp m-b16" v-if="type==0">
            <input type="password" placeholder="请输入密码" v-model="loginData.password" >
            <i class="iconfont icon-mima"></i>
          </div>
          <div v-else>
            <div id="captcha" class="m-b16" v-if="sms_count>3">
              <div id="wait">载入中……</div>
            </div>
            <div class="login-form_inp m-b16" >
              <input type="text" placeholder="请输入验证码" v-model="loginData.auth_code">
              <m-btn :sizeh="-1" @click.native="getVerifyCode" :disabled="btndis">{{btntip}}</m-btn>
            </div>
          </div>
          <m-btn class="login-form_sure m-b16" :sizeh="50" @click.native="login">登录</m-btn>
          <div class="flex-space-between">
           <span class="">还没有账号？<m-btn class="primary_txt" @click.native="resign">免费注册</m-btn></span>
            <span class=""><m-btn class="primary_txt" @click.native="lostPassword">忘记密码</m-btn></span>
          </div>

          <!--<div class="login-form_sure">登录</div>-->
        </div>
        <div class="login-form m-b32" v-else>
          <div class="login-select_content line-50 m-b16">
            您的手机号码初次注册，请设置初始密码
          </div>
          <div class="login-tip m-b16" :class="tip.type" v-if="tip.info">
            <i class="iconfont icon-xinxi-yin vam"></i> <span class="vam">{{tip.info}}</span>
          </div>
          <div class="login-form_inp m-b16">
            <input type="password" placeholder="请输入密码" v-model="loginData.password">
            <i class="iconfont icon-mima"></i>
          </div>
          <div class="login-form_inp m-b16" >
            <input type="password" placeholder="确认密码" v-model="sure_password" >
            <i class="iconfont icon-zaicimima"></i>
          </div>
          <m-btn class="login-form_sure m-b16" :sizeh="50" @click.native="codeResign" >确定，进入控制台</m-btn>
        </div>
        <div class="text-center">厦门十全十美网络科技有限公司</div>
      </div>

    </div>
    <div class="login-bottom">
      <div class="center flex-space-between">
        <div class="left btn">© 2017 厦门十全十美科技有限公司 版权所有 </div>
        <div class="right btn">闽备ICP 000888号</div>
      </div>
    </div>
  </div>
</template>

<script>
//  import Navtop from './NavTop.vue'
  import axios from '../../store/request/axios'
  import LoginmoduleMixin from '../../components/LoginModuleMixin.js'
  import LoginWord from '../../components/LoginWord.vue'
  export default {
    mixins: [LoginmoduleMixin],
    data: () => ({
//      TD: true,
      type: 0
    }),
    methods: {
      selectType (value) {
        this.type = value
        this.sms_count = 0
      },
      codeResign () {
        let loginData = this.loginData
        if (this.checkPassword()) return false
        axios.http('user_setPassword', loginData, 'post').then(d => {
          if (window.nextUrl) {
            this.$router.replace({name: 'Main'})
            window.location.href = window.location.origin + window.nextUrl
            delete window.nextUrl
          } else {
            this.$router.replace({name: 'Main'})
          }
        }).catch(e => {
          this.tip.type = 'error'
          this.tip.info = e.message
        })
      },
      login () {
        let loginData = this.loginData
        if (this.type === 1) {
          if (this.checkMobile()) return false
          if (this.checkCode()) return false
          if (this.sms_count > 3 && !(this.loginData.geetest_challenge && this.loginData.geetest_seccode && this.loginData.geetest_validate)) {
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
            if (e.status === 10404) {
              this.isRegisn = false
              return false
            }
            this.tip.type = 'error'
            this.tip.info = e.message
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
            this.tip.info = e.message
          })
        }
      }
    },
    created () {
    },
//    watch: {
//      type: function () {
//        if (this.type !== 1 && this.sms_count > 0) return
//        this.initGeet()
//      }
//    },
    destroyed () {
      clearInterval(this.sit)
    },
    components: {LoginWord}
  }
</script>

<style lang="scss">
  .login-1200{
    position: relative;
    width: 1200px;
    margin:0 auto;
    height:100%;
    overflow: hidden;
  }
  .login-box {
    position: absolute;
    width: 430px;
    /*height:677px;*/
    right: 0;
    top: 48%;
    -webkit-transform: translate(0,-50%);
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
  .login-bottom{
    position: absolute;
    bottom: 0;
    height: 100px;
    width: 100%;
    border-top:#2f3543 1px solid;
    .center{
      width: 1200px;
      margin:0 auto;
      color: #2f3543;
      height: 100%;
      font-size: 14px;
    }
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
