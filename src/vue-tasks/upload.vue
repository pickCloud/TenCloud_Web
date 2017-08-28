<template>
  <div class="task-item clearfix task-upload">
    <div class="task-upload-item task-item-a">{{filename}}</div>
    <div class="task-upload-item task-item-b">{{filesize}}</div>
    <div class="task-upload-item task-item-c">
      <span>{{uping}}%</span>
      <i class="icon icon-close right" v-if="upok"></i>
    </div>
  </div>
</template>

<script>
  import {upload} from '../Qiniu.js'

  export default {
    props: {
      data: {
        type: Object
      },
      value: {
        type: Array
      }
    },
    data: () => ({
      uping: 0,
      updata: {},
      upok: false
    }),
    methods: {
      upload () {
        let temppost = {}
        this.$Global.async('file_upload', true).getData({
          hash: this.data.hash,
          pid: this.data.pid
        }).then(d => {
          temppost.file_id = d.data.file_id
          let formata = new FormData()
          formata.append('file', this.data.file)
          formata.append('token', d.data.token)
          upload(this.data.file, d.data.token, null, (d) => {
            this.uping = Math.ceil(d.loaded * 100 / d.total)
          }).then(d => {
            this.updata = d.data
            this.upok = true
          })
        })
      }
    },
    computed: {
      filename () {
        return this.data.file.name
      },
      filesize () {
        let result = this.data.file.size
        let suffix = 'B'
        if (result > 1000000000) {
          result = result / 1024 / 1024 / 1024
          suffix = 'G'
        } else if (result > 1000000) {
          result = result / 1024 / 102
          suffix = 'M'
        } else if (result > 1000) {
          result = result / 1024
          suffix = 'KB'
        }
        return Math.ceil(result * 100) / 100 + suffix
      }
    },
    mounted () {
      this.upload()
    }
  }
</script>

<style lang="scss">
  .task-upload {
    padding: 16px;
  }
  .task-upload-item {
    float: left;
    padding-right: 16px;
  }
  .task-item-a {
    width: 55%;
  }
  .task-item-b {
    width: 20%;
  }
  .task-item-c {
    width: 25%;
  }
</style>
