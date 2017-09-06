<template>
  <div class="popx-preview">
    <div class="popx-preview-overfllow"></div>
    <div class="popx-preview-content">
      <div class="popx-preview-content-left">
        <div class="popx-preview-imgbox">
          <img :src="popxdata.url" alt="">
          <div class="popx-preview-img-prev"></div>
          <div class="popx-preview-img-next"></div>
          <div class="popx-preview-ctrls">
            <m-btn>复制URL</m-btn>
            <m-btn>下载</m-btn>
            <m-btn>删除</m-btn>
          </div>
        </div>
        <swiper class="popx-preview-thumbs" :options="swiperOption">
          <swiper-slide>I'm Slide 1</swiper-slide>
          <swiper-slide>I'm Slide 2</swiper-slide>
          <swiper-slide>I'm Slide 3</swiper-slide>
          <swiper-slide>I'm Slide 4</swiper-slide>
          <swiper-slide>I'm Slide 5</swiper-slide>
          <swiper-slide>I'm Slide 6</swiper-slide>
          <swiper-slide>I'm Slide 7</swiper-slide>
          <swiper-slide>I'm Slide 7</swiper-slide>
          <swiper-slide>I'm Slide 7</swiper-slide>
          <swiper-slide>I'm Slide 7</swiper-slide>
          <swiper-slide>I'm Slide 7</swiper-slide>
          <swiper-slide>I'm Slide 7</swiper-slide>
          <swiper-slide>I'm Slide 7</swiper-slide>
          <swiper-slide>I'm Slide 7</swiper-slide>
        </swiper>
        <div class="popx-swiper-btn popx-swiper-prev"></div>
        <div class="popx-swiper-btn popx-swiper-next"></div>
      </div>
      <div class="popx-preview-content-right">
        <div class="m-b16">图片信息</div>
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
      },
      notNextTick: true,
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 16,
        nextButton: '.popx-swiper-next',
        prevButton: '.popx-swiper-prev'
      }
    }),
    methods: {
      close () {
        this.$emit('close')
      },
      swiperChange (p) {
        console.log(this.swiperSlides)
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
  .popx-preview-imgbox {
    position: absolute;
    left: 0;top: 0;right: 0;
    height: calc(100% - 110px);
    img {
      position: absolute;
      max-width: 90%;
      max-height: 90%;
      left: 50%;
      top: calc(50% - 20px);
      transform: translate(-50%,-50%);
    }
  }
  .popx-preview-img-prev {
    position: absolute;
    left: 0;top: calc(50% - 32px);
    width: 40px;height: 65px;
    background: url("../../assets/b-prev.png") no-repeat;
    cursor: pointer;
  }
  .popx-preview-img-next {
    position: absolute;
    right: 0;top: calc(50% - 32px);
    width: 40px;height: 65px;
    background: url("../../assets/b-next.png") no-repeat;
    cursor: pointer;
  }
  .popx-preview-ctrls {
    position: absolute;
    left: 0;right: 0;bottom: 0;
    height: 40px;line-height: 40px;
    background-color: #262A35;
    text-align: center;
  }
  .popx-preview-thumbs {
    position: absolute;
    left:56px;right: 56px;bottom: 0;
    height: 110px;
    .swiper-slide {
      background-color: #262A35;
      height: 72px;
      width: 72px;
      align-self: center;
    }
  }
  .popx-swiper-btn {
    position: absolute;
    width: 16px;
    height: 110px;
    bottom: 0;
    cursor: pointer;
  }
  .popx-swiper-prev {
    left: 16px;
    background: url("../../assets/prev.png") 50% 50% no-repeat;
  }
  .popx-swiper-next {
    right: 16px;
    background: url("../../assets/next.png") 50% 50% no-repeat;
  }
  .popx-preview-content-left {
    position: absolute;
    left: 0;top: 0;right: 250px;bottom: 0;
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
