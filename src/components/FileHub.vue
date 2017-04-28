<template>
  <div class="v-filehub">
    <div class="crumbs">
      <span class="crumbs-item">仓库</span>
      <span class="crumbs-item qingse-text">文件仓库</span>
    </div>
    <div class="v-content">
      <div class="panel">
        <div class="btns-group margin-b-24">
          <search class="left"></search>
          <tselect :data="types" class="right"></tselect>
        </div>
        <table class="striped highlight file-table">
          <col width="30%">
          <tbody>
            <tr v-for="i in info">
              <td><router-link :to="{ name:'File-Details', params: {id: 1} }">{{ i.left }}</router-link></td>
              <td>{{ i.right }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      types: [
        {label: '1', active: true},
        {label: '2'},
        {label: '3'},
        {label: '4'},
        {label: '5'}
      ],
      info: [
        {
          left: 'jQuery',
          right: '1'
        },
        {
          left: 'react',
          right: '2'
        },
        {
          left: 'jQuery',
          right: '3'
        },
        {
          left: 'react',
          right: '4'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "../scss/FileHub";
</style>
