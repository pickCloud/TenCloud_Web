<template>
  <div class="up-image m-b16 p-16">
    <div class="lay-lcr clearfix m-b16">
      <div class="lay-l text-center">
        <div class="formbylabel file theme-dft">
          <input type="file" id="a5wpj6gl9za" name="file" @change="fileChange" accept=".tar">
          <label for="a5wpj6gl9za" class="file-label">选择文件</label>
        </div>
      </div>
      <div class="lay-c">
        <div class="lay-striped-bg p-lr-16">{{upfile.value}} </div>
      </div>
      <div class="lay-r">
        <m-btn class="primary_bg grey-dark_txt" :sizeh="-1" @click.native="startUpImage" v-if="!uping">开始上传</m-btn>
        <div class="text-center ing-box primary_bg" v-else>
          <div class="ing-box-bar"></div>
          <div class="ing-box-txt grey-dark_txt">{{uping}}</div>
        </div>
      </div>
    </div>
    <div class="lay-lcr clearfix">
      <div class="lay-l text-center lay-border">版本号</div>
      <div class="lay-c2">
        <input type="text" v-model="ver">
      </div>
    </div>
  </div>
</template>

<script>
  import {upStream} from '../../Qiniu.js'

  export default {
    data: () => ({
      upfile: {},
      uping: '',
      upok: false,
      ver: ''
    }),
    methods: {
      fileChange (e) {
        this.upfile = e.target
      },
      startUpImage () {
        let file = this.upfile.files[0]
        if (file.size > 1024 * 1024 * 1024) {
          this.$toast('镜像不能大于1G', 'cc')
          return
        }
        let formata = new FormData()
        formata.append('file', file)
        upStream({
          file: formata,
          method: this.$Global.apis['project_up_image'].m.toUpperCase(),
          url: this.$Global.apis.baseURL + this.$Global.apis['project_up_image'].u,
          ing: (d) => {
            let bfb = parseInt(d.loaded * 100 / d.total)
            this.uping = bfb + '%'
            this.$el.querySelector('.ing-box-bar').style.left = (bfb - 100) + '%'
          }
        }).then(d => {
          this.updata = d.data
          this.upok = true
        })
      },
      getData () {
        if (!this.upok) {
          this.$toast(this.upfile.files ? '上传中，请稍等' : '请先上传镜像', 'cc')
          return false
        }
        if (this.ver === '') {
          this.$toast('请输入版本号', 'cc')
          return false
        }
        return {
          version: this.ver
        }
      }
    }
  }
</script>
