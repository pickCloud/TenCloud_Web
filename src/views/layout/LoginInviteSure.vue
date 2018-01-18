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
    methods: {
    },
    created () {
    },
    watch: {
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
