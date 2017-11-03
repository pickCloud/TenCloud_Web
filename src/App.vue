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
</style>
