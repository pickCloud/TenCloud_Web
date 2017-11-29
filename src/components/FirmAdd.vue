<template>
  <div >
    <div class="page-pad page-machine-detail" >
      <m-row :gutter="16">
        <m-col class="xs-12">
          <panel class="m-b16" >
            <div class="panel-title flex-space-between" slot="title">
              <span class="bold m-r8">新建企业</span>
            </div>
            <div class="firmContent">
              <div class="m-b16"><input class="" placeholder="企业名称" v-model="data.name"/></div>
              <div class="m-b16"><input class="" placeholder="联系人" v-model="data.contact"/></div>
              <div class="m-b16"><input class="" placeholder="手机号码" v-model="data.mobile"/></div>
              <m-btn class="btn primary_bg grey-dark_txt" :hsize="50" @click.native="checkData">提交</m-btn>
            </div>

          </panel>
        </m-col>

      </m-row>
    </div>
  </div>
</template>

<script>
  import FirmAddMixin from './FirmAddMixin'
  export default {
    mixins: [FirmAddMixin]
  }
</script>

<style lang="scss">
  .firmContent {
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
