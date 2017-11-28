<template>
    <div class="">
      <slot name="tabFitst" class="m-t16">
        <m-btn v-for="(item,index) in dataList" :sizeh="30" :sizew="70" class="m-r16" :class="btnIndex==index?'primary_bg grey-dark_txt':'panel-bg_bg'" @click.native="btnIndexChange(index)">{{item.name}}</m-btn>
      </slot>
      <slot name ='tabSecond'>
        <div class="m-t16">
          <m-btn v-for="(item,index) in dataList[btnIndex].child" :sizeh="30" :class="btnIndexSec==index?'select-active':''" @click.native="btnIndexSecChange(index)">{{item.name}}</m-btn>
        </div>
      </slot>
      <slot name="tabLable">
        <m-table class="hover striped machines-table m-t16" v-for="(item,index) in dataList[btnIndex].child[btnIndexSec].child">
            <col width="55px">
            <thead>
            <tr class="panel">
              <th><m-checkbox class="list-check" :data="{label: item.name}" v-model="isSelectFilehubAll"></m-checkbox></th>
            </tr>
            </thead>
            <tbody>
            <tr >
              <td>
              <span v-for="items in item.child">
              <m-checkbox  class="list-check" v-model="selectFilehub" :data="{label:(items.id+'')}" hide-label></m-checkbox>
                <span>{{items.filename||items.name}}</span>
              </span>
              </td>
            </tr>
            </tbody>
        </m-table>
      </slot>
    </div>
</template>

<script>
    export default {
      name: 'tabs',
      props: ['dataList', 'dataListsec', 'dataListLabel'],
      data: () => ({
        btnIndex: 0,
        btnIndexSec: 0
      }),
      methods: {
        btnIndexChange (index) {
          this.btnIndex = index
          this.btnIndexSec = 0
        },
        btnIndexSecChange (index) {
          this.btnIndexSec = index
        }
      },
      computed: {
        isSelectFilehubAll: function () {
          return true
        }
      }
    }
</script>

<style lang='scss'>
</style>
