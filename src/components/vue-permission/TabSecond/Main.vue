<template>
  <div class="flex-flex">
    <m-btn v-for="(item,index) in list" :sizeh="30" :class="btnIndex==index?'select-active':''" @click.native="btnIndexChange(index)">云服务器</m-btn>
  </div>
</template>

<script>
    export default {
      name: 'TabSecond',
      prop: ['dataList'],
      data: () => ({
        list: [
          {name: '云服务器'},
          {name: '项目'},
          {name: '文件服务'}
        ],
        btnIndex: 0
      }),
      methods: {
        btnIndexChange (index) {
          this.btnIndex = index
        }
      }
    }
</script>

<style lang='scss'>
</style>
