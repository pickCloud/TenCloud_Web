<template>
    <div class="page-login">
      <div class="login-box loginInvite" style="">
        <div class="login-form m-b32" v-if="isRegisn">
          <div class="login-tip m-b16" :class="tip.type" v-if="tip.info">
            <i class="iconfont icon-xinxi-yin vam"></i> <span class="vam">{{tip.info}}</span>
          </div>
          <div class="login-select_content m-b32 p-b16">
            邀请你加入企业
          </div>
          <div class="p-b16"><span class="primary_txt">{{inviteData.contact}}</span> 邀请你加入 <span  class="primary_txt">{{inviteData.company_name}}</span></div>
          <div class="login-form_inp m-b16">
            <input type="text" placeholder="请输入手机号码" v-model="loginData.mobile">
            <i class="iconfont icon-shouji"></i>
          </div>
          <div class="login-form_inp m-b16" v-if="false">
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
          <!--<div class="flex-space-between">-->
            <!--<span class="">还没有账号？<m-btn class="primary_txt" @click.native="resign">免费注册</m-btn></span>-->
            <!--<span class=""><m-btn class="primary_txt" @click.native="lostPassword">忘记密码</m-btn></span>-->
          <!--</div>-->

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
</template>

<script>
//  import this.$axios from '../../store/request/this.$axios'
  import LoginmoduleMixin from '../../components/LoginModuleMixin.js'
  export default {
    mixins: [LoginmoduleMixin],
    data: () => ({
      inviteData: {
        company_name: '',
        contact: ''
      }
    }),
    methods: {
      login () {
        let loginData = this.loginData
        if (this.checkCodeAndMobile()) return false
        this.$axios.http('user_login', loginData, 'post').then(d => {
          if (window.nextInviteCode) {
            let code = window.nextInviteCode
            delete window.nextInviteCode
            this.$router.push({name: 'CompleteData', query: {'code': code}})
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
      },
      isOther () {
        if (window.nextInviteCode) {
          this.$router.push({name: 'CompleteData', query: {'code': window.nextInviteCode}})
          delete window.nextInviteCode
        } else {
          this.$router.replace({name: 'Main'})
        }
      },
      codeResign () {
        let loginData = this.loginData
        if (this.checkPassword()) return false
        this.$axios.http('user_setPassword', loginData, 'post').then(d => {
          this.isOther()
        }).catch(e => {
          this.tip.type = 'error'
          this.tip.info = e.message
        })
      }
    },
    created () {
      let code = window.nextInviteCode
      this.$axios.http('company_code', '', 'get', '?code=' + code).then(d => {
        this.inviteData = d.data
      }).catch(e => {

      })
    },
    watch: {
      'loginData.mobile' () {
        if (this.loginData.mobile.length === 11) {
          this.getCount()
        }
      }
    }
  }
</script>

<style>
  .loginInvite.login-box {
    left:50%;
    right: auto;
    top:50%;
    transform: translate(-50%,-50%);

  }
</style>
