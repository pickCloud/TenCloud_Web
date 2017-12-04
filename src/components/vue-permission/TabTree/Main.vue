<template>
    <div class="node-root" style="max-height: 400px;overflow: auto">
      <tree-node
      :model="model"
      :idx="0"
      >
      </tree-node>
    </div>
</template>

<script>
    export default {
      name: 'TabTree',
      props: ['model'],
      data: () => ({
        selects: []
      })
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
