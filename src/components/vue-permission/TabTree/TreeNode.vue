<template>
    <div class="node" >
      <!--<div class="node-label"><m-btn class="m-r16" :sizeh="30" :sizew="70" :class="btnIndex==index?'primary_bg grey-dark_txt':'panel-bg_bg'" @click.native="setBtnIndex(index)" v-if="idx=='0'">{{model.name}}</m-btn></div>-->
      <!--<m-btn  :sizeh="30" :class="btnIndexSec==index?'select-active':''" @click.native="setBtnIndexSec(index)" v-if="idx=='1'">{{model.name}}</m-btn>-->
     <ul class="node-labels p-b16" v-if="idx<2">
       <li v-for="(item,key) in model" :class="idx==2?'dis-block':''">
         <m-btn v-if="idx===0" @click.native="tabidx = key" class="m-r16" :sizeh="30" :sizew="70" :class="tabidx==key?'primary_bg grey-dark_txt':'panel-bg_bg'">{{item.name}}</m-btn>
         <m-btn v-if="idx===1" :sizeh="30" :class="tabidx==key?'select-active':''" @click.native="tabidx = key" >{{item.name}}</m-btn>
         <!--<div v-if="idx===2" >-->
           <!--<tab-label :dataList="model"></tab-label>-->
           <!--<tab-tr :dataList="model"></tab-tr>-->
         <!--</div>-->
       </li>
     </ul>
      <ul class="node-childs" v-if="idx<2">
        <li v-for="(item,key) in model" :class="{'active':tabidx === key}">
          <tree-node :model="item.data" :idx="nodeIndex"></tree-node>
        </li>
      </ul>
      <tree-check v-if="idx > 1" v-for="(item,key) in model" :model="item" :vallue="child_selected" v-model="child_selected" :idx="0" :key="key"></tree-check>
    </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  export default {
    name: 'TreeNode',
    props: ['model', 'idx'],
    data: () => ({
      selects: [],
      isSelectALl: false,
      tabidx: 0,
      child_selected: []
    }),
    methods: {
      ...mapMutations('permission', ['setBtnIndex', 'setBtnIndexSec']),
      selectALl () {
      }
    },
    computed: {
      ...mapState('permission', ['btnIndex', 'btnIndexSec']),
      nodeIndex () {
        return this.idx + 1
      }
    },
    created () {
//      console.log(this.idx)
    }
  }
</script>

<style lang='scss'>
.node-labels .dis-block{
  display: block;
}
</style>
