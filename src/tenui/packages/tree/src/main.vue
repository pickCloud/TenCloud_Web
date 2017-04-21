<template>
  <ul class="tree">
    <tree-node v-for="(item,key) in data" :key="key" :node="item" :collapse="collapse"></tree-node>
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
    components: {TreeNode}
  }
</script>
