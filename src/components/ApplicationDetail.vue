<template>
  <div class="v-appdetail">
    <div class="crumbs">
      <span class="crumbs-item">服务器</span>
      <router-link class="crumbs-item" :to="{name:'Application'}">应用</router-link>
      <span class="crumbs-item qingse-text">应用详情</span>
    </div>
    <div class="panel info-panel">
      <div class="btns-group alter-button">
        <m-btn class="comb-btn waves-effect lvse" v-if="!editor" @click.native="editorHandle">修改</m-btn>
        <m-btn class="comb-btn waves-effect lvse" v-if="editor" @click.native="submitAlter">确认</m-btn>
        <m-btn class="comb-btn waves-effect lvse" v-if="editor" @click.native="cancelAlter">取消</m-btn>
      </div>
      <div class="info-left">
        <div class="info-icon"><img class="vam" src="../assets/cluster-avatar.png" alt=""></div>
      </div>
      <div class="info-right article">
        <h5 class="qingse-text el-editor detail-title" :contenteditable="editor" @input="inpChange($event,'title')"></h5>
        <p class="time">运行状态：</p>
        <p class="time">发布时间：</p>
      </div>
    </div>
    <div class="panel-tab">
      <m-tab :labels="['服务商','合同','日志']" theme="block" :tabkey="1">
        <div>neirong1</div>
        <div>neirong2</div>
        <div>neirong3</div>
      </m-tab>
    </div>
  </div>
</template>

<script>
  import ApplicationDetailMixin from './ApplicationDetailMixin'
  export default {
    name: 'ApplicationDetail',
    mixins: [ApplicationDetailMixin]
  }
</script>
