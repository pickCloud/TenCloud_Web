<template>
  <div class="task-item clearfix task-upload">
    <div class="task-upload-item task-item-a">{{filename}}</div>
    <div class="task-upload-item task-item-b">{{filesize}}</div>
    <div class="task-upload-item task-item-c">
      <span>{{uping}}%</span>
      <i class="icon icon-close right" v-if="upok" @click="removeTask"></i>
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
      upok: false
    }),
    methods: {
      upload () {
        let temppost = {}
        this.$Global.async('file_upload', true).getData({
          file_infos: [
            {
              hash: this.data.hash,
              pid: this.data.pid
            }
          ]
        }).then(d => {
          temppost.file_id = d.data[0].file_id
          let formata = new FormData()
          formata.append('file', this.data.file)
          formata.append('token', d.data[0].token)
          upload(this.data.file, d.data[0].token, null, (progress) => {
            this.uping = Math.ceil(progress.loaded * 100 / progress.total)
          }).then(res => {
            this.upok = true
            temppost.filename = res.filename
            temppost.size = res.size
            temppost.mime = res.type
            temppost.qiniu_id = res.key
            this.update(temppost)
          })
        })
      },
      update (p) {
        this.$Global.async('file_update', true).getData(p).then(d => {
          if (this.data.cb) this.data.cb(d)
        })
      },
      removeTask () {
        this.$parent.removeTask(this.data.hash)
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
    /*padding-right: 16px;*/
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
