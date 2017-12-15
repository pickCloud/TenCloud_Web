<template>
  <div class="down-image m-b16 p-16">
    <div class="lay-lcr clearfix m-b16">
      <div class="lay-l text-center lay-border">镜像地址</div>
      <div class="lay-c">
        <input type="text" v-model="image_url">
      </div>
      <div class="lay-r">
        <m-btn class="primary_bg grey-dark_txt" :sizeh="-1" @click.native="download" v-if="!isDownload">开始下载</m-btn>
        <div class="text-center ing-box primary_bg" v-else>
          <div class="ing-box-bar"></div>
          <div class="ing-box-txt grey-dark_txt">下载中</div>
        </div>
      </div>
    </div>
    <div class="lay-lcr clearfix">
      <div class="lay-l text-center lay-border">版本号</div>
      <div class="lay-c2">
        <input type="text" v-model="image_ver">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      image_url: '',
      image_ver: '',
      isDownload: false
    }),
    methods: {
      download () {
        if (this.image_url === '') {
          this.$toast('请输入镜像地址', 'cc')
          return false
        }
        if (this.isDownload) return
        this.isDownload = true
        this.$axios.http('project_down_image', {
          image_url: this.image_url
        }, 'post').then(d => {
          console.log(d)
          this.isDownload = false
        })
      },
      getData () {
        const temp = {
          version: this.image_ver
        }
        if (this.image_url === '') {
          this.$toast('请输入镜像地址', 'cc')
          return false
        }
        if (this.image_ver === '') {
          this.$toast('请输入版本号', 'cc')
          return false
        }
        return temp
      }
    }
  }
</script>
