<template>
  <div class="v-prodetail">
    <div class="crumbs">
      <router-link :to="{name:'Project'}" class="crumbs-item">项目</router-link>
      <span class="crumbs-item qingse-text">项目详情</span>
    </div>
    <div class="panel info-panel">
      <div class="btns-group alter-button">
        <m-btn class="comb-btn waves-effect lvse" v-if="!editor" @click.native="editorHandle">修改</m-btn>
        <m-btn class="comb-btn waves-effect lvse" v-if="editor" @click.native="submitAlter">确认</m-btn>
        <m-btn class="comb-btn waves-effect lvse" v-if="editor" @click.native="cancelAlter">取消</m-btn>
        <m-btn class="comb-btn waves-effect lvse">构建</m-btn>
        <m-btn class="comb-btn waves-effect lvse">部署</m-btn>
      </div>
      <div class="info-left">
        <div class="info-icon">
          <img class="vam" src="../assets/cover.png" alt="">
        </div>
      </div>
      <div class="info-right article">
        <h5 class="qingse-text el-editor detail-title" :contenteditable="editor" @input="inpChange($event,'title')">{{prodata.name}}</h5>
        <p>代码源</p>
        <p>创建时间</p>
        <!--<p>更新时间</p>-->
        <p class="el-editor" :contenteditable="editor" @input="inpChange($event,'description')">{{ prodata.description }}</p>
      </div>
    </div>
    <div class="panel-tab">
      <m-tab :labels="['运行环境','版本管理','数据分析', '日志']" type="block" :tabkey="0">
        <div>运行环境</div>
        <div>版本管理</div>
        <div>数据分析</div>
        <div>日志</div>
      </m-tab>
    </div>
  </div>
</template>

<script>
  import ProDetailMixin from './ProDetailMixin.js'
  export default {
    name: 'ProDetail',
    mixins: [ProDetailMixin]
  }
</script>
