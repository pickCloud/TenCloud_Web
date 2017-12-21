<template>
    <div class="node-root" style="max-height: 400px;overflow: auto">
      <tree-node
      :model="model"
      :idx="0"
      :isLabel="isLabel"
      >
      </tree-node>
    </div>
</template>

<script>
    export default {
      name: 'TabTree',
      props: ['model', 'isLabel'],
      data: () => ({
        selects: []
      }),
      created () {
        console.log(this.isLabel)
      }
    }
</script>

<style lang='scss'>
  .node-childs > li:not(.active) {
    display: none;
  }
  .node-labels > li {
    display: inline-block;
  }
</style>
