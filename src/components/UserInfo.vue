<template>
  <div class='page-pad page-userinfo'>
    <panel class='m-b16'>
      <div class="panel-title" slot="title">
        账号安全
        <m-btn class="right primary_bg grey-dark_txt m-t04" v-if="!isEditor" @click.native="editorHandle">修改</m-btn>
        <m-btn class="right primary_bg grey-dark_txt m-t04" v-if="isEditor" @click.native="cancelHandle">取消</m-btn>
        <m-btn class="right primary_bg grey-dark_txt m-t04 m-r8" v-if="isEditor" @click.native="sureHandle">保存</m-btn>
      </div>
      <div class="p-16">
        <!--<div class="lay-left-right">-->
          <!--<div class="lay-left">账号</div>-->
          <!--<div class="lay-right lay-border-bottom">-->
            <!--<input type="text" class="inp-editor" :class="{'editor':isEditor}" v-model="infos.name">-->
          <!--</div>-->
        <!--</div>-->
        <div class="lay-left-right">
          <div class="lay-left">手机号码</div>
          <div class="lay-right lay-border-bottom">
            {{infos.mobile}}
          </div>
        </div>
        <div class="lay-left-right">
          <div class="lay-left">邮箱</div>
          <div class="lay-right lay-border-bottom">
            <input type="email" class="inp-editor" :class="{'editor':isEditor}" v-model="infos.email">
          </div>
        </div>
      </div>
    </panel>
    <panel title='基本信息'>
      <m-row class="p-16" :gutter="16">
        <m-col class="xs-12 md-4 text-center m-b16">
          <div class="info-head m-b16">
            <img :src="infos.image_url" alt="" v-if="infos.image_url">
          </div>
          <div class="text-center m-b16">
            <div class="formbylabel file theme-dft" style="height: 32px; line-height: 32px;">
              <input type="file" id="a5wpj6gl9z" name="file" @change="fileChange">
              <label for="a5wpj6gl9z" class="file-label">修改头像</label>
            </div>
            <!--<m-btn class="lay-border">修改头像</m-btn>-->
          </div>
          <p><i class="icon icon-xinxi-yin m-r8"></i>仅支持JPG、PNG格式，文件小于1M（方形图）</p>
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
  import * as Qiniu from '../Qiniu'
  export default {
    data: () => ({
      infos: {
        'id': 1,
        'name': '',
        'mobile': '',
        'email': '',
        'image_url': ''
      },
      isEditor: false,
      updateing: false,
      thumbFile: ''
    }),
    watch: {
      isEditor (n, o) {
        this.changeInpState(n)
      }
    },
    methods: {
      getApiData () {
        this.$Global.async('user_info', true).getData(null).then(d => {
          this.infos = d.data
        })
      },
      changeInpState (n) {
        this.$el.querySelectorAll('.inp-editor').forEach((v, i) => {
          if (!n) v.setAttribute('disabled', true)
          else v.removeAttribute('disabled')
        })
      },
      cancelHandle () {
        this.isEditor = false
        this.infos = JSON.parse(this.temp_data)
      },
      editorHandle () {
        this.isEditor = true
        this.temp_data = JSON.stringify(this.infos)
      },
      checkChangeData () {
        const old = JSON.parse(this.temp_data)
        let result = null
        for (let key in this.infos) {
          let ov = old[key]
          let nv = this.infos[key]
          if (nv !== ov) {
            if (result === null) result = {}
            result[key] = nv
          }
        }
        return result
      },
      sureHandle (data = null) {
        let cdata = data || this.checkChangeData()
        if (cdata === null || this.updateing) return

        this.updateing = true
        this.$Global.async('user_update', true).getData(cdata).then(d => {
          this.$toast(d.message, 'cc')
          this.isEditor = false
          this.updateing = false
          this.getApiData()
          if (this.confirm) {
            this.confirm.actionPopper(false)
            this.confirm = null
          }
        })
      },
      headHeigth () {
        const headel = this.$el.querySelector('.info-head')
        headel.style.height = headel.clientWidth + 'px'
      },
      getThumbToken () {
        this.$Global.async('user_thumb_token', true).getData(null).then(d => {
          Qiniu.upload(this.thumbFile, d.data.token).then(d => {
            this.sureHandle({image_url: d.key})
          })
        })
      },
      fileChange (e) {
        if (e.target.value === '') return
        const h = this.$createElement
        this.confirm = this.$confirm({
          content: h('div', null, [
            h('span', {attrs: {class: 'vam'}}, '上传中'),
            h('div', {attrs: {class: 'vam spinner'}}, [
              h('div', {attrs: {class: 'bounce1'}}),
              h('div', {attrs: {class: 'bounce2'}}),
              h('div', {attrs: {class: 'bounce3'}})
            ])
          ]),
          themeClass: 'msg-upload',
          hasClose: false,
          maskClose: false,
          buttons: []
        })
        this.thumbFile = e.target.files[0]
        this.getThumbToken()
      }
    },
    mounted () {
      this.changeInpState(false)
      this.headHeigth()
    },
    created () {
      this.getApiData()
      this.resizeFunc = () => {
        this.headHeigth()
//        console.log(22)
      }
      window.addEventListener('resize', this.resizeFunc)
    },
    destroyed () {
      window.removeEventListener('resize', this.resizeFunc)
    }
  }
</script>

<style lang="scss">
  .info-head {
    width: 50%;
    margin: 0 auto;
    border-radius: 50%;
    background-color: #1d212a;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
</style>
