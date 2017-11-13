<template>
  <nav class="app-top flex-space-between" :class="[miniClass]">
    <aside class="lay-aside left">
      <span class="_logo vam"><router-link :to="{name:'Main'}"><span class="show-lay-mini">拾·云</span><span class="hide-lay-mini primary_txt"><i class="iconfont icon-shiyun" style="padding-right: 5px"></i>拾·云</span></router-link></span>
      <!--<span class="_cndesc vam right hide-mini">控制台</span>-->
    </aside>
    <div class="" v-if="!$parent.TD">
      <!--<m-btn @click.native="back" v-if="hasBack"><i class="icon icon-return"></i></m-btn>-->
      <m-tip class="user-box" has-arrow popperMouse>
        <div slot="label" class="user-box_label"><i class="iconfont icon-touxiang1 vam" style="font-size: 1.5rem"></i> <span class="vam">{{userinfo.name?userinfo.name:userinfo.mobile}}</span></div>
        <ul slot="popper">
          <li><router-link :to="{name:'FirmData'}"><i class="iconfont icon-ziliao vam"></i> <span class="vam">查看企业资料</span></router-link></li>
          <li><router-link :to="{name:'UserInfo'}"  @click.native="userInfo"><i class="iconfont icon-ziliao vam"></i> <span class="vam">查看个人资料</span></router-link></li>
          <li><router-link :to="{name:'FirmAdd'}" @click.native="addCompany"><i class="iconfont icon-tianjiaqiye vam"></i> <span class="vam">添加企业</span></router-link></li>
          <li class="text-left"><div class="__btn" @click="logout"><i class="iconfont icon-tuichu vam" style="margin-right: 3px"></i><span class="vam">退出登录</span></div></li>
        </ul>
      </m-tip>
      <div class="user-box btn hover-component animate-fadeIn" style="right: 140px;text-align: right;">
        <div class="user-box_label" ><i class="iconfont icon-xiaoxi vam" style="font-size: 1rem"></i> <span class="vam user-box_msg_translate common-ground_box navtop"><div class="num">1</div></span></div>
        <div style="position: relative;width: 400px;background-color: #2f3543" v-if="messages.length===0">
          <ul class="child user-message_tietle ">
            <div class="flex-space-between" style="border-bottom: 1px solid rgba(255,255,255,0.2);">
              <div class="pad-lr16">消息合</div>
              <m-btn class="pad-lr16 btn">清空</m-btn>
            </div>
            <li class="flex-space-between line-50 pad-5 over-hidden" v-for="item in messages">
              <div class="line-14 text-left"><span>item.content</span></div>
              <div class="line-0 pad-5">
                <div class="line-20">2017/10/15</div>
                <!--<div  class="common-ground_box navtop-msg-content line-20">-->
                  <!--<div class="num line-20">1</div>-->
                <!--</div>-->
              </div>
            </li>
            <div class="line-50 btn text-center theme-dft" style="display: block;">全部消息</div>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import axios from '../../store/request/axios'
//  import Cookies from 'js-cookie'

  export default {
    data: () => ({
      user: {},
      messages: []
    }),
    methods: {
      back () {
        this.$router.back()
      },
      logout () {
        this.$Global.async('user_logout', true).getData({}).then(d => {
          if (d.status === 0) {
            this.$Global.logout()
            this.$router.replace({name: 'Login'})
          }
          this.$toast(d.message, 'cc')
        })
      },
      addCompany () {
        this.$store.commit('sitepath/SET_PATH', [
          {name: 'Main', cn: '主页'},
          {name: 'UserInfo', cn: '个人资料'},
          {cn: '添加企业'}
        ])
      },
      userInfo () {
        this.$store.commit('sitepath/SET_PATH', [
          {name: 'Main', cn: '主页'},
          {cn: '个人资料'}
        ])
      },
      getMessage () {
        axios.http('message_get').then(d => {
          this.messages = d.data
        })
      }
    },
    computed: {
      miniClass () {
        return this.$parent.isMini ? 'lay-mini' : ''
      },
//      hasBack () {
//        return true
//      },
      userinfo () {
        return this.$root.userinfo
      }
    },
    created () {
      if (!this.$parent.TD) {
        this.getMessage()
      }
    }
  }
</script>

<style lang="scss">
  .user-box {
    position: absolute;
    right: 16px;
    top: 0;
    .icon {
      font-size: 1.5rem;
      margin-right: 8px;
    }
    .popper-arrow {
      border-color: transparent transparent #2f3543 !important;
    }
    .theme-dft.popper-tip {
      background-color: #2f3543;
      min-width: 220px;
      color: #91a3c0;
      padding: 0;
      .icon {
        font-size: 1rem;
      }
      li {
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid rgba(255,255,255,0.1);
        position: relative;
        &:last-child {
          border-bottom-color: transparent;
        }
        a,.__btn {
          position: absolute;
          display: block;
          width: 100%;
          height: 100%;
          left: 0;top:0;
          padding: 0 16px;
          cursor: pointer;
          &:hover {
            background-color: #91a3c0;
            color: #171a21;
          }
        }
      }
    }
    .user-box_label {
      cursor: pointer;
    }
    .user-box_msg_translate{
      transform: translate(-10px, -10px);
    }
    .navtop.common-ground_box {
      &:before {
        background-color: #48bbc0;
        width: 20px;
        height: 20px;
        top:0;
      }
      .num{
        font-size:14px ;
        line-height: 20px;
        width: 20px;
      }
    }
    .navtop-msg-content.common-ground_box {
      transform: translate(30px,0px);
      &:before {
        width: 20px;
        height: 20px;
        top:0;
      }
      .num{
        font-size:14px ;
        line-height: 20px;
        width: 20px;
      }
    }
  }
</style>
