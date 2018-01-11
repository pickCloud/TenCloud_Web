<template>
  <div class='page-pad page-userinfo' style="padding: 0">
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
            <div class="lay-left" style="padding: 0">
              {{infos.mobile}}
            </div>
            <m-btn class="btn grey-dark_txt primary_bg">修改</m-btn>
          </div>
        </div>
        <div class="lay-left-right">
          <div class="lay-left lay-width-min">注册时间：</div>
          <div class="lay-right">
            <div class="lay-left" style="padding: 0">
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
              <span class="progress-bar" :class="{'progress-bar-high':infos.password_strength==='很强'||infos.password_strength==='强','progress-bar-mid':infos.password_strength==='一般','progress-bar-low':infos.password_strength==='弱'||infos.password_strength==='很弱'}" ></span>
            </div>
            <div class="userInfo-safe-tip">
              <span>安全级别:</span><span>{{infos.password_strength || '低'}}</span>
            </div>
              </div>
              <m-btn class="grey-dark_txt primary_bg btn-border-radius" @click.native="changePassword">
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
        <m-col class="xs-12 md-4 text-center m-b16">
          <div class="info-head m-b16" :style="{backgroundImage:'url('+ infos.image_url+')'}">
            <i v-if="!infos.image_url" class="iconfont icon-touxiang1 iconHead" style="font-size: 139px;"></i>
          </div>
          <div class="text-center m-b16">
            <div class="formbylabel file theme-dft" style="height: 32px; line-height: 32px;">
              <input type="file" id="a5wpj6gl9z" name="file" @change="fileChange">
              <label for="a5wpj6gl9z" class="file-label">修改头像</label>
            </div>
            <!--<m-btn class="lay-border">修改头像</m-btn>-->
          </div>
          <p><i class="icon icon-xinxi-yin m-r8"></i>仅支持JPG、PNG格式，文件小于1M</p>
        </m-col>
        <m-col class="xs-12 md-8">
          <div class="lay-left-right">
            <div class="lay-left lay-width-min">姓名：</div>
            <div class="lay-right ">
              <input type="text" class="inp-editor" :disabled="!isEditor2" :class="{'editor':isEditor2}" v-model="infos.name">
            </div>
          </div>
          <div class="lay-left-right">
            <div class="lay-left lay-width-min">是否实名：</div>
            <div class="lay-right ">
              否
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
        <m-btn class="btn primary_bg grey-dark_txt" style="margin-right: 10px" @click.native="addCompanyApply">申请加入已有企业</m-btn>
        <m-btn class="btn primary_bg grey-dark_txt" @click.native="addCompany">添加企业</m-btn>
        </div>
      </div>
    </div>
    <div class="col xs-12 userinfo-padding" v-for="item in companyAllList">
      <div class="company-item panel-onlyBg flex-space-between">
        <div class="" style="flex-grow:4;">
          <div class="flex-space-around" style="padding-left: 10px">
              <div class="flex-flex-grow-1">
                <div class="userinfo-item-up">企业名字</div>
                <div class="userinfo-item-down companyName">
                  <span>{{item.company_name}}</span>
                  <span class="position" v-if="item.is_admin">管理员</span>
                  </div>
              </div>
             <div class="flex-flex-grow-1">
               <div class="userinfo-item-up">申请时间</div>
               <div class="userinfo-item-down">{{item.create_time}}</div>
             </div>
             <div class="flex-flex-grow-1">
               <div class="userinfo-item-up">审核时间</div>
               <span class="userinfo-item-down">{{item.update_time}}</span>
             </div>
             <div class="flex-flex-grow-1">
               <div class="userinfo-item-up">状态</div>
               <span class="userinfo-item-down">{{item.status === 0?"待审核":item.status === 1?"审核通过":item.status === 2?"初创建":item.status === 3?"待加入":"审核不通过"}}</span>
             </div>
          </div>
        </div>
          <div class="flex-flex-end" style="width: 200px;padding-right: 10px">
            <div v-if="item.status === 1 ||item.status === 2">
            <!--<m-btn class="no-radius btn-github" @click.native="deleteCompany(item.cid)">解除绑定</m-btn>-->
            <m-btn v-if="" class="primary_bg grey-dark_txt" @click.native="enterCompany(item)">进入企业</m-btn>
            </div>
            <m-btn v-else-if="item.status === -1" class="primary_bg grey-dark_txt" @click.native="applyAdd(item)">重新申请</m-btn>
          </div>
      </div>
    </div>
    <div class="pop-window" v-if="pop_changePassword">
      <div class="shadow"></div>
      <changePassword class=""></changePassword>
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
  import {mapState, mapMutations, mapActions} from 'vuex'
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
        'birthday': 1502952797,
        'password_strength': 1
      },
      isEditor: false,
      isEditor2: false,
      updateing: false,
      xingbie: '-1',
      thumbFile: ''
    }),
    mixins: [DatePickerMixin],
    methods: {
      ...mapMutations('pop', ['setPopState']),
      ...mapMutations('user', ['UPDATE']),
      ...mapActions('navTop', ['getCompany']),
      enterCompany (item) {
        this.UPDATE(item)
        this.$router.push({name: 'FirmData', params: {id: item.cid}})
      },
      deleteCompany (cid) {
        axios.http('company_dismission', {id: cid}, 'post').then(d => {
          this.$toast('解除成功', 'cc')
          this.getCompany(4)
        })
      },
      addCompanyApply () {
        this.setPopState({name: 'pop_all', value: 8})
      },
      addCompany () {
        this.$router.push({name: 'FirmAdd'})
      },
      changePassword () {
        this.setPopState({name: 'pop_changePassword', value: true})
      },
      applyAdd (item) {
        this.$router.push({name: 'CompleteData', params: {id: this.infos.id}, query: {code: item.code}})
      },
      getApiData () {
        this.getCompany(4)
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
        if (this.infos.name === '') {
          this.$toast('名字不能为空', 'cc')
          return false
        }
        if (this.infos.email === '') {
          this.$toast('邮箱地址不能为空', 'cc')
          return false
        } else if (!/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.infos.email)) {
          this.$toast('邮箱格式不正确', 'cc')
          return false
        }
        if ((typeof p).toLowerCase() === 'number') p = null
        let cdata = p || this.checkChangeData()
        if (cdata === null || this.updateing) return

        this.updateing = true
        this.$axios.http('user_update', cdata, 'post').then(d => {
          this.$toast('保存成功', 'cc')
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
      getThumbToken () {
        this.$axios.http('user_thumb_token').then(d => {
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
    },
    computed: {
      ...mapState('pop', ['pop_changePassword']),
      ...mapState('navTop', ['companyAllList']),
      sex () {
        return this.infos.gender === undefined ? '' : parseInt(this.infos.gender) === 1 ? '男' : parseInt(this.infos.gender) === 2 ? '女' : ''
      },
      word () {
        let str = '低'
        switch (this.infos.password_strength) {
          case '1':
            str = '很弱'
            break
          case '2':
            str = '弱'
            break
          case '3':
            str = '一般'
            break
          case '4':
            str = '强'
            break
          case '5':
            str = '很强'
            break
          case '6':
            str = '高'
            break
        }

        return str
      }
    },
    created () {
      this.getApiData()
      this.resizeFunc = () => {
//        this.headHeigth()
//        console.log(22)
      }
//      window.addEventListener('resize', this.resizeFunc)
    },
    destroyed () {
//      window.removeEventListener('resize', this.resizeFunc)
    }
  }
</script>

<style lang="scss">
  .info-head {
    width: 139px;
    margin: 0 auto;
    border-radius: 50%;
    background-color: #1d212a;
    overflow: hidden;
    display: flex;
    align-items: center;
    line-height: 139px;width: 139px;height: 139px;
    background-size: cover;
    background-position: center;
    img {
      max-width: 100%;
      /*max-height:100%;*/
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
    &.companyName{
      /*width: 280px;*/
      /*overflow: hidden;*/
      text-overflow: ellipsis;
      white-space: nowrap;
      .position {
        font-size: 14px;
        padding:2px 3px;
        border-radius: 3px;
        border: 1px solid #4c5c77;
      }
    }

  }
  .userinfo-item-up{
    color: #556278;
    font-size: 14px;
  }
</style>
