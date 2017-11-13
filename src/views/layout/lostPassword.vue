<template>
  <div class="">
    <navtop></navtop>
  <div class="lostPassword-box">
    <div class="lostPassword-form">
      <div class="lostPassword-nav flex-space-between border-bottom-1px" style="align-items: center;">
        <span>找回密码</span>
        <m-btn class="btn primary_txt" @click.native="backLogin">返回登陆</m-btn>
      </div>
      <div class="lostPassword-status flex-space-between">
        <div class="number-content" :class="type==0?'active':''"><div class="num">1</div><div class="num-tip">验证手机</div></div>
        <div class="number-line long"></div>
        <div class="number-content" :class="type==1?'active':''"><div class="num">2</div><div class="num-tip">重置密码</div></div>
        <div class="number-line long"></div>
        <div class="number-content" :class="type==2?'active':''"><div class="num">3</div><div class="num-tip">完成</div></div>
      </div>
      <div class="lostPassword-input-box">
        <div class="login-tip m-b16" :class="tip.type" v-if="tip.info">
          <i class="iconfont icon-xinxi-yin vam"></i> <span class="vam">{{tip.info}}</span>
        </div>
        <!--<div class="login-form_inp m-b16">-->
        <!--<div>{{tip.}}</div>-->
        <!--</div>-->
        <div v-if="type==0">
        <div class="login-form_inp m-b16">
          <input type="text" placeholder="请输入手机号码" v-model="loginData.mobile">
          <i class="iconfont icon-shouji"></i>
        </div>

        <div >
          <div class="login-form_inp m-b16" >
            <input type="text" placeholder="请输入验证码" v-model="loginData.auth_code">
            <m-btn :sizeh="-1" @click.native="getVerifyCode" :disabled="btndis">{{btntip}}</m-btn>
          </div>
          <div id="captcha" class="m-b16" v-if="sms_count>2 && sms_count <10">
            <div id="wait">载入中……</div>
          </div>
        </div>
        </div>
        <div v-else-if="type==1">
          <div class="login-form_inp m-b16" >
            <input type="password" placeholder="密码最小长度为6位" v-model="loginData.new_password" >
            <i class="iconfont icon-mima"></i>
          </div>
          <div class="login-form_inp m-b16">
            <input type="password" placeholder="再次输入密码" v-model="sure_password">
            <i class="iconfont icon-zaicimima"></i>
          </div>
        </div>
        <div v-else class="lostPassword-success-tip">
          <h3>恭喜您！密码已成功找回</h3>
          <m-btn><span>返回</span><m-btn class="primary_txt" @click.native="backLogin">登录</m-btn></m-btn>
        </div>
        <m-btn v-if="type!==2" class="login-form_sure m-b16" :sizeh="50" @click.native="nextStep">下一步</m-btn>
        <div class="flex-space-between  primary_txt line-25" v-if="this.type === 1"><div></div> <m-btn class="btn" @click.native="getBack">< 上一步</m-btn></div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import axios from '../../store/request/axios'
  import LoginModuleMixin from '../../components/LoginModuleMixin'
  import navtop from './navtop'
  export default {
    mixins: [LoginModuleMixin],
    data: () => ({
      TD: true,
      type: 0
    }),
    components: {navtop},
    methods: {
      nextStep () {
        if (this.type === 0) {
          console.log(this.checkCodeAndMobile())
          if (this.checkCodeAndMobile()) return false
          this.type++
          this.resetInfoTip()
        } else if (this.type === 1) {
          if (this.checkNewPassword()) return false
          axios.http('user_resetPassword', this.loginData).then(d => {
            if (d.status === 0) {
              this.type++
              this.$toast('修改密码成功', 'cc')
            }
          }).catch(e => {
            if (e.status === 10412) {
              this.type--
            }
            this.tip.type = 'error'
            this.tip.info = e.message
          })
        }
      },
      backLogin () {
        this.$router.push({name: 'Login'})
      },
      getBack () {
        this.type--
      }
    },
    created () {
//      this.initGeet()
    }
  }
</script>
<style lang="scss">
  .lostPassword-box {
    position: absolute;
    width: 820px;
    /*height:677px;*/
    left: 50%;top: 50%;
    -webkit-transform: translate(-50%,-50%);
  }
  .lostPassword-form {
    padding: 16px 36px;
    background-color: #2f3543;
    .lostPassword-nav{
      line-height: 50px;
    }
  }
  .border-bottom-1px{
    position:relative;
    &:before{
      content: " ";
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 1px;
      border-top: 1px solid #464e5c;
      color: #464e5c;
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
      transform: scaleY(0.5);
    }
  }
  .lostPassword-status{
    width: 100%;
    line-height: 50px;
    .number-content {
      position: relative;
      line-height: 50px;
      display: flex;
      .num{
        position: relative;
        width: 45px;
        text-align: center;
      }
      &:before{
        position: absolute;
        content: " " ;
        top:11px;
        left:9px;
        width:26px;
        height: 26px;
        transform:rotate(45deg);
        background-color: #2b2f3a;
        border-radius: 5px;
      }
      &.active .num{
        color: #2b2f3a;
      }
      &.active .num-tip{
        color: #56d1e2;
      }
      &.active:before{
        background-color: #56d1e2;
      }
    }
    .number-line{
      position: relative;
      &:before {
        position: absolute;
        content: ' ';
        height: 2px;
        width: 180px;
        background-color:#2b2f3a ;
      }
      &.long{
         width: 180px;
       }
      &.short{
        width: 120px;
      }
    }

  }
  .lostPassword-input-box{
    width: 500px;
    margin: auto;
  }
  .lostPassword-success-tip{
    text-align: center;
    line-height: 50px;
    padding: 50px 0;
  }
</style>
