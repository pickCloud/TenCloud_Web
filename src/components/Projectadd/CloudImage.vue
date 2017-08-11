<template>
  <div class="down-image m-b16 p-16">
    <div class="lay-lcr clearfix m-b16">
      <div class="lay-left text-center lay-border">镜像地址</div>
      <div class="lay-center">
        <input type="text" v-model="image_url">
      </div>
      <div class="lay-right">
        <m-btn class="primary_bg grey-dark_txt" :sizeh="-1" @click.native="download">开始下载</m-btn>
      </div>
    </div>
    <div class="lay-lcr clearfix">
      <div class="lay-left text-center lay-border">版本号</div>
      <div class="lay-center2">
        <input type="text" v-model="image_ver">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      image_url: '',
      image_ver: ''
    }),
    methods: {
      download () {
        this.$Global.async('project_down_image', true).getData({
          image_url: this.image_url
        }).then(d => {
          console.log(d)
        })
      }
    }
  }
</script>
