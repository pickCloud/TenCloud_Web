<template>
  <div class="git-list m-b16">
    <table class="table hover striped machines-table theme-dft">
      <thead>
      <tr>
        <th>仓库名称</th>
        <th>仓库路径</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, i) in githubs">
        <td><m-radio v-model="repos_idx" :data="{label:item.repos_name, value:i+''}"></m-radio></td>
        <td>{{item.repos_url}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
//  import Event from '../Events.js'
  import {mapState, mapMutations, mapActions} from 'vuex'
  export default {
    props: {
      data: {
        type: Object
      }
    },
    data: () => ({
//      repos_idx: '0',
//      githubs: []
    }),
    methods: {
      ...mapMutations('github', ['setGittip', 'setHasGit']),
      ...mapActions('github', ['getGitHub']),
//      getGitHub (callback) {
//        let getUrl = window.location.href
//        let getp = {url: getUrl}
//        this.$Global.async('project_repos', true).getData(getp, '', false).then(d => {
//          if (d.status === 0) {
//            this.githubs = d.data
//            this.repos_idx = '0'
//
//            if (callback && (typeof callback).toLowerCase() === 'function') callback()
//            if (callback && (typeof callback).toLowerCase() === 'boolean') this.initReposIdx()
//          } else {
//            this.$toast(d.message, 'cc')
//          }
//        }).catch(error => {
//          if (error && error.response.data.data.url) {
//            window.location.href = error.response.data.data.url
//          }
//        })
//        return {}
//      },
//      initReposIdx () {
//        let i = -1
//        while (++i < this.githubs.length) {
//          let v = this.githubs[i]
//          if (v.repos_name === this.data.repos_name && v.repos_url === this.data.repos_url) {
//            this.repos_idx = i + ''
//            break
//          }
//        }
//      },
      getData () {
        console.log(this.repos_idx)
        const temp = this.githubs[this.repos_idx]
        if (!temp) this.$toast('请先拉取来源', 'cc')
        return temp
      }
    },
    created () {
      if (this.$route.params && this.$route.query.token) {
        this.getGitHub({gittip: '重新绑定GitHub代码仓库', hasGit: true})
      }
    },
    computed: {
      ...mapState('github', ['gittip', 'hasGit', 'githubs', 'repos_idx'])
    }
  }
</script>
