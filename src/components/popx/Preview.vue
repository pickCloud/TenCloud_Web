<template>
  <div class="popx-preview">
    <div class="popx-preview-overfllow"></div>
    <div class="popx-preview-content">
      <div class="popx-preview-content-left">
        <img :src="popxdata.url" alt="">
      </div>
      <div class="popx-preview-content-right">
        <h6 class="m-b16">图片信息</h6>
        <div class="popx-preview-flex-box">
          <div class="popx-preview-flex-item">文件名称</div>
          <div class="popx-preview-flex-item">{{popxdata.filename}}</div>
        </div>

        <div class="popx-preview-flex-box">
          <div class="popx-preview-flex-item">文件尺寸</div>
          <div class="popx-preview-flex-item">{{popxdata.size}}</div>
        </div>

        <div class="popx-preview-flex-box">
          <div class="popx-preview-flex-item">更新时间</div>
          <div class="popx-preview-flex-item">{{popxdata.update_time}}</div>
        </div>

        <div class="popx-preview-flex-box">
          <div class="popx-preview-flex-item">所有者</div>
          <div class="popx-preview-flex-item">{{popxdata.name}}</div>
        </div>
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
    background-color: #3f4656;
  }
  .popx-preview-content-left {
    position: absolute;
    left: 0;top: 0;right: 250px;bottom: 0;
    /*background-color: #fff;*/
    img {
      position: absolute;
      max-width: 90%;
      max-height: 90%;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
    }
  }
  .popx-preview-content-right {
    position: absolute;
    right: 0;top: 0;bottom: 0;
    width: 250px;
    padding: 16px;
    background-color: #2f3543;
  }
  .popx-preview-flex-box {
    display: flex;
    align-items: flex-start;
    margin-bottom: 16px;
  }
  .popx-preview-flex-item {
    min-height: 24px;
    line-height: 24px;
    text-align: left;
    width: 135px;
    &:first-child {
      width: 79px;
    }
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
