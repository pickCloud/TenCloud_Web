<template>
  <div class="pop-box">
    <div class="pop-form">
      <div class="pop-nav flex-space-between border-bottom-1px p-lr-16" style="align-items: center">
        <span>修改密码</span>
        <div class="close" @click="closePop"></div>
      </div>
      <div class="pop-status flex-space-between p-16">
        <div class="number-content" :class="type==0?'active':''"><div class="num">1</div><div class="num-tip">验证手机</div></div>
        <div class="number-line long"></div>
        <div class="number-content" :class="type==1?'active':''"><div class="num">2</div><div class="num-tip">重置密码</div></div>
        <div class="number-line long"></div>
        <div class="number-content" :class="type==2?'active':''"><div class="num">3</div><div class="num-tip">完成</div></div>
      </div>
      <div class="pop-input-box p-b16">
        <div class="login-tip m-b16" :class="tip.type" v-if="tip.info">
          <i class="iconfont icon-xinxi-yin vam"></i> <span class="vam">{{tip.info}}</span>
        </div>
        <!--<div class="login-form_inp m-b16">-->
        <!--<div>{{tip.}}</div>-->
        <!--</div>-->
        <div v-if="type==0">
          <div class="login-form_inp m-b16">
            <input type="text" placeholder="请输入电话号码" v-model="loginData.mobile">
            <i class="iconfont icon-touxiang1"></i>
          </div>

          <div >
            <div id="captcha" class="m-b16" v-if="sms_count>2 && sms_count <10">
              <div id="wait">载入中……</div>
            </div>
            <div class="login-form_inp m-b16" >
              <input type="text" placeholder="请输入验证码" v-model="loginData.auth_code">
              <m-btn :sizeh="-1" @click.native="getVerifyCode" :disabled="btndis">{{btntip}}</m-btn>
            </div>
          </div>
        </div>
        <div v-else-if="type==1">
          <div class="login-form_inp m-b16" >
            <input type="password" placeholder="请输入原始密码" v-model="loginData.old_password" >
            <i class="iconfont icon-touxiang1"></i>
          </div>
          <div class="login-form_inp m-b16" >
            <input type="password" placeholder="请输入修改密码，密码最小长度为6位" v-model="loginData.new_password" >
            <i class="iconfont icon-touxiang1"></i>
          </div>
          <div class="login-form_inp m-b16">
            <input type="password" placeholder="确认密码" v-model="sure_password">
            <i class="iconfont icon-touxiang1"></i>
          </div>
        </div>
        <div v-else class="pop-success-tip">
          <h3>恭喜您！密码已修改成功</h3>
          <!--<div><span>返回</span><m-btn class="primary_txt" @click.native="backLogin">登录</m-btn></div>-->
        </div>
        <m-btn v-if="type!==2" class="login-form_sure m-b16" :sizeh="50" @click.native="nextStep">下一步</m-btn>
        <div class="flex-space-between  primary_txt line-25" v-if="this.type === 1"><div></div> <m-btn class="btn" @click.native="getBack">< 上一步</m-btn></div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from '../../store/request/axios'
  import LoginModuleMixin from '../../components/LoginModuleMixin'
  import {mapMutations} from 'vuex'
  export default {
    mixins: [LoginModuleMixin],
    data: () => ({
      type: 0
    }),
    methods: {
      ...mapMutations('pop', ['setPopState']),
      nextStep () {
        this.resetInfoTip()
        if (this.type === 0) {
          if (this.checkCodeAndMobile()) return false
          this.type++
        } else if (this.type === 1) {
          if (this.checkOldNewPassword()) return false
          axios.http('user_resetPassword', this.loginData).then(d => {
            if (d.status === 0) {
              this.type++
              this.$toast('修改成功', 'cc')
            }
          }).catch(e => {
            if (e.status === 10411) {
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
      closePop () {
        this.setPopState({name: 'pop_changePassword', value: false})
      },
      getBack () {
        this.type--
        this.resetInfoTip()
      }
    },
    computed: {
    },
    created () {
      if (this.loginData.mobile.length === 11 && this.type === 0) this.getCount()
    },
    watch: {
      'loginData.mobile': function () {
        if (this.loginData.mobile.length === 11 && this.type === 0) this.getCount()
      }
    }
  }
</script>
<style lang="scss">


</style>
