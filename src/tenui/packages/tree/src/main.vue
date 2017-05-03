<template>
  <ul class="tree">
    <tree-node v-for="(item,key) in data" :key="key" :node="item"
               :nodeidx="key+''" :nowidx="nowidx" :collapse="collapse"
               :cacheidx="cacheidx"
               @nodeSelect="nodeSelect"></tree-node>
  </ul>
</template>

<script>
  import TreeNode from './node.vue'
  export default {
    name: 'Tree',
    props: {
      data: {
        type: Array,
        required: true
      },
      collapse: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        nowidx: '',
        cacheidx: ''
      }
    },
    methods: {
      nodeSelect (idx, sub) {
        if (this.nowidx === idx) this.nowidx = ''
        else this.nowidx = idx
        if (!sub) this.cacheidx = idx
      }
    },
    components: {TreeNode}
  }
</script>
