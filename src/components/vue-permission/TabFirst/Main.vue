<template>
    <div class="">
      <div>
        <m-btn v-for="(item,index) in list" :sizeh="30" :sizew="70" :class="btnIndex==index?'primary_bg grey-dark_txt':'panel-bg_bg'" @click.native="btnIndexChange(index)">{{item.name}}</m-btn>
      </div>
      <tab-second v></tab-second>
    </div>
</template>

<script>
//    import TabSecond from "../TabSecond/Main.vue";

    export default {
//      components: {TabSecond},
      name: 'TabFirst',
      prop: ['dataList'],
      data: () => ({
        list: [
          {name: '功能'},
          {name: '数据'}
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
