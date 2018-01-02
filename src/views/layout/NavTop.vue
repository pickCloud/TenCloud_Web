<template>
  <nav class="app-top flex-space-between" :class="[miniClass]">
    <aside class="lay-aside left">
      <span class="_logo vam"><router-link :to="{name:'Main'}"><span class="show-lay-mini"><i class="iconfont icon-shiyun primary_txt" style="padding-right: 5px"></i></span><span class="hide-lay-mini primary_txt"><i class="iconfont icon-shiyun" style="padding-right: 5px"></i>拾·云</span></router-link></span>
      <!--<span class="_cndesc vam right hide-mini">控制台</span>-->
    </aside>
    <div class="" v-if="!$parent.TD">
      <!--<m-btn @click.native="back" v-if="hasBack"><i class="icon icon-return"></i></m-btn>-->
      <m-tip class="user-box" has-arrow popperMouse>
        <div slot="label" class="user-box_label">
          <i class="iconfont icon-touxiang1 vam" style="font-size: 1.5rem" v-if="!userinfo.image_url"></i>
          <div class="head" :style="{backgroundImage:'url('+ userinfo.image_url+')'}" v-else></div>
          <span class="vam userName">{{currentUser.name||currentUser.company_name||currentUser.mobile}}</span></div>
        <ul slot="popper" style="max-height: 700px;overflow: auto">
          <li style="white-space: nowrap;" v-for="item in companyList" :key="item.id"><router-link :to="{name:'FirmData',params:{id:item.cid}}" @click.native="changeLink(item)"><i class="iconfont icon-qiye vam"></i> <span class="vam" style="overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">{{item.company_name}}</span></router-link></li>
          <li><router-link :to="{name:'FirmAdd'}" @click.native="addCompany"><i class="iconfont icon-tianjiaqiye vam"></i> <span class="vam">添加企业</span></router-link></li>
          <li><router-link :to="{name:'UserInfo'}"  @click.native="userInfo"><i class="iconfont icon-geren vam"></i> <span class="vam">个人中心</span></router-link></li>
          <li class="text-left"><div class="__btn" @click="logout"><i class="iconfont icon-tuichu vam" style="margin-right: 3px"></i><span class="vam">退出登录</span></div></li>
        </ul>
      </m-tip>
      <div class="user-box btn hover-component animate-fadeIn" style="right: 190px;text-align: right;">
        <div class="user-box_label" @click="goMessages">
          <i class="iconfont icon-xiaoxi vam" style="font-size: 1rem"></i>
          <span class="vam user-box_msg_translate common-ground_box navtop" v-show="messages"><div class="num">{{messages}}</div></span></div>
        <div style="position: relative;width: 400px;background-color: #2f3543" v-if="false">
            <ul class="child user-message_tietle ">
            <div class="flex-space-between" style="border-bottom: 1px solid rgba(255,255,255,0.2);">
              <div class="pad-lr16">消息合</div>
              <m-btn class="pad-lr16 btn">清空</m-btn>
            </div>
            <!--<li class="flex-space-between line-50 pad-5 over-hidden" v-for="item in messages" :key="item.id">-->
              <!--<div class="line-14 text-left"><span>{{item.content}}</span></div>-->
              <!--<div class="line-0 pad-5">-->
                <!--<div class="line-20">{{item.update_time}}</div>-->
                <!--<div  class="common-ground_box navtop-msg-content line-20">-->
                  <!--<div class="num line-20">1</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</li>-->
            <div class="line-50 btn text-center theme-dft" style="display: block;">全部消息</div>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
//  import axios from '../../store/request/axios'
//  import Cookies from 'js-cookie'
  import {mapState, mapMutations, mapActions} from 'vuex'
  export default {
    data: () => ({
      user: {},
      timer: ''
    }),
    methods: {
      ...mapActions('navTop', ['getCompany', 'getMessages']),
      ...mapMutations('user', ['UPDATE', 'getPermission']),
      back () {
        this.$router.back()
      },
      logout (id) {
        let paramsId = ''
        if (!this.currentUser.cid) {
          paramsId = 0
        } else {
          paramsId = this.currentUser.cid
        }
        this.$axios.http('user_logout', {cid: paramsId}, 'post').then(d => {
          if (d.status === 0) {
            this.$axios.isLogin = false
            this.getMessages('closed')
            this.$router.replace({name: 'Login'})
          }
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
        this.UPDATE(this.$root.userinfo)
        this.$axios.token.cid = 0
      },
      changeLink (item) {
        this.$store.commit('sitepath/SET_PATH', [
          {name: 'Main', cn: '主页'},
          {cn: '企业资料'}
        ])
        this.UPDATE(item)
        this.$axios.token.cid = item.cid
      },
      messageTime () {
        this.getMessages(0)
      },
      goMessages () {
        this.$router.push({name: 'Messages'})
        this.$store.commit('sitepath/SET_PATH', [
          {name: 'Main', cn: '主页'},
          {cn: '消息'}
        ])
      },
      getUserInfo () {
//        this.$axios.http('user_info').then(d => {
//          this.$axios.isLogin = true
//          window.ROOT_DATA.userinfo = this.$root.userinfo = d.data
//          this.UPDATE(this.$root.userinfo)
//        })
//        console.log(this.$axios.token)
        if (this.$axios.token.user) {
          this.$axios.isLogin = true
          window.ROOT_DATA.userinfo = this.$root.userinfo = this.$axios.token.user
//          this.UPDATE(this.$root.userinfo)
        }
      },
      getCurrentUser () {
        if (this.$axios.token.cid) {
          this.$axios.http('company_detail', '', 'get', this.$axios.token.cid).then(d => {
            this.UPDATE(d.data[0])
            this.getTempUser()
          })
        } else {
          this.UPDATE(this.$root.userinfo)
          this.getTempUser()
        }
      },
      getTempUser () {
        console.log(this.currentUser)
        let replaceId = this.currentUser.cid || this.currentUser.id
        this.$axios.http('company_getUserTemplate', '', 'get', replaceId + '/user/' + this.$root.userinfo.id + '/detail/format/' + 0).then(d => {
          if (d.data) {
            this.getPermission(d.data)
          }
        })
      }
    },
    computed: {
      ...mapState('navTop', ['companyList', 'messages']),
      ...mapState('user', ['currentUser']),
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
        this.getUserInfo()
        this.getCompany(3)
        this.messageTime()
        this.getCurrentUser()
      }
    },
    destroyed () {
//      clearInterval(this.timer)
    },
    watch: {
      currentUser (n) {
        if (n.cid) {
          this.getTempUser()
        }
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
      .userName {
        width: 110px;
        word-wrap: break-word;
        overflow: hidden;
        white-space:nowrap;
        text-overflow:ellipsis
      }
      .head{
        /*line-height: 50px;*/
        display: inline-block;
        vertical-align: middle;
        background-size: cover;
        background-position: center;
        width:30px;
        height:30px;
    }
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
