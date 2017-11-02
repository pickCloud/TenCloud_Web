<template>
  <div class="forGetPassword-box">
    <div class="forGetPassword-form">
      <div class="forGetPassword-nav flex-space-between">
        <span>找回密码</span>
        <span> </span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data: () => ({}),
    methods: {},
    created () {
    }
  }
</script>
<style lang="scss">
  .forGetPassword-box {
    position: absolute;
    width: 820px;
    /*height:677px;*/
    left: 50%;top: 50%;
    -webkit-transform: translate(-50%,-50%);
  }
  .forGetPassword-form {
    padding: 32px 36px;
    background-color: #2f3543;
    .forGetPassword-nav{
      line-height: 50px;
      box-sizing: border-box;
      border-bottom: #464e5c 1px solid;
    }
  }
</style>
