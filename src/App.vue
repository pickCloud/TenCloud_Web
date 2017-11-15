<template>
  <router-view></router-view>
</template>

<!--<script>-->
  <!--import AppMixin from './AppMixin.js'-->
  <!--export default {-->
    <!--name: 'app',-->
    <!--mixins: [AppMixin]-->
  <!--}-->
<!--</script>-->
<style lang="scss">
  // 2017.9.19修改input checkbox大小
  .theme-dft.label-inp-group .__icon{
    width: 12px!important;
    height:12px!important;
  }
  .flex-space-between{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .flex-flex-end{
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .flex-flex{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .btn-border-radius{
    border-radius: 6px;
  }
  .lay-width-min{
    width: 90px!important;
    padding: 0 0 0 16px!important;
  }
  .panel-onlyBg{
    background-color: #262a35;
  }
  .flex-space-around{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .flex-flex-grow-1{
    flex-basis:300px;
  }
  .shadow{
    background-color: #000 ;
    opacity:0.5;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .pop-window{
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right:0;
    bottom: 0;
  }
  .popx-new {
    position: fixed;
    width: 100%;height: 100%;
    left: 0;top: 0;
    z-index: 99999;
  }
  .popx-new-cont {
    position: absolute;
    width: 500px;
    height: 290px;
    left: 50%;
    top: 50%;
    margin-left: -250px;
    margin-top: -145px;
    z-index: 1;
  }
  .popx-new-title {
    position: relative;
    height: 50px;
    line-height: 50px;
    background-color: #262a35;
    font-size: 0.9rem;
    .close {
      top: 14px;
      right: 16px;
      cursor: pointer;
      transition: all 0.5s;
      &:hover {
        transform: rotate(180deg);
      }
    }
  }
  .popx-new-body {
    background-color: #404655;
    height: 240px;
    input {
      border: 1px solid rgba(255,255,255,0.2);
      background: none;
      display: inline-block;
      width: 468px;
      margin-top: 50px;
      padding: 16px;
      color: #7f8da4;
    }
    .cancel_btn {
      border: 1px solid rgba(255,255,255,0.2);
      padding: 0 16px;
    }
  }
  .popx-new-overflow {
    position: absolute;
    width: 100%;height: 100%;
    left: 0;top: 0;
    background-color: rgba(0,0,0,0.8);
  }
  //login scss
  .login-form_inp {
    position: relative;
    input {
      background-color: transparent;
      border:1px solid #464e5c;
      color: #6a778d;
      display: block;
      height: 50px;
      width: 100%;
      line-height: 50px;
      padding: 0 16px;
    }
    .btn {
      position: absolute;
      right: 16px;
      top: 10px;
      background-color: #262a35;
      padding: 4px 8px!important;
    }
    .iconfont {
      font-size: 1rem;
      position: absolute;
      right: 16px;
      top: 14px;
    }
  }
  .login-form_sure {
    display: block;
    width: 100%;
    background-color: #48bbc0;
    text-align: center;
    color: #05484b;
    font-weight: bold;
    &:hover {
      color: #fff!important;
    }
  }
  .login-tip {
    padding: 0 16px;
    height: 50px;
    line-height: 50px;
    border: 1px solid transparent;
    .iconfont {
      font-size: 1rem;
    }
    &.error {
      color: #f15532;
      background-color: #feeeeb;
      border-color: currentColor;
    }
  }
  .page-login {
    position: fixed;
    left: 0;top: 0;
    width: 100%;height: 100%;
    background: url("../static/img/login_bg.jpg") center;
    background-size: cover;
  }
  .common-ground_box{
    position: relative;
    color: black;
    line-height:40px;
    display:flex;
    color: #478388;
    overflow: hidden;
    &:before{
      position: absolute;
      left: 0px;
      top: 13px;
      content: ' ';
      background-color: #478388;
      border-radius: 50%;
      color: black;
      width: 14px;
      height: 14px;
    }
    &.nobefore:before{
      opacity: 0;
    }
    .num{
      position: relative;
      width: 14px;
      text-align: center;
      color: black;
    }
    .num-tip{
      margin-left: 5px;
    }
  }
  .pad-lr16{
    padding: 0 16px;
  }
  .pad-lr8{
    padding: 0 8px;
  }
  .pad-5{
    padding: 5px;
  }
  .line-14{
    line-height: 18px;
  }
  .over-hidden{
    overflow: hidden;
  }
  .flex-table{
      display: flex;
    flex-wrap: wrap;
    .tr{
      padding: 14px 16px;
      display: flex;
      overflow: hidden;
      .td{
        display: flex;
      }
    }
  }
  //弹框样式
  .pop-box {
    position: absolute;
    width: 820px;
    /*height:677px;*/
    left: 50%;top: 50%;
    -webkit-transform: translate(-50%,-50%);
    background-color: #262a35;
    .panel{
      background-color: #2f3543;
    }
  }
  .pop-form {
    /*padding: 16px 36px;*/
    /*background-color: #262a35;*/
    .pop-nav{
      line-height: 50px;
    }
  }
  .border-bottom-1px{
    position:relative;
    &:before{
      content: " ";
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 1px;
      border-top: 1px solid #464e5c;
      color: #464e5c;
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
      transform: scaleY(0.5);
    }
  }
  .pop-status{
    width: 100%;
    line-height: 50px;
    .number-content {
      position: relative;
      line-height: 50px;
      display: flex;
      .num{
        position: relative;
        width: 45px;
        text-align: center;
      }
      &:before{
        position: absolute;
        content: " " ;
        top:11px;
        left:9px;
        width:26px;
        height: 26px;
        transform:rotate(45deg);
        background-color: #2b2f3a;
        border-radius: 5px;
      }
      &.active .num{
        color: #2b2f3a;
      }
      &.active .num-tip{
        color: #56d1e2;
      }
      &.active:before{
        background-color: #56d1e2;
      }
    }
    .number-line{
      position: relative;
      &:before {
        position: absolute;
        content: ' ';
        height: 2px;
        width: 180px;
        background-color:#2b2f3a ;
      }
      &.long{
        width: 180px;
      }
      &.short{
        width: 120px;
      }
    }

  }
  .pop-input-box{
    width: 500px;
    margin: auto;
  }
  .pop-success-tip{
    text-align: center;
    line-height: 50px;
    padding: 50px 0;
  }
  .pop-box{
    .close {
      /*top: 14px;*/
      /*right: 16px;*/
      cursor: pointer;
      transition: all 0.5s;
      position: relative;
      &:hover {
        transform: rotate(180deg);
      }
    }
  }
</style>
