<template>
  <div class="popx-preview">
    <div class="popx-preview-overfllow"></div>
    <div class="popx-preview-content">
      <div class="popx-preview-content-left">
        <div class="popx-preview-imgbox">
          <img :src="prevdata.url" alt="">
          <div class="popx-preview-img-prev" @click="previewChange(-1)"></div>
          <div class="popx-preview-img-next" @click="previewChange(1)"></div>
          <div class="popx-preview-ctrls">
            <m-btn class="primary_txt" :data-text="prevdata.url" :data-params="prevdata.id" v-clipboard="clipboard">复制URL</m-btn>
            <m-btn class="primary_txt" @click.native="downFile(prevdata.id)">下载</m-btn>
            <m-btn class="pink_txt" @click.native="delFile(prevdata.id)">删除</m-btn>
          </div>
        </div>
        <swiper class="popx-preview-thumbs" :options="swiperOption" name="popx-preview">
          <swiper-slide v-for="(item,key) in popxdata.data" :key="key" :class="{'active':key === popxdata.idx}" @click.native="thumbSelect(key)">
            <img :src="item.thumb" alt="">
          </swiper-slide>
        </swiper>
        <div class="popx-swiper-btn popx-swiper-prev" @click="swiperChange(-1)"></div>
        <div class="popx-swiper-btn popx-swiper-next" @click="swiperChange(1)"></div>
      </div>
      <div class="popx-preview-content-right">
        <div class="m-b16">图片信息</div>
        <div class="popx-preview-flex-box">
          <div class="popx-preview-flex-item">文件名称</div>
          <div class="popx-preview-flex-item">{{prevdata.filename}}</div>
        </div>

        <div class="popx-preview-flex-box">
          <div class="popx-preview-flex-item">文件尺寸</div>
          <div class="popx-preview-flex-item">{{prevdata.size}}</div>
        </div>

        <div class="popx-preview-flex-box">
          <div class="popx-preview-flex-item">更新时间</div>
          <div class="popx-preview-flex-item">{{prevdata.update_time}}</div>
        </div>

        <div class="popx-preview-flex-box">
          <div class="popx-preview-flex-item">所有者</div>
          <div class="popx-preview-flex-item">{{prevdata.name}}</div>
        </div>
      </div>
    </div>
    <div class="popx-preview-close" @click="close"><span class="close"></span></div>
  </div>
</template>

<script>
  import Poppers from '../Poppers.js'
  export default {
    mixins: [Poppers],
    data: () => ({
      popxdata: {
        idx: 0,
        data: [
          {
            filename: '',
            size: '',
            update_time: '',
            owner: ''
          }
        ]
      },
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 16
      }
    }),
    computed: {
      prevdata () {
        return this.popxdata.idx > -1 ? this.popxdata.data[this.popxdata.idx] : {}
      }
    },
    methods: {
      close () {
        this.$emit('close')
      },
      swiperChange (p) {
        let swiper = this.swipers['popx-preview']
        if (p === 1) swiper.slideNext()
        if (p === -1) swiper.slidePrev()
      },
      previewChange (p) {
        let temp = this.popxdata.idx
        temp += p
        if (temp < 0) temp = 0
        if (temp >= this.popxdata.data.length) temp = this.popxdata.data.length - 1
        if (this.popxdata.idx !== temp) this.popxdata.idx = temp
      },
      clipboard (d) {
        if (d.action === 'copy') {
          this.$toast('复制成功', 'cc')
        }
      },
      downFile () {
        let alink = document.createElement('a')
        alink.href = this.prevdata.url
        alink.download = this.prevdata.filename
        document.body.appendChild(alink)
        alink.click()
        let tempto = setTimeout(_ => {
          clearTimeout(tempto)
          document.body.removeChild(alink)
        }, 10)
      },
      delFile (id) {
        this.popperDelete('您确定要删除文件' + this.prevdata.filename + '吗？', _ => {
          this.$Global.async('file_del', true).getData({
            file_ids: [id]
          }, '', false).then(d => {
            if (d.status === 0) {
              this.changeDataArr()
            }
            this.$toast(d.message, 'cc')
          }, e => {
            let errornames = this.prevdata.filename
            this.$toast('您不是【' + errornames + '】的所有者，不能删除', 'cc')
          })
        })
      },
      changeDataArr () {
        let temp = this.popxdata.idx
        this.popxdata.data.splice(temp, 1)
        if (this.popxdata.data.length === 0) {
          this.$emit('close', 'delete')
          this.popxdata.idx = -1
        }
        if (temp >= this.popxdata.data.length) this.popxdata.idx = this.popxdata.data.length - 1
      },
      thumbSelect (idx) {
        this.popxdata.idx = idx
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
    z-index: 99;
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
    background-color: #2F3543;
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
      height: 72px;
      width: 72px;
      align-self: center;
      border: 1px solid transparent;
      padding: 8px;
      overflow: hidden;
      cursor: pointer;
      &.active {
        border-color: #3F4656;
      }
      img {
        min-width: 100%;
        min-height: 100%;
        display: block;
        margin: 0 auto;
      }
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
    background-color: #262A35;
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
