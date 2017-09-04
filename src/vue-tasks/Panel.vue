<template>
  <div class="task-panel" :class="{'mini':isMini}" v-if="tasks.length > 0 || isShow">
    <div class="task-panel-title" @click="miniAction">
      <span class="vam">任务列表</span>
      <i class="icon icon-close right" @click="isShow = false"></i>
      <i class="icon right mini-btn" :class="[miniClass]"></i>
    </div>
    <div class="task-panel-body">
      <div class="task-info" v-if="tasks.length > 0 && showInfo">
        <span>{{infotip}}</span>
        <i class="icon icon-close right" @click="showInfo = false"></i>
      </div>
      <component v-for="(item,key) in tasks" :key="key" :is="item.type" :data="item" @remove="removeTask" @complete="complete"></component>
    </div>
  </div>
</template>

<script>
  import MD5 from 'browser-md5-file'
  import upload from './upload.vue'

  export default {
    data: () => ({
      isMini: false,
      isShow: false,
      showInfo: true,
      tasks: [],
      hashs: []
    }),
    methods: {
      miniAction () {
        this.isMini = !this.isMini
      },
      addTask (v) {
        if (v.type === 'upload') {
          MD5(v.file, (e, m) => {
            v.hash = m
//            if (this.hashs.indexOf(m) === -1) {
            this.tasks.push(v)
            this.hashs.push(m)
//            }
          })
        }
      },
      removeTask (hash) {
        let idx = this.hashs.indexOf(hash)
        this.tasks.splice(idx, 1)
      },
      complete () {
        console.log('complete')
      }
    },
    computed: {
      miniClass () {
        return this.isMini ? 'icon-fangda' : 'icon-jianshao'
      },
      infotip () {
        if (this.tasks.length > 0) this.isShow = true
        return `您有${this.tasks.length}个任务处理中`
      }
    },
    components: {upload}
  }
</script>

<style lang="scss">
  .task-panel {
    position: fixed;
    width: 640px;
    height: 400px;
    right: 16px;
    bottom: 0;
    background-color: #3f4656;
    transition: all 0.2s;
    &.mini {
      bottom: -350px;
    }
    .icon-close {
      cursor: pointer;
      transition: all 0.2s;
      &:hover {
        transform: rotate(180deg);
      }
    }
  }
  .task-panel-title {
    height: 50px;
    line-height: 50px;
    background-color: #2f3543;
    padding: 0 16px;
    .mini-btn {
      cursor: pointer;
    }
  }
  .task-panel-body {
    height: 350px;
    overflow-y: auto;
  }
  .task-info {
    height: 40px;
    line-height: 40px;
    padding: 0 16px;
    background-color: #48bbc0;
    color: #03474a;
  }
  .task-item {
    border-bottom: 1px solid rgba(255,255,255,0.05);
    /*border-top: 1px solid rgba(255,255,255,0.2);*/
  }
</style>
