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
            <input type="text" placeholder="请输入手机号码" v-model="loginData.mobile">
            <i class="iconfont icon-shouji"></i>
          </div>
          <div class="login-form_inp m-b16" v-if="type==0">
            <input type="password" placeholder="请输入密码" v-model="loginData.password" >
            <i class="iconfont icon-mima"></i>
          </div>
          <div v-else>
            <div id="captcha" class="m-b16" v-if="sms_count>2 && sms_count <10">
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
      isOther () {
        if (window.nextUrl) {
          console.log('git认证')
          this.$router.replace({name: 'Main'})
          window.location.href = window.location.origin + window.nextUrl
          delete window.nextUrl
        } else if (window.nextInviteCode) {
          console.log('code路由')
          this.$router.push({name: 'CompleteData', query: {'code': window.nextInviteCode}})
//          window.location.href = window.nextinvite
          delete window.nextInviteCode
        } else {
          console.log('默认')
          this.$router.replace({name: 'Main'})
        }
        console.log(window.nextInviteCode)
      },
      codeResign () {
        let loginData = this.loginData
        if (this.checkPassword()) return false
        axios.http('user_setPassword', loginData, 'post').then(d => {
          this.isOther()
        }).catch(e => {
          this.tip.type = 'error'
          this.tip.info = e.message
        })
      },
      login () {
        let loginData = this.loginData
        if (this.type === 1) {
          if (this.checkCodeAndMobile()) return false
          axios.http('user_login', loginData, 'post').then(d => {
            this.isOther()
          }).catch(e => {
            if (e.status === 10404) {
              this.isRegisn = false
              return false
            }
            this.tip.type = 'error'
            this.tip.info = e.message
          })
        } else {
          if (this.checkPasswordAndMobile()) return true
          axios.http('user_login_password', loginData, 'post').then(d => {
            this.isOther()
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

  @media not (max-width: 414px) {
    .login-box {
      width: 300px;
    }
    .login-form {
      padding: 16px 15px;
    }
  }
</style>
