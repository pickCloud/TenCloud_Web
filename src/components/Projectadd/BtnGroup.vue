<template>
  <div class="btn-group">
    <m-btn class="no-radius btn-github" :class="[loadClass, value === 'github' ? btnActive : '']" @click.native="change('github')" v-html="gittip"></m-btn>
    <m-btn class="no-radius btn-github" :class="[value === 'limage' ? btnActive : '']" @click.native="change('limage')" v-if="mode!='0'">从本地上传镜像</m-btn>
    <m-btn class="no-radius btn-github" :class="[value === 'cimage' ? btnActive : '']" @click.native="change('cimage')" v-if="mode!='0'">从云端下载镜像</m-btn>
  </div>
</template>

<script>
  import Event from '../Events'
  import {mapState, mapMutations, mapActions} from 'vuex'
  export default {
    props: {
      mode: {
        type: String,
        default: '0'
      },
      value: {
        type: String
      },
      btnActive: {
        type: String,
        default: 'primary_bg grey-dark_txt'
      }
    },
    data: () => ({
//      gittip: '绑定GitHub代码仓库',
//      hasGit: false
    }),
    computed: {
      ...mapState('github', ['gittip', 'hasGit']),
      loadClass () {
        console.log(this.gittip)
        let str = this.gittip
        return str.indexOf('<img') !== -1 ? 'loading' : ''
      }
    },
    watch: {
      value (n, o) {
        if (n !== 'github') {
          this.setGittip('GitHub代码仓库')
        } else {
          if (this.hasGit) {
            this.setGittip('重新绑定GitHub代码仓库')
          } else {
            this.setGittip('绑定GitHub代码仓库')
          }
        }
      }
    },
    methods: {
      ...mapActions('github', ['getGitHub']),
      ...mapMutations('github', ['setGittip']),
      change (p) {
        if (this.value === p) {
          if (p === 'github') {
            this.setGittip('<img class="vam" src="./static/img/spin.gif"></img> <span class="vam">数据加载中</span>')
            this.getGitHub({gittip: '重新绑定GitHub代码仓库', 'hasGit': true})
          }
        } else {
          Event.$emit('input', p)
        }
      }
    },
    created () {
    }
  }
</script>
