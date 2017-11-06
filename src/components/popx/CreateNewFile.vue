<template>
  <div class="popx-new">
    <div class="popx-new-cont">
      <div class="popx-new-title p-lr-16">
        <span>{{popxdata.title}}</span>
        <span class="close" @click = "close('cancel')"></span>
      </div>
      <div class="popx-new-body">
        <div class="text-center m-b32">
          <input type="text" class="vam" placeholder="文件夹名称" v-model="filename">
        </div>
        <div class="btn-group text-center">
          <m-btn class="primary_bg grey-dark_txt m-r8" @click.native="close('sure')">确定</m-btn>
          <m-btn class="cancel_btn" @click.native="close('cancel')">取消</m-btn>
        </div>
      </div>
    </div>
    <div class="popx-new-overflow"></div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      popxdata: {
        title: ''
      },
      filename: ''
    }),
    methods: {
      close (type) {
        this.$emit('close', {
          type: type,
          filename: this.filename
        })
      }
    }
  }
</script>

<style lang="scss">
  /*.popx-new {
    position: fixed;
    width: 100%;height: 100%;
    left: 0;top: 0;
    z-index: 99999;
  }
  .popx-new-cont {
    position: absolute;
    width: 500px;
    height: 290px;
    left: 50%;
    top: 50%;
    margin-left: -250px;
    margin-top: -145px;
    z-index: 1;
  }
  .popx-new-title {
    position: relative;
    height: 50px;
    line-height: 50px;
    background-color: #262a35;
    font-size: 0.9rem;
    .close {
      top: 14px;
      right: 16px;
      cursor: pointer;
      transition: all 0.5s;
      &:hover {
        transform: rotate(180deg);
      }
    }
  }
  .popx-new-body {
    background-color: #404655;
    height: 240px;
    input {
      border: 1px solid rgba(255,255,255,0.2);
      background: none;
      display: inline-block;
      width: 468px;
      margin-top: 50px;
      padding: 16px;
      color: #7f8da4;
    }
    .cancel_btn {
      border: 1px solid rgba(255,255,255,0.2);
      padding: 0 16px;
    }
  }
  .popx-new-overflow {
    position: absolute;
    width: 100%;height: 100%;
    left: 0;top: 0;
    background-color: rgba(0,0,0,0.8);
  }
  */
</style>
