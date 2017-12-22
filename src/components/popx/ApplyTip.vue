<template>
    <div class="p-16">
      <div class="p-b16">
      <span>你好</span><span class="primary_txt">现在不能个人申请加入,需要管理员邀请</span>
      </div>
      <div class="p-b16">邀请流程</div>
      <div class="p-16">
      <img src="../../../static/img/tip2.png" style="margin: 0 auto;display: block"/>
      </div>
    </div>
</template>

<script>
  export default {
    data: () => ({
      item: {
        id: '',
        url: '',
        isCopy: false
      },
      company_name: ''
    }),
    methods: {
    },
    created () {
    },
    computed: {
    }
  }
</script>

<style lang="scss">
  .share{
    width: 500px;
    height: 115px;
    margin: 0 auto;
    .box{
      width: 500px;
      height: 115px;
      border-radius: 5px;
    }
  }
</style>
