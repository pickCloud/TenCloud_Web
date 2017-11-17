<template>
  <div >
    <div class="page-pad page-machine-detail" >
      <m-row :gutter="16">
        <m-col class="xs-12">
          <panel class="m-b16">
            <div class="panel-title flex-space-between" slot="title">
              <span class="bold m-r8">完善资料</span>
            </div>
            <div class="p-16">
              <div class="flex-flex">
                <span class="primary_txt">{{data.contact }} </span>
                <span>邀请你加入</span>
                <span class="primary_txt"> {{ data.company_name}}</span>
              </div>
              <div>请先完善你的资料</div>
            <div class="personContent">
              <div class="m-b16"><input class="" placeholder="姓名" v-model="personData.name"/></div>
              <div class="m-b16"><input class="" placeholder="手机号码" v-model="personData.mobile"/></div>
              <m-btn class="btn primary_bg grey-dark_txt" :hsize="50" @click.native="checkData">提交</m-btn>
            </div>
            </div>
          </panel>
        </m-col>

      </m-row>
    </div>
  </div>
</template>

<script>
  import axios from '../store/request/axios'
  export default {
    data: () => ({
      data: {
        cid: 2,
        company_name: '',
        contact: '',
        setting: ''
      },
      personData: {
        id_card: '',
        code: '',
        name: '',
        mobile: ''
      }
    }),
    methods: {
      checkData () {
        let temp = this.personData.mobile === '' || !(/^1[34578]\d{9}$/.test(this.personData.mobile))
        if (temp) {
          this.$toast('请填写正确的手机号码', 'cc')
          return false
        }
        if (!this.personData.name) {
          this.$toast('请填写企业名称', 'cc')
          return false
        }
        if (!this.personData.name) {
          this.$toast('请填写联系人', 'cc')
          return false
        }
        axios.http('company_apply', this.personData, 'post').then(d => {
          this.$toast('申请成功,待审核', 'cc')
        }).catch(e => {
          this.$toast(e.message, 'cc')
        })
      }
    },
    created () {
      this.personData.code = this.$route.query.code
      axios.http('company_code', '', 'get', '?code=' + this.$route.query.code).then(d => {
        this.data = d.data
      }).catch(e => {

      })
    },
    beforeDestroy () {
    }
  }
</script>

<style lang="scss">
  .personContent {
    width: 430px;
    padding: 16px 0;
    input{
      border: #2f3543 1px solid;
      outline:none;
      width: 100%;
      padding: 10px;
      border-radius: 5px;
      background-color: transparent;
      color: #7f8da4;
      &:focus{
        border: #7f8da4 1px solid;
      }
    }
    .btn{
      width: 100%;
    }
  }
</style>
