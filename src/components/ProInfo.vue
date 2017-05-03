<template>
  <div class="v-proinfo">
    <div class="crumbs">
      <router-link class="crumbs-item" :to="{name:'Project'}">项目</router-link>
      <span class="crumbs-item qingse-text">项目详情</span>
    </div>
    <div class="panel info-panel">
      <div class="btns-group">
        <button class="comb-btn waves-effect lvse" @click="alter" v-bind:class="{ hide:toAlter }">修改</button>
        <button class="comb-btn waves-effect lvse" @click="submitAlter" v-bind:class="{ hide:altering }">确认</button>
        <button class="comb-btn waves-effect lvse" @click="cancelAlter" v-bind:class="{ hide:altering }">取消</button>
        <router-link class="comb-btn waves-effect lvse" :to="{name:'ProBuild', params: {id:1}}">构建</router-link>
        <router-link class="comb-btn waves-effect lvse" :to="{name:'ProDeploy', params: {id:1}}">部署</router-link>
      </div>
      <div class="info-left">
        <div class="info-icon"><img class="vam" src="../assets/cluster-avatar.png" alt=""></div>
      </div>
      <div class="info-right">
        <h5 class="info-title editable">项目1</h5>
        <p>状态：<span class="lvse-text">正常</span></p>
        <p>当前版本：20170807 <span class="padding-l-24">更新时间：20170807</span></p>
        <p class="info-desc editable">集群1是一个很牛逼的集群，为什么这么牛逼，我不也不知道，直觉！集群1是一个很牛逼的集群，为什么这么牛逼，我不也不知道，直觉！集群1是一个很牛逼的集群，为什么这么牛逼，我不也不知道，直觉！
          牛逼，我不也不知道，直觉！</p>
      </div>
    </div>
    <div class="panel-tab">
      <tabs :labels="['运行环境','版本管理','数据分析','日志']" theme="block">
        <div>neirong1</div>
        <div>neirong2</div>
        <div>neirong3</div>
        <div>neirong4</div>
      </tabs>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProInfo',
    methods: {
      alter () {
        this.toAlter = true
        this.altering = false
        var editable = document.getElementsByClassName('editable')
        for (var i = 0; i < editable.length; i++) {
          editable[i].contentEditable = true
          if (editable[i].tagName === 'H5') {
            this.title = editable[i].innerHTML
          }
          if (editable[i].tagName === 'P') {
            this.details = editable[i].innerHTML
          }
        }
      },
      submitAlter () {
        this.toAlter = false
        this.altering = true
        var editable = document.getElementsByClassName('editable')
        for (var i = 0; i < editable.length; i++) {
          editable[i].removeAttribute('contenteditable')
        }
      },
      cancelAlter () {
        this.toAlter = false
        this.altering = true
        var editable = document.getElementsByClassName('editable')
        for (var i = 0; i < editable.length; i++) {
          editable[i].removeAttribute('contenteditable')
          if (editable[i].tagName === 'H5') {
            editable[i].innerHTML = this.title
          }
          if (editable[i].tagName === 'P') {
            editable[i].innerHTML = this.details
          }
        }
      }
    },
    data () {
      return {
        toAlter: false,
        altering: true,
        title: '',
        details: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .info-title {
    width: 50%;
  }
</style>
