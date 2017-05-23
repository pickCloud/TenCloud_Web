<template>
  <div class="file-field">
    <div class="file-field_group">
      <slot><i class="ten-icon">&#xe68f;</i> 文件上传</slot>
      <input type="file" :accept="accept" @change="change($event)">
    </div>
    <div class="file-field_view" :class="{'file-field_isimg':isImage}" v-if="canPreView">
      <span v-if="!isImage&&filename" v-html="filename"></span>
      <img :src="base64" class="file-field_img" v-if="isImage"></img>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Fileinput',
    props: {
      accept: {
        type: String,
        default: 'image/png,image/gif,image/jpg,image/jpeg'
      },
      showview: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        elfile: '',
        filename: '',
        base64: ''
      }
    },
    methods: {
      change (e) {
        this.elfile = e.target
        this.filename = this.elfile.value.match(/\\([^\\]+\.\S+)/)[1]
        this.readfile(this.elfile.files[0])
      },
      readfile (f) {
        let _this = this
        let readfile = new FileReader()
        readfile.readAsDataURL(f)
        readfile.onload = function () {
          _this.base64 = this.result
        }
      }
    },
    computed: {
      canReadFile () {
        return typeof FileReader !== 'undefined'
      },
      isImage () {
        return !/image\/\w+/.test(this.elfile.type)
      },
      canPreView () {
        return this.showview && (this.base64 || this.filename)
      }
    }
  }
</script>
