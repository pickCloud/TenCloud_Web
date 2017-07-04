<template>
  <div class="machine-add page-pad">
    <panel title="添加主机">
      <m-row class="panel-form-list panel-body" :gutter="8">
        <m-col class="xs-12 sm-3">
          <div class="__content text-center">主机名称</div>
        </m-col>
        <m-col class="xs-12 sm-9">
          <div class="__content"><input type="text" v-model="formdata.name"></div>
        </m-col>
        <m-col class="xs-12 sm-3">
          <div class="__content text-center">IP</div>
        </m-col>
        <m-col class="xs-12 sm-9">
          <div class="__content"><input type="text" v-model="formdata.public_ip"></div>
        </m-col>
        <m-col class="xs-12 sm-3">
          <div class="__content text-center">用户名</div>
        </m-col>
        <m-col class="xs-12 sm-9">
          <div class="__content"><input type="text" v-model="formdata.username"></div>
        </m-col>
        <m-col class="xs-12 sm-3">
          <div class="__content text-center">密码</div>
        </m-col>
        <m-col class="xs-12 sm-9">
          <div class="__content"><input type="password" v-model="formdata.passwd"></div>
        </m-col>
        <m-col class="xs-12" v-if="status === 'waiting'">
          <img src="../assets/spin.gif" class="vam" alt=""> <span class="vam">等待连接 大约需要1分钟</span>
        </m-col>
        <m-col class="xs-12" v-if="status === 'error'">
          <div class="hongse-text">异常，请联系客服</div>
        </m-col>
        <m-col class="xs-12 text-center" v-if="status === 'save'">
          <m-btn class="primary_bg no-radius grey-dark_txt" @click.native="addHost">确定添加</m-btn>
        </m-col>
      </m-row>
    </panel>
  </div>
</template>

<script>
  import MachineAddMixin from './MachineAddMixin.js'
  export default {
    mixins: [MachineAddMixin]
  }
</script>
