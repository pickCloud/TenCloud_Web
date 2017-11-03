<template>
  <div class='page-pad page-userinfo'>
    <div class="col xs-12 lg-6 userinfo-padding">
    <panel class=''>
      <div class="panel-title" slot="title" >
        账号安全
        <!--<m-btn class="right primary_bg grey-dark_txt m-t04" v-if="!isEditor" @click.native="editorHandle(0)">修改</m-btn>-->
        <!--<m-btn class="right primary_bg grey-dark_txt m-t04" v-if="isEditor" @click.native="cancelHandle(0)">取消</m-btn>-->
        <!--<m-btn class="right primary_bg grey-dark_txt m-t04 m-r8" v-if="isEditor" @click.native="sureHandle(0)">保存</m-btn>-->
      </div>
      <div class="p-16" style="height: 322px;">
        <!--<div class="lay-left-right">-->
          <!--<div class="lay-left">账号</div>-->
          <!--<div clasFs="lay-right ">-->
            <!--<input type="text" class="inp-editor" :class="{'editor':isEditor}" v-model="infos.name">-->
          <!--</div>-->
        <!--</div>-->
        <div class="lay-left-right">
            <div class="lay-left lay-width-min">手机号码：</div>
          <div class="lay-right flex-space-between">
            <div class="lay-left">
              {{infos.mobile}}
            </div>
            <m-btn class="btn grey-dark_txt primary_bg">修改</m-btn>
          </div>
        </div>
        <div class="lay-left-right">
          <div class="lay-left lay-width-min">注册时间：</div>
          <div class="lay-right">
            <div class="lay-left">
              2017.11.3
            </div>
          </div>
        </div>
        <div class="lay-left-right">
          <div class="lay-left lay-width-min">账号安全：</div>
          <div class="lay-right">
            <div class="flex-space-between">
              <div class="flex-space-between">
             <div class="userInfo-safeLine">
              <span class="progress-bar progress-bar-high"></span>
            </div>
            <div class="userInfo-safe-tip">
              <span>安全级别:</span><span>低</span>
            </div>
              </div>
              <m-btn class="grey-dark_txt primary_bg btn-border-radius">
                修改
              </m-btn>
            </div>
          </div>
        </div>
      </div>
    </panel>
    </div>
    <div class="col xs-12 lg-6 userinfo-padding">
    <panel>
      <div class="panel-title" slot="title">
        基本信息
        <m-btn class="right primary_bg grey-dark_txt m-t04" v-if="!isEditor2" @click.native="editorHandle(1)">修改</m-btn>
        <m-btn class="right primary_bg grey-dark_txt m-t04" v-if="isEditor2" @click.native="cancelHandle(1)">取消</m-btn>
        <m-btn class="right primary_bg grey-dark_txt m-t04 m-r8" v-if="isEditor2" @click.native="sureHandle(1)">保存</m-btn>
      </div>
      <m-row class="p-16" :gutter="16">
        <m-col class="xs-12 md-3 text-center m-b16">
          <div class="info-head m-b16" style="line-height: 139px">
            <img :src="infos.image_url" alt="" v-if="infos.image_url">
            <i v-else="" class="iconfont icon-touxiang1 iconHead" style="font-size: 139px;"></i>
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
        <m-col class="xs-12 md-9">
          <div class="lay-left-right">
            <div class="lay-left lay-width-min">姓名：</div>
            <div class="lay-right ">
              <input type="text" class="inp-editor" :disabled="!isEditor2" :class="{'editor':isEditor2}" v-model="infos.name">
            </div>
          </div>
          <div class="lay-left-right">
            <div class="lay-left lay-width-min">是否实名：</div>
            <div class="lay-right ">
              是
            </div>
          </div>
          <div class="lay-left-right">
            <div class="lay-left lay-width-min">邮箱：</div>
            <div class="lay-right ">
              <input type="email" class="inp-editor" :disabled="!isEditor2" :class="{'editor':isEditor2}" v-model="infos.email">
            </div>
          </div>
          <div class="lay-left-right">
            <div class="lay-left lay-width-min">性别：</div>
            <div class="lay-right ">
              <span v-if="!isEditor2">{{sex}}</span>
              <span v-else>
                <m-radio v-model="xingbie" class="m-r8" :data="{label:'男', value:'1'}"></m-radio>
                <m-radio v-model="xingbie" :data="{label:'女', value:'2'}"></m-radio>
              </span>
            </div>
          </div>

          <div class="lay-left-right">
            <div class="lay-left lay-width-min">生日</div>
            <div class="lay-right ">
              <span v-if="!isEditor2">{{date.time}}</span>
              <span v-else>
                <datepicker :date="date" :option="dateop"></datepicker>
              </span>
            </div>
          </div>
        </m-col>
      </m-row>
    </panel>
    </div>
    <div class="col xs-12">
      <div class="lay-left-right userinfo-padding">
        <div style="display: flex;justify-content: flex-end">
        <m-btn class="btn primary_bg grey-dark_txt" style="margin-right: 10px">申请加入已有企业</m-btn>
        <m-btn class="btn primary_bg grey-dark_txt">添加企业</m-btn>
        </div>
      </div>
    </div>
    <div class="col xs-12 userinfo-padding">
      <div class="company-item panel-onlyBg flex-space-between">
        <div class="" style="flex-grow:4;">
         <div class="flex-space-around" style="padding-left: 10px">
          <div class="flex-flex-grow-1">
            <div class="userinfo-item-up">企业名字</div>
            <span class="userinfo-item-down">十全十美网络有限公司</span>
          </div>
           <div class="flex-flex-grow-1">
             <div class="userinfo-item-up">申请时间</div>
             <div class="userinfo-item-down">2017.09.31</div>
           </div>
           <div class="flex-flex-grow-1">
             <div class="userinfo-item-up">审核时间</div>
             <span class="userinfo-item-down">2017.10.10</span>
           </div>
           <div class="flex-flex-grow-1">
             <div class="userinfo-item-up">状态</div>
             <span class="userinfo-item-down">审核部通过</span>
           </div>
          </div>
        </div>
          <div class="flex-flex-end" style="flex-grow:1;padding-right: 10px">
            <m-btn class="no-radius btn-github">解除绑定</m-btn>
            <m-btn class="primary_bg grey-dark_txt">进入企业</m-btn>
          </div>
      </div>
    </div>
    <div class="popx-new">
      <div class="shadow"></div>
      <div class=""></div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'
  import * as Qiniu from '../Qiniu'
  import DatePickerMixin from './DatePickerMixins'
  import Panel from './piece/panel/Main.vue'
  import axios from '../store/request/axios'
  import changePassword from '../components/popx/changePassword.vue'
  export default {
    components: {Panel, changePassword},
    data: () => ({
      infos: {
        'id': 1,
        'name': '',
        'mobile': '',
        'email': '',
        'image_url': '',
        'gender': 0,
        'birthday': 1502952797
      },
      isEditor: false,
      isEditor2: false,
      updateing: false,
      xingbie: '-1',
      thumbFile: ''
    }),
    mixins: [DatePickerMixin],
    methods: {
      getApiData () {
        axios.http('user_info', true).then(d => {
          this.$root.userinfo = this.infos = d.data
          if (this.infos.birthday !== undefined) this.date.time = moment.unix(this.infos.birthday).format('YYYY-MM-DD')
          if (this.infos.gender !== undefined) this.xingbie = this.infos.gender + ''
        })
      },
      cancelHandle (p) {
        switch (p) {
          case 0:
            this.isEditor = false
            break
          case 1:
            this.isEditor2 = false
            break
        }
        this.$root.userinfo = this.infos = JSON.parse(this.temp_data)
        if (this.infos.gender !== undefined) this.xingbie = this.infos.gender + ''
        else this.xingbie = '-1'
        if (this.infos.birthday !== undefined) this.date.time = moment.unix(this.infos.birthday).format('YYYY-MM-DD')
        else this.date.time = ''
      },
      editorHandle (p) {
        switch (p) {
          case 0:
            this.isEditor = true
            break
          case 1:
            this.isEditor2 = true
            break
        }
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
        if (result === null) result = {}
        let tempxb = parseInt(this.xingbie)
        if (this.infos.gender !== undefined && parseInt(this.infos.gender) !== tempxb) result['gender'] = tempxb
        if (this.infos.gender === undefined && tempxb !== -1) result['gender'] = tempxb
        let tempbd = moment(this.date.time).unix()
        if (this.infos.birthday !== undefined && parseInt(this.infos.birthday) !== tempbd) result['birthday'] = tempbd
        if (!this.infos.birthday === undefined && this.date.time !== '') result['birthday'] = tempbd
        return result
      },
      sureHandle (p) {
        if ((typeof p).toLowerCase() === 'number') p = null
        let cdata = p || this.checkChangeData()
        if (cdata === null || this.updateing) return

        this.updateing = true
        this.$Global.async('user_update', true).getData(cdata).then(d => {
          this.$toast(d.message, 'cc')
          this.isEditor = false
          this.isEditor2 = false
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
        let fontIcon = this.$el.querySelector('.iconHead')
        fontIcon.style.fontSize = headel.clientWidth + 'px'
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
      },
      resetmobile () {
      }
    },
    mounted () {
      this.headHeigth()
    },
    computed: {
      sex () {
        return this.infos.gender === undefined ? '' : parseInt(this.infos.gender) === 1 ? '男' : '女'
      }
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
    display: flex;
    align-items: center;
    img {
      max-width: 100%;
      max-height:100%;
    }
  }
  .userinfo-padding{
    padding:8px 8px;
  }
  .userInfo-safeLine{
    border-radius: 5px;
    margin: 0 5px 0 0;
    width: 105px;
    height: 20px;
    background-color: #171a21;
    overflow: hidden;
    .progress-bar{
      float: left;
      width: 0%;
      height: 20px;
      background-color: #f04134;
      transition: width 0.6s ease;
    }
    .progress-bar-low{
     width: 33%;
     background-color: #f04134;
    }
    .progress-bar-mid{
        width: 66%;
        background-color: #F7B824;
      }
    .progress-bar-high{
      width: 100%;
      background-color: green;
    }
    }
    .company-item{
      width:100%;
      height: 96px;
    }
  .userinfo-item-down{
    color: #899ab6;
    font-size: 18px;
  }
  .userinfo-item-up{
    color: #556278;
    font-size: 14px;
  }
</style>
