<template>
  <div id="app" class="page-resign">
    <navtop></navtop>
    <div class="resign-box">
      <div class="resign-form m-b32">
        <!--<div class="resign-form_title m-b32">登录</div>-->
        <h4 class="m-b32" style="text-align: center ">欢迎注册Console</h4>
        <div class="resign-tip m-b16" :class="tip.type" v-if="tip.info">
          <i class="iconfont icon-touxiang1 vam"></i> <span class="vam">{{tip.info}}</span>
        </div>
        <!--<div class="resign-form_inp m-b16">-->
          <!--<div>{{tip.}}</div>-->
        <!--</div>-->
        <div class="resign-form_inp m-b16">
          <input type="text" placeholder="输入手机号码" v-model="loginData.mobile">
          <i class="iconfont icon-touxiang1"></i>
        </div>
        <div class="resign-form_inp m-b16" >
            <input type="text" placeholder="验证码" v-model="loginData.auth_code">
            <m-btn :sizeh="-1" @click.native="getVerifyCode" :disabled="btndis">{{btntip}}</m-btn>
        </div>
        <div class="resign-form_inp m-b16">
          <input type="password" placeholder="密码最小长度为6位" v-model="loginData.password">
          <i class="iconfont icon-touxiang1"></i>
        </div>
        <div class="resign-form_inp m-b16">
          <input type="password" placeholder="确认密码" v-model="sure_password">
          <i class="iconfont icon-touxiang1"></i>
        </div>
        <div id="captcha" class="m-b16">
          <div id="wait">载入中……</div>
        </div>
        <m-btn class="resign-form_sure m-b16" :sizeh="50" @click.native="resign">注册</m-btn>
        <div class="flex-flex-end">
          <span class="">已有账号，<m-btn  class="primary_txt" @click.native="login">马上登录</m-btn></span>
        </div>
        <!--<div class="resign-form_sure">登录</div>-->
      </div>
      <div class="text-center">厦门十全十美网络科技有限公司</div>
    </div>
  </div>
</template>

<script>
  import Navtop from './NavTop.vue'
  import axios from '../../store/request/axios'
  import initGeetest from '../../gt'
  import LoginModuleMixin from '../../components/LoginModuleMixin'
  export default {
    mixins: [LoginModuleMixin],
    data: () => ({
    }),
    methods: {
      selectType (value) {
        this.type = value
      },
      login () {
        this.$router.push({name: 'Login'})
      },
      resign () {
        if (this.checkMobile()) return false
        if (this.checkCode()) return false
        if (this.checkPassword()) return false
        if (!(this.loginData.geetest_challenge && this.loginData.geetest_seccode && this.loginData.geetest_validate)) {
          this.tip.type = 'error'
          this.tip.info = '点击上方按钮进行验证'
          return false
        }
        let loginData = this.loginData
        axios.http('user_resign', loginData, 'post').then(d => {
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
    },
    created () {
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
    },
    destroyed () {
      clearInterval(this.sit)
    },
    components: {Navtop}
  }
</script>

<style lang="scss">
  .page-resign {
    position: fixed;
    left: 0;top: 0;
    width: 100%;height: 100%;
    background: url("../../../static/img/login_bg.jpg") no-repeat;
    background-size: cover;
  }
  .resign-box {
    position: absolute;
    width: 437px;
    /*height:677px;*/
    left: 50%;top: 50%;
    -webkit-transform: translate(-50%,-50%);
  }
  .resign-form {
    padding: 46px 32px;
    background-color: #2f3543;
  }
  .resign-form_title {
    color: #91a3c0;
    font-size: 1rem;
    font-weight: bold;
  }
  .resign-form_inp {
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
  .resign-form_sure {
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
  .resign-tip {
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
  .resign-select_content {
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
  .flex-flex-end{
    display: flex;
    justify-content: flex-end;
  }
  @media not (max-width: 414px) {
    .resign-box {
      width: 300px;
    }
    .resign-form {
      padding: 16px 15px;
    }
  }
</style>
