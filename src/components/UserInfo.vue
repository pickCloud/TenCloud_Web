<template>
  <div class='page-pad page-userinfo'>
    <panel class='m-b16' title='账号安全'>
      <div class="p-16">
        <div class="lay-left-right">
          <div class="lay-left">账号</div>
          <div class="lay-right">{{infos.name}}</div>
        </div>
        <div class="lay-left-right">
          <div class="lay-left">手机号码</div>
          <div class="lay-right lay-border">{{infos.mobile}}</div>
        </div>
        <div class="lay-left-right">
          <div class="lay-left">邮箱</div>
          <div class="lay-right">{{infos.email}}</div>
        </div>
      </div>
    </panel>
    <panel title='基本信息'>
      <m-row class="p-16" :gutter="16">
        <m-col class="xs-12 md-4 text-center m-b16">
          <div class="info-head">
            <img :src="infos.image_url" alt="">
          </div>
        </m-col>
        <m-col class="xs-12 md-8">
          <div class="lay-left-right">
            <div class="lay-left">姓名</div>
            <div class="lay-right lay-bg">{{infos.name}}</div>
          </div>
        </m-col>
      </m-row>
    </panel>
  </div>
</template>

<script>
  export default {
    data: () => ({
      infos: {
        'id': 1,
        'name': '',
        'mobile': '',
        'email': '',
        'image_url': ''
      }
    }),
    methods: {
      getApiData () {
        this.$Global.async('user_info').getData(null).then(d => {
          this.infos = d.data
        })
      }
    },
    created () {
      this.getApiData()
    }
  }
</script>

<style lang="scss">
  .info-head {
    width: 50%;
    margin: 0 auto;
    img {
      width: 100%;
      border-radius: 50%;
    }
  }
</style>
