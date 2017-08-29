<template>
  <div class="popx-preview">
    <div class="popx-preview-overfllow"></div>
    <div class="popx-preview-content">
      <div class="popx-preview-content-left">a</div>
      <div class="popx-preview-content-right">
        <m-row class="popx-preview-info-item">
          <m-col class="xs-5">文件名称</m-col>
          <m-col class="xs-7">{{popxdata.filename}}</m-col>
        </m-row>
        <m-row class="popx-preview-info-item">
          <m-col class="xs-5">文件尺寸</m-col>
          <m-col class="xs-7">{{popxdata.size}}</m-col>
        </m-row>
        <m-row class="popx-preview-info-item">
          <m-col class="xs-5">更新时间</m-col>
          <m-col class="xs-7">{{popxdata.update_time}}</m-col>
        </m-row>
        <m-row class="popx-preview-info-item">
          <m-col class="xs-5">所有者</m-col>
          <m-col class="xs-7">{{popxdata.owner}}</m-col>
        </m-row>
      </div>
    </div>
    <div class="popx-preview-close" @click="close"><span class="close"></span></div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      popxdata: {
        filename: '',
        size: '',
        update_time: '',
        owner: ''
      }
    }),
    methods: {
      close () {
        this.$emit('close')
      }
    }
  }
</script>

<style lang="scss">
  .popx-preview {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
  }
  .popx-preview-overfllow {
    position: absolute;
    left: 0;top: 0;bottom: 0;right: 0;
    background-color: rgba(0,0,0,0.5);
  }
  .popx-preview-content {
    position: absolute;
    width: 90%;
    height: 90%;
    left: 5%;
    top: 5%;
    background-color: #2f3543;
  }
  .popx-preview-content-left {
    position: absolute;
    left: 0;top: 0;right: 250px;bottom: 0;
    background-color: #fff;
  }
  .popx-preview-content-right {
    position: absolute;
    right: 0;top: 0;bottom: 0;
    width: 250px;
    padding: 16px;
    background-color: #3f4656;
  }
  .popx-preview-info-item {
    margin: 16px 0;
    .xs-7 {
      word-break:break-all;
    }
  }
  .popx-preview-close {
    position: absolute;
    right: calc(5% - 40px);
    top: 5%;
    width: 30px;height: 30px;
    background-color: #2f3543;
    cursor: pointer;
    &:hover {
      .close {
        transform: rotate(180deg);
      }
    }
    .close {
      left: 5px;top: 5px;
      transition: all 0.2s;
    }
  }
</style>
