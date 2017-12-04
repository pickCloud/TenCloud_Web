<template>
  <div class="page-pad page-vernote">
    <panel>
      <div class="panel-title" slot="title">【{{ver}}】构建日志</div>
      <div class="p-16">
        <div class="m-b16">构建过程</div>
        <ul class="note-code">
          <li>更新日期：{{data.update_time}}</li>
          <li style="padding:16px 0;"><strong>out:</strong></li>
          <li v-for="item in data.log.out">{{item}}</li>
          <li style="padding:16px 0;"><strong>err:</strong></li>
          <li v-for="item in data.log.err">{{item}}</li>
        </ul>
      </div>
    </panel>
  </div>
</template>

<script>
  export default {
    data: () => ({
      ver: '',
      pn: '',
      data: {}
    }),
    methods: {
      getApiData () {
        this.ver = this.$route.params.v
        this.pn = this.$route.params.pname
        this.$axios.http('project_vlog', '', 'get', this.pn + '/image/' + this.ver + '/log').then(d => {
          this.data = d.data
        })
      }
    },
    created () {
      if (!this.$route.params.pname) this.$router.replace({name: 'Projects'})
      else this.getApiData()
    }
  }
</script>

<style lang="scss">
.note-code {
  padding: 16px !important;
  background-color: #1d202a;
  li {
    padding: 4px 0;
  }
}
</style>
