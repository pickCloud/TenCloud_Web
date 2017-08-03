<template>
  <nav class="app-top" :class="[miniClass]">
    <aside class="lay-aside left">
      <span class="_logo vam"><router-link :to="{name:'Main'}"><span class="show-lay-mini">CO</span><span class="hide-lay-mini">Console</span></router-link></span>
      <!--<span class="_cndesc vam right hide-mini">控制台</span>-->
    </aside>
    <div class="lay-body" v-if="!$parent.TD">
      <m-btn @click.native="back" v-if="hasBack"><i class="icon icon-return"></i></m-btn>
      <m-tip class="user-box" has-arrow popperMouse>
        <div slot="label" class="user-box_label"><i class="icon icon-user vam"></i></div>
        <ul slot="popper">
          <li><router-link :to="{name:'UserInfo'}"><i class="icon icon-ziliao vam"></i> <span class="vam">查看资料</span></router-link></li>
          <li class="text-center"><div class="__btn" @click="logout">退出登录</div></li>
        </ul>
      </m-tip>
    </div>
  </nav>
</template>

<script>
  export default {
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
      }
    },
    computed: {
      miniClass () {
        return this.$parent.isMini ? 'lay-mini' : ''
      },
      hasBack () {
        return true
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
  }
</style>
