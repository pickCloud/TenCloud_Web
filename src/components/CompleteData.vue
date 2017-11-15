<template>
  <div >
    <div class="page-pad page-machine-detail" >
      <m-row :gutter="16">
        <m-col class="xs-12">
          <panel class="m-b16">
            <div class="panel-title flex-space-between" slot="title">
              <span class="bold m-r8">新建企业</span>
            </div>
            <div>
              <div class="flex-flex">
                <span class="primary_txt">{{creater}}</span>
                <span>邀请你加入</span>
                <span class="primary_txt">{{companyName}}</span>
              </div>
              <div>请先完善你的资料</div>
            <div class="personContent">
              <div class="m-b16"><input class="" placeholder="姓名" v-model="data.name"/></div>
              <div class="m-b16"><input class="" placeholder="手机号码" v-model="data.mobile"/></div>
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
        name: '',
        mobile: ''
      },
      creater: '小米',
      companyName: '十全十美'
    }),
    methods: {
      checkData () {
        let temp = this.data.mobile === '' || !(/^1[34578]\d{9}$/.test(this.data.mobile))
        if (temp) {
          this.$toast('填写正确的手机号码', 'cc')
          return false
        }
        if (!this.data.name) {
          this.$toast('请填写企业名称', 'cc')
          return false
        }
        if (!this.data.contact) {
          this.$toast('请填写联系人', 'cc')
          return false
        }
        axios.http('company_apply', this.data, 'post').then(d => {
          this.$toast('申请成功,待审核', 'cc')
        }).catch(e => {
          this.$toast(e.message, 'cc')
        })
      }
    },
    created () {
    },
    beforeDestroy () {
    }
  }
</script>

<style lang="scss">
  .personContent {
    width: 430px;
    padding: 30px;
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
